<template>
	<div class="chooser-wrapper">
		<ul class="chooser-list">
			<li 
			v-for="(item,index) in selections"
			:title="item.label"
			:class="{'active':index === nowIndex}"
			@click="chosenSelection(index)">
				{{ item.label }}
			</li>
		</ul>
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
			nowIndex: 0
		}
	},
	methods: {
		chosenSelection (index) {
			this.nowIndex = index
			this.$emit('on-change',this.selections[this.nowIndex])
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.chooser-wrapper
	position: relative
	display: inline-block
	.chooser-list
		li
			display: inline-block
			margin-right: 5px
			padding: 0 8px
			line-height: 25px
			height: 25px
			border: 1px solid #e3e3e3
			border-radius: 3px
			text-align: center
			&.active
				border-color: #4fc08d
				background-color: #4fc08d
				color: #fff
</style>
