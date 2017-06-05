<template>
	<div class="counter-wrapper">
		<div class="counter-btn" @click="reduce">-</div>
		<div class="counter-show">
			<input type="text" v-model="number" @keyup="fixNumber">
		</div>
		<div class="counter-btn" @click="add">+</div>
	</div>
</template>

<script>
export default {
	props: {
		max: {
			type: Number,
			default: 5
		},
		min: {
			type: Number,
			default: 1
		}
	},
	data () {
		return {
			number: this.min
		}
	},
	watch: {
		number () {
			this.$emit('on-change',this.number)
		}
	},
	methods: {
		fixNumber () {
			let fix
			if(typeof this.number === 'string'){
				fix = Number(this.number.replace(/\D/g, ''))
			}else{
				fix = this.number
			}
			if(fix > this.max || fix < this.min){
				fix = ''
			}
			this.number = fix
		},
		reduce () {
			if(this.number <= this.min){
				return
			}
			this.number--
		},
		add () {
			if(this.number >= this.max) {
				return
			}
			this.number++
		} 
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.counter-wrapper
	position: relative
	display: inline-block
	overflow: hidden
	vertical-align: middle
	.counter-btn
		float: left
		text-align: center
		line-height: 25px
		width:25px
		height: 23px
		border: 1px solid #e3e3e3
		cursor: pointer
		&:hover
			border-color: #4fc08d
			background-color: #4fc08d
			color: #fff
	.counter-show
		float: left
		input
			line-height: 23px
			height: 23px
			width: 30px
			text-indent: 10px
			outline: none
			border-top: 1px solid #e3e3e3
			border-bottom: 1px solid #e3e3e3
</style>
