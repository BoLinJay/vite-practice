<template>
	<div class="container">
		<h3>评价</h3>{{starIndex}}分
		<div class="box">
			<Rate v-model:star-index="starIndex" />
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";
import Rate from '@/components/Rate.vue';
let comment =['极差','失望','一般','满意','惊喜']
const starIndex = ref(1)

</script>

<style spoted>
	.box{
		display: flex;
		justify-content: flex-start;
	}
	
</style>