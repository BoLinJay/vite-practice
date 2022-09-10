<template>
	<span 
	v-for="(item,index) in starNum" 
	class="icon" 
	@mouseover="moveChange(index)"
	@mouseleave="leaveChange"
	:class="{active:isChangeStarNum >= index}"
	@click="handleClick(index)"
	 >
	</span>
	<span>{{evaluation}}</span>
</template>
<script setup>
import { ref, computed } from 'vue';
// 可传参 
const props = defineProps({
	// 星星数量 默认： 5
	starNum: {
		type: Number,
		default: 5,
	},
	// 评价列表 默认：['极差','失望','一般','满意','惊喜']
	evaluationList: {
		type: Array,
		default: ['极差','失望','一般','满意','惊喜'],
	}
})
const  isChangeStarNum=ref(-1);
const  isLeaveCondition = ref(0)
// 鼠标移动
const  moveChange = (index) => {
	// 阻止条件
	if(isLeaveCondition.value) return 
	isChangeStarNum.value = index
}
// 鼠标移出
const leaveChange = () => {
	// 阻止条件
	if(isLeaveCondition.value) return 
	isChangeStarNum.value = -1
}
// 评价
const evaluation = computed(()=> {
	return props.evaluationList[isChangeStarNum.value]
})
// 点击
const handleClick = (index) => {
	isChangeStarNum.value = index
	// 点击后阻止鼠标移动事件
	isLeaveCondition.value = 1
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