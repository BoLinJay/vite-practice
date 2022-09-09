<template>
	<div 
	v-for="(item,index) in starNum" 
	class="icon" 
	@mouseover="moveChange(index)"
	@mouseleave="leaveChange"
	:class="{move:isChangeNum >= index}"
	@click="handleClick(index)"
	 >
	</div>
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
const  isChangeNum=ref(-1);
const  isMoveChange = ref(0)
// 鼠标移动
const  moveChange = (index) => {
	console.log(index);
	isChangeNum.value = index
}
// 鼠标移出
const leaveChange = () => {
	// 阻止条件
	if(isMoveChange.value) {
		return 
	}
	isChangeNum.value = -1
}
// 评价
const evaluation = computed(()=> {
	return props.evaluationList[isChangeNum.value]
})
// 点击
const handleClick = (index) => {
	isChangeNum.value = index
	// 点击后阻止鼠标移出事件
	isMoveChange.value = 1
}
</script>

<style>
.icon {
	background: url(@/assets/img/star.png) no-repeat;
	height: 24px;
	position: relative;
}

.icon.move {
	background-position: 0px -25px;
}
</style>