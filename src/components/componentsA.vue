<template>
  <div class="content">
    <span>{{ title }}</span>
    <span>{{ random }}</span>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";
defineProps({
  title: String,
});
const random = ref(Math.trunc(Math.random() * 100));
const addRandomA = () => {
  random.value++;
};
defineExpose({ addRandomA });
</script>

<style lang="css" scoped>
.content {
  width: 300px;
  height: 30px;
  padding: 0 20px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  background-color: red;
}
</style>