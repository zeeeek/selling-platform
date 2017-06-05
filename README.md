# my-project

> this is my first vue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
vue-router的那些坑

在项目中设定子路由的那些坑。

在设定子路由中，自由的path是不需要在前加（/）左划线的。若是这样，
会导致跳转到根目录的节点上

如下： 

错误写法： 

{
	path: '/father',
	component: FatherComponent,
	children: [
		{
			path: '/child',
			component: ChildComponent
		}
	]
}


正确写法：
	{
		path: '/father',
		component: FatherComponent,
		children: [
			{
				path: 'child',
				component: ChildComponet
			}
		]
	}


同样的，(使用<router-link>实现跳转到子路由)在模板中使用to属性，并绑定的时候，
path里的路径也是不需要（/）的。

错误的写法：
	
	<router-link v-for="item in list" :to="{path: item.path}">

	list: [
		{
			path:'/child',
			name: child,
			data: xxxx
		}
	]



正确写法： 

	list: [
		{
			path: 'child',
			name: child,
			data: xxxx
		}
	]



在开发过程中，遇到点击跳转到子路由的时候，总是跳转到根节点上，十分头疼。

如下情况： 

	想要的效果： 
	../detail/child


	实际效果：
	../child

解决方法：

在设置子路由的时候，使用redirect方法重定位，设置如下:

{
	path: '/detail',
	component:DetailPage,
	redirect: '/detail/child',
	children: [
		{
			path: 'child',
			component: ChildComponent
		},
		{
			path: 'count',
			component: CountComponent
		}
	]
}


项目中未解决的问题：
1.在子节点中刷新页面，会造成reset.css的失败，但是回到跟根节点后刷新页面在回到，原来的子节点。
reset.css就引用成功。（目前，不清楚失败的原因）


2.向后台post数据失败，错误代码404
