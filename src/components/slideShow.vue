<template>
	<div class="slide-show">
		<div class="slide-img" @mouseover="clearInv" @mouseout="runInv">
			<a class="img-wrapper" :href="slides[nowIndex].href">
				<transition name="fade">
					<img v-if="isShow" :src="slides[nowIndex].src">
				</transition>
				<transition name="fade-old">
					<img v-if="!isShow" :src="slides[nowIndex].src">
				</transition>
			</a>
		</div>
		<h2 class="title">{{ slides[nowIndex].title}}</h2>
		<ul class="slide-pages">
			<li @click="goto(prevIndex)">&lt;</li>
			<li v-for="(item,index) in slides" @click.stop.prevent="goto(index)">
				<a href="" :class="{'on':index===nowIndex}">{{index + 1}}</a>
			</li>
			<li @click="goto(nextIndex)">&gt;</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			nowIndex: 0,
			isShow: true
		}
	},
	props: {
		slides: {
			type: Array,
			default: []
		},
		inv: {
			type: Number,
			default: 1000
		}
	},
	computed: {
		prevIndex () {
			if(this.nowIndex === 0){
				return this.slides.length - 1
			}else{
				return this.nowIndex - 1
			}
		},
		nextIndex () {
			if(this.nowIndex === this.slides.length - 1){
				return 0
			}else{
				return this.nowIndex + 1
			}
		}
	},
	methods: {
		goto (index) {
			this.isShow = false
			setTimeout(() => {
				this.isShow = true;
				this.nowIndex = index;
			},10)
		},
		runInv () {
			this.invId = setInterval(() => {
				this.goto(this.nextIndex);
			},this.inv)
		},
		clearInv () {
			clearInterval(this.invId);
		}
	},
	mounted () {
		this.$nextTick(() => {
			this.runInv();
		})
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.slide-show
	position: relative
	margin: 0 15px 15px 0
	overflow: hidden
	width: 900px
	height: 500px
	.slide-img
		width: 100%
		.img-wrapper
			.fade-enter-active
				transition: all .5s
			.fade-enter
				transform: translateX(900px)
			.fade-old-leave-active
				transition: all 0.5s
				transform: translateX(-900px)
			img
				position: absolute
				top: 0
				width: 100%
	.title
		position: absolute
		bottom: 0
		padding-left: 15px
		text-align: left
		width: 100%
		height: 30px
		background-color: #000
		opacity: 0.5
		color: #fff
		line-height: 30px
	.slide-pages
		position: absolute
		bottom: 10px
		right: 15px
		li
			display: inline-block
			padding: 0 10px
			cursor: pointer
			color: #fff
			a
				color: #fff
				&.on
					text-decoration: underline
</style>
