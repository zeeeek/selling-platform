<template>
	<div>
		<div class="app-header">
			<div class="app-header-inner">
				<router-link :to="{path:'/'}" class="header-logo">
					<img src="../assets/logo.png">
				</router-link>
				<div class="header-nav">
					<ul class="nav-list">
						<li v-show="this.username !== ''" >{{this.username}}</li>
						<li v-show="this.username !== ''" class="nav-pile">|</li>
           				<li v-show="this.username !== ''" @click="this.username=''">退出</li>
						<li v-show="this.username === ''" @click="isShowDialog = !isShowDialog">登录</li>
						<li v-show="this.username === ''" class="nav-plie">|</li>
						<li v-show="this.username === ''" @click="isShowRegDialog = !isShowRegDialog">注册</li>
						<li class="nav-plie">|</li>
						<li @click="isShowaboutDialog = !isShowaboutDialog">关于</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="app-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-footer">
			<p>© 2016 fishenal MIT</p>
		</div>
		<my-dialog :isShowDialog="isShowDialog" @on-close="closeDialog('isShowDialog')">
			<logform @has-log="onSuccessLog"></logform>
		</my-dialog>
		<my-dialog :isShowDialog="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
			<p>reg hello</p>
		</my-dialog>
		<my-dialog :isShowDialog="isShowaboutDialog" @on-close="closeDialog('isShowaboutDialog')">
			<p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
		</my-dialog>
	</div>
</template>

<script>
import Dialog from './base/dialog'
import logform from './base/logform'

export default {
	data () {
		return {
			isShowDialog: false,
			isShowaboutDialog: false,
			isShowRegDialog: false,
			username: ''
		}
	},
	components: {
		myDialog: Dialog,
		logform
	},
	methods: {
		closeDialog (attr) {
			this[attr] = false;
		},
		onSuccessLog (data) {
			console.log(data);
			this.closeDialog('isShowDialog');
			this.username = data.username;
		}
	}
}


</script>

<style lang="stylus" rel="stylesheet/stylus">
body
	background-color: #f0f2f5
	.app-header
		width: 100%
		height: 90px
		line-height: 90px
		background-color: #363636
		color: #b2b2b2
		.app-header-inner
			width: 1200px
			margin: 0 auto
			.header-logo
				float: left
				img
					margin-top: 20px
					width: 50px
			.header-nav
				float: right
				ul
					overflow: hidden
					li
						display: inline-block
						cursor: pointer
						float: left
					.nav-plie
						padding: 0 10px
	.app-content
		margin: 0 auto
		width: 1200px
	.app-footer
		margin-top: 30px
		clear: both
		width: 100%
		height: 80px
		line-height: 80px
		text-align: center
		font-size: 15px
		background-color: #e3e4e8 
</style>
