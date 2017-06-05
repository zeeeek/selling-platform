<template>
	<div class="index-wrapper">
		<div class="index-left">
			<div class="index-left-block">
				<h2 class="title">全部产品</h2>

				<template v-for="product in productList">
					<h3 class="title">{{ product.title }}</h3>
					<ul>
						<li v-for="item in product.list">
							<a :href="item.url">{{ item.name }}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div v-if="!product.last" class="hr"></div>
				</template>
			</div>
			<div class="index-left-block">
				<h2 class="title">最新消息</h2>
				<ul>
					<li v-for="item in newList">
						<a :href="item.url" class="new-item">{{ item.title }}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="index-right">
			<slide-show :slides="slides" :inv="invTime"></slide-show>
			<div class="index-board-list">
				<div class="index-board-item" v-for="(item,index) in boardList"
					:class="[{'line-last': index % 2 !==0}, 'index-board-'+item.id]">
					<div class="index-board-item-inner">
						<h2 class="title">{{ item.title }}</h2>
						<p class="description">{{ item.description }}</p>
						<div class="index-board-button">
							<router-link class="button" :to="{path:'detail/analysis'}">立即购买</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import slideShow from '../components/slideShow'

export default {
	data () {
		return {
			invTime: 2000,
			slides: [
		        {
		          src: require('../assets/slideShow/pic1.jpg'),
		          title: 'xxx1',
		          href: 'detail/analysis'
		        },
		        {
		          src: require('../assets/slideShow/pic2.jpg'),
		          title: 'xxx2',
		          href: 'detail/count'
		        },
		        {
		          src: require('../assets/slideShow/pic3.jpg'),
		          title: 'xxx3',
		          href: 'http://xxx.xxx.com'
		        },
		        {
		          src: require('../assets/slideShow/pic4.jpg'),
		          title: 'xxx4',
		          href: 'detail/forecast'
		        }
		    ],
			boardList: [
		        {
		          title: '开放产品',
		          description: '开放产品是一款开放产品',
		          id: 'car',
		          toKey: 'analysis',
		          saleout: false
		        },
		        {
		          title: '品牌营销',
		          description: '品牌营销帮助你的产品更好地找到定位',
		          id: 'earth',
		          toKey: 'count',
		          saleout: false
		        },
		        {
		          title: '使命必达',
		          description: '使命必达快速迭代永远保持最前端的速度',
		          id: 'loud',
		          toKey: 'forecast',
		          saleout: true
		        },
		        {
		          title: '勇攀高峰',
		          description: '帮你勇闯高峰，到达事业的顶峰',
		          id: 'hill',
		          toKey: 'publish',
		          saleout: false
		        }
      		],
			newList: [],
			productList: {
				pc: {
					title:'PC产品',
					list: [
						{
							name: '数据统计',
							url: 'http://starcraft.com'
						},
						{
			              name: '数据预测',
			              url: 'http://warcraft.com'
			            },
			            {
			              name: '流量分析',
			              url: 'http://overwatch.com',
			              hot: true
			            },
			            {
			              name: '广告发布',
			              url: 'http://hearstone.com'
			            }
					]
				},
				app: {
					title: '手机应用类',
					last: true,
					list: [
						{
							name: '91助手',
							url: 'http://weixin.com'
						},
						{
			              name: '产品助手',
			              url: 'http://twitter.com',
			              hot: true
			            },
			            {
			              name: '智能地图',
			              url: 'http://maps.com'
			            },
			            {
			              name: '团队语音',
			              url: 'http://phone.com'
			            }
					]
				}
			}
		}
	},
	created () {
		this.$http.get('/api/new').then((response) => {
			response = response.body;
			if(response.errno === 0){
				this.newList = response.data.getNewsList;
			}
		})
	},
	components: {
		slideShow
	}
}


</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.index-wrapper 
	display: flex
	margin: 0 auto
	overflow: hidden
	width: 1200px
	.index-left
		flex: 0 0 270px
		wifth: 270px
		text-align: left
		font-size: 15px
		.index-left-block
			margin:0 15px
			width: 100%
			background-color: #fff
			box-shadow: 0 0 1px #ddd
			h2
				padding: 10px 15px
				margin-bottom: 20px
				color: #fff
				background-color: #4fc08d
			h3
				padding: 0 15px 5px 15px
				font-weight: bold
				color: #222
			ul
				padding: 10px 15px
				li
					padding: 5px
					.hot-tag
						background-color: red
						color: #fff
					.new-item
						display: inline-block
						width: 200 px
						overflow: hidden
						text-overflow: ellipsis
						white-space: nowrap
			.hr
				margin-bottom: 20px
				border-bottom: 1px solid #eee
				&.last-child
					border: none
	.index-right
		flex: 1
		margin-left: 30px
		.index-board-list
			.index-board-item
				float: left
				margin: 0 20px 20px 0
				padding: 20px
				width: 400px
				box-shadow: 0 0 1px #ddd
				background-color: #fff
				&.line-last
					margin-right: 0
				&.index-board-car .index-board-item-inner
					background: url(../assets/images/2.png) no-repeat
				&.index-board-loud .index-board-item-inner
					background: url(../assets/images/3.png) no-repeat
				&.index-board-earth .index-board-item-inner
					background: url(../assets/images/1.png) no-repeat
				&.index-board-hill .index-board-item-inner
					background: url(../assets/images/4.png) no-repeat
				.index-board-item-inner
					padding-left: 120px
					min-height: 125px
					.title
						margin-bottom: 15px
						color: #000
						font-size: 18px
						font-weight: bold
					.description
						line-height: 15px
						font-size: 15px
					.index-board-button
						margin-top: 20px
						.button
							background: #4fc08d
							color: #fff
							display: inline-block
							padding: 10px 20px
							cursor: pointer

</style>
