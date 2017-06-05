<template>
	<div class="selection-wrapper">
		<div class="selection-show" @click="isDrop = !isDrop">
			<span>{{ selections[nowIndex].label }}</span>
			<div class="arrow"></div>
		</div>
		<div class="selection-list" v-if="isDrop">
			<ul>
				<li v-for="(item,index) in selections" @click="chooseSelection(index)">{{ item.label }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		selections: {
			type: Array,
			default: [{
				label: 'test',
				value: 0
			}]
		}
	},
	data () {
		return {
			nowIndex: 0,
			isDrop: false
		}
	},
	methods: {
		chooseSelection (index) {
			this.nowIndex = index;
			this.isDrop = false;
			this.$emit('on-change',this.selections[this.nowIndex])
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.selection-wrapper
	display: inline-block
	position:relative
	.selection-show
		display: inline-block
		padding: 0 20px 0 10px
		position:relative
		border: 1px solid #e3e3e3
		boder-radius: 3px
		line-height: 25px
		height: 25px
		cursor: pointer
		background-color: #fff
		.arrow
			display: inline-block
			margin: -1px -14px 0 6px
			vertical-align: middle
			border-top: 5px solid #e3e3e3
			border-right: 4px solid transparent
			border-left: 4px solid transparent
			width: 0
			height: 0
	.selection-list
		display: inline-block
		position: absolute
		left: 0
		top: 25px
		z-index: 5
		border-top: 1px solid #e3e3e3
		border-bottom: 1px solid #e3e3e3
		width: 100%
		background-color: #fff
		ul 
			li
				overflow: hidden
				padding: 5px 15px 5px 15px
				white-space: nowrap
				border-left: 1px solid #e3e3e3
				border-right: 1px solid #e3e3e3
				text-overflow: ellipsis
				cursor: pointer
				background-color: #fff
				&:hover
					background-color: #e3e3e3
</style>
