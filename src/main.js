// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRsource from 'vue-resource'
import Layout from './components/layout'
import IndexPage from './page/index'
import DetailPage from './page/detail'
import DetailAnaPage from './page/detail/analysis'
import DetailCouPage from './page/detail/count'
import DetailForPage from './page/detail/forecast'
import DetailPubPage from './page/detail/publish'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueRsource)

let router = new VueRouter({
	mode:'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/detail',
			component: DetailPage,
			redirect: '/detail/analysis',
			children: [
				{	
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
			]
		}
	]
}) 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
