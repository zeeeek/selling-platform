<template>
	<div class="detail-wrapper">
		<div class="detail-left">
			<div class="product-board">
				<img :src="productIcon">
				<ul>
					<router-link v-for="item in products" :to="{path: item.path}" tag="li" active-class="active">
						{{ item.name }}
					</router-link>
				</ul>
			</div>
		</div>
		<div class="detail-right">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				products: [
			        {
			          name: '数据统计',
			          path: 'count',
			          icon: require('../assets/images/1.png'),
			          active: false
			        },
			        {
			          name: '数据预测',
			          path: 'forecast',
			          active: false
			        },
			        {
			          name: '流量分析',
			          path: 'analysis',
			          active: false
			        },
			        {
			          name: '广告发布',
			          path: 'publish',
			          active: false
			        }
			    ],
			    imgMap: {
		        '/detail/count': require("../assets/images/1.png"),
		        '/detail/forecast': require("../assets/images/2.png"),
		        '/detail/analysis': require("../assets/images/3.png"),
		        '/detail/publish': require("../assets/images/4.png")
		      }
			}
		},
		computed: {
			productIcon () {
				return this.imgMap[this.$route.path]
			}
		}
	}
</script> 

<style lang="stylus" rel="stylesheet/stylus" scoped>
.detail-wrapper
	margin: 0 auto
	overflow: hidden
	width: 1200px
	.detail-left
		float: left
		width: 200px
		text-align: center
		.product-board
			padding: 20px 0
			background-color: #fff
			ul 
				margin-top: 20px
				li
					padding: 10px 15px
					text-align: left
					cursor: pointer
					&:hover,&.active
						background-color: #4fc08d
						a
							display: block
	.detail-right
		float: right
		margin-left: 20px
		width: 980px

</style>
