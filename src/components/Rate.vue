<template>
	<span v-for="(_,i) in starNums" @mouseover="moveChange(i)" @mouseleave="leaveChange" @click="handleClick(i)"
		:class="[{active:isChangeStarNum >= i},'icon']">
	</span>
	<span>{{evaluation}}</span>
</template>

<script setup>
import { ref, computed } from 'vue';
// 对外暴露结果
const emit = defineEmits(['update:starIndex'])
// 可接参 
const props = defineProps({
	// 星星数量 默认： 5
	starNums: {
		type: Number,
		default: 5,
	},
	// 评价列表 默认：['极差','失望','一般','满意','惊喜']
	evaluationList: {
		type: Array,
		default: ['极差', '失望', '一般', '满意', '惊喜'],
	},
	// v-model:starIndex
	starIndex: {
		type: Number,
		default: 0
	}
})
const isChangeStarNum = ref(props.starIndex - 1);
const isLeaveCondition = ref(0)
// 鼠标移动
const moveChange = (i) => {
	// 阻止条件
	if (isLeaveCondition.value) return
	isChangeStarNum.value = i
}
// 鼠标移出
const leaveChange = () => {
	// 阻止条件
	if (isLeaveCondition.value) return
	isChangeStarNum.value = -1
}
// 评价
const evaluation = computed(() => props.evaluationList[isChangeStarNum.value])
// 点击
const handleClick = (i) => {
	isChangeStarNum.value = i
	// 点击后阻止鼠标移动事件
	isLeaveCondition.value = 1
	// 对外暴露结果
	emit('update:starIndex', isChangeStarNum.value + 1)
}
</script>

<style scoped>
.icon {
	position: relative;
	height: 24px;
	width: 24px;
	background: url(@/assets/img/star.png) no-repeat;
}

.active {
	background-position: 0px -25px;
}
</style>