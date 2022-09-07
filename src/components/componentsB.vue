<template>
  <div class="content">
    <span>{{ componentsBTitle }}</span>
    <slot></slot>
    <span>{{ random }}</span>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";
defineProps({
  componentsBTitle: String,
});
const random = ref(Math.trunc(Math.random() * 100));
const lessenRandomB = () => {
  random.value--;
};
defineExpose({ lessenRandomB });
</script>

<style scoped>
.content {
  width: 300px;
  height: 30px;
  padding: 0 20px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  background-color: pink;
}
</style>