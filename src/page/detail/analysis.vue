<template>
	<div class="sales-board">
		<div class="sales-board-intro">
	        <h2>流量分析</h2>
	        <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      	</div>
   		<div class="sales-board-form">
	      	<div class="sales-board-line">
	              <div class="sales-board-line-left">
	                  购买数量：
	              </div>
	              <div class="sales-board-line-right">
	                <v-counter @on-change="onParamChange('buyNum',$event)"></v-counter>
	              </div>
	        </div>
	        <div class="sales-board-line">
	              <div class="sales-board-line-left">
	                  产品类型：
	              </div>
	              <div class="sales-board-line-right">
	                <v-selection :selections="productTypes" @on-change="onParamChange('buyType',$event)"></v-selection>
	              </div>
	        </div>
	        <div class="sales-board-line">
	              <div class="sales-board-line-left">
	                  有效时间：
	              </div>
	              <div class="sales-board-line-right">
	                <v-chooser :selections="periodList" @on-change="onParamChange('period',$event)"></v-chooser>
	              </div>
	        </div>
	        <div class="sales-board-line">
	              <div class="sales-board-line-left">
	                  产品版本：
	              </div>
	              <div class="sales-board-line-right">
	                <v-chooser :selections="versionList" @on-change="onParamChange('version',$event)"></v-chooser>
	              </div>
	        </div>
	        <div class="sales-board-line">
	              <div class="sales-board-line-left">
	                  总价：
	              </div>
	              <div class="sales-board-line-right">
	                {{price}}
	              </div>
	        </div>
	        <div class="sales-board-line">
	              <div class="sales-board-line-left">
	              </div>
	              <div class="sales-board-line-right">
	                	<div class="button">
	                		立即购买
	                	</div>
	              </div>
	        </div>
	    </div>
		<div class="sales-board-des">
        	<h2>产品说明</h2>
	        <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

	        <h3>用户行为指标</h3>
	        <ul>
	          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
	          <li>用户在网站的停留时间；</li>
	          <li>用户来源网站（也叫“引导网站”）；</li>
	          <li>用户所使用的搜索引擎及其关键词；</li>
	          <li>在不同时段的用户访问量情况等。</li>
	        </ul>

	        <h3>浏览网站方式</h3>
	        <ul>
	          <li>用户上网设备类型</li>
	          <li>用户浏览器的名称和版本</li>
	          <li>访问者电脑分辨率显示模式</li>
	          <li>用户所使用的操作系统名称和版本</li>
	          <li>用户所在地理区域分布状况等</li>
	        </ul>
      	</div>
		<my-dialog>
			<table class="buy-dialog-table">
          <tr>
            <th>购买数量</th>
            <th>产品类型</th>
            <th>有效时间</th>
            <th>产品版本</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>count</td>
            <td>type</td>
            <td>time</td>
            <td>
              <span>desc</span>
            </td>
            <td>price</td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择银行</h3>
		</my-dialog>


	</div>
</template>

<script>
import Dialog from '../../components/base/dialog'
import VSelection from '../../components/base/selection'
import VCounter from '../../components/base/counter'
import VChooser from '../../components/base/chooser'
	export default {
		data () {
			return {
				buyNum: 0,
				buyType: {},
				period: {},
				version: {},
				price: 0,
				productTypes: [
					{
						label: '入门版',
						value: 0
					},
					{
						label: '中级版',
						value: 1
					},
					{
						label: '高级版',
						value: 2
					}
				],
				periodList: [
			        {
			          label: '半年',
			          value: 0
			        },
			        {
			          label: '一年',
			          value: 1
			        },
			        {
			          label: '三年',
			          value: 2
			        }
				],
				versionList: [
			        {
			          label: '客户版',
			          value: 0
			        },
			        {
			          label: '代理商版',
			          value: 1
			        },
			        {
			          label: '专家版',
			          value: 2
			        }
			    ]
			}
		},
		components: {
			myDialog: Dialog,
			VSelection,
			VCounter,
			VChooser
		},
		methods: {
			onParamChange (attr,val) {
				this[attr] = val;
				this.getPrice();
			},
			getPrice () {
				let reqParams = {
					buyNumber: this.buyNum,
					buyType: this.buyType.value,
					period: this.period.value,
					version: this.version.value
				}
				this.$http.post('/api/new',reqParams)
				.then((response) => {
					response = response.body;
					if(response.errno === 0){
						this.price = response.data.amount;
					}	
				})
			}
		}
	}
</script>


<style lang="stylus" rel="stylesheet/stylus">
	.sales-board
		background-color: #fff
		.sales-board-intro
			h2
				padding: 20px
				font-size: 20px
			p
				padding: 10px 20px
				line-height: 1.8
				background-color: #f7fcff
				color: #999
		.sales-board-form
			padding: 30px 20px
			font-size: 14px
			.sales-board-line
				clear: both
				padding-bottom: 20px
				.sales-board-line-left
					display: inline-block
					width: 100px
				.sales-board-line-right
					display: inline-block
					width: 75%
					.button
						background: #4fc08d
						color: #fff
						display: inline-block
						padding: 10px 20px
						cursor: pointer
		.sales-board-des
			padding: 15px 20px
			border-top: 20px solid #f0f2f5
			p
				line-height: 1.6
			h2
				padding-bottom: 20px
				font-size: 20px
			h3
				padding: 20px 0 10px 0
				font-size: 18px
				font-weight: bold
			li
				padding: 5px 0
</style>
