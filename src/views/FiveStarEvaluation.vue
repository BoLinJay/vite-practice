<template>
	<div class="container">
		<h3>评价</h3>
		<div class="box">
			<Rate />
		</div>
		
		
	</div>


</template>
<script setup>
import { ref } from "vue";
import Rate from '@/components/Rate.vue';
let comment =['极差','失望','一般','满意','惊喜']
</script>

<style>
	.box{
		display: flex;
		justify-content: flex-start;

	}
	.box div{
		height: 24px;
		width: 24px;
	}
</style>