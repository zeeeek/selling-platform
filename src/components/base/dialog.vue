<template>
	<div class="dialog-wrapper">
		<div class="dialog-cover" @click="closeMyself" v-if="isShowDialog"></div>
		<transition name="drop">
			<div class="dialog-content" v-if="isShowDialog">
				<p class="dialog-close"  @click="closeMyself">x</p>
				<slot>empty</slot>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		isShowDialog: {
			type: Boolean,
			default: false
		}
	},
	data () {
		return {

		}
	},
	methods: {
		closeMyself () {
			this.$emit('on-close')
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.dialog-wrapper
	position: fixed
	width: 100%
	height: 100%
	.dialog-cover
		position: fixed
		top: 0
		left: 0
		z-index: 5
		width: 100%
		height: 100%
		background-color: #000
		opacity: .3
	.dialog-content
		position: fixed
		top: 20%
		left: 50%
		z-index: 10
		overflow: auto
		margin-left: -25%
		padding: 2%
		width: 50%
		max-height: 50%
		line-height: 1.6
		border: 2px solid #464068
		background-color: #fff
		&.drop-enter-active
			transition: all .5s ease
		&.drop-leave-active
			transition: all .3s ease
		&.drop-enter, &.drop-leave-active
			transform: translateY(-500px)
		.dialog-close
			position: absolute
			top: 5px
			right: 5px
			width: 20px
			height: 20px
			text-align: center
			cursor: pointer
			&:hover
				color:#4fc08d
</style>
