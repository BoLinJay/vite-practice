<template>
  <div>
    <button @click="addComponent">A</button>
    <button @click="removeLastComponent">B</button>
    <button @click="addNumA">C</button>
    <button @click="addNumB">D</button>
  </div>
  <div class="conter">
    <template v-for="(item, index) in componentsList" :key="index">
      <!-- A组件 -->
      <ComponentsA
        v-if="!(index % 2)"
        title="componentsA"
        ref="componentA"
      ></ComponentsA>
      <!-- B组件 -->
      <ComponentsB v-else components-b-title="componentsB" ref="componentB">{{
        index
      }}</ComponentsB>
    </template>
  </div>
</template>

<script setup>
import ComponentsA from "@/components/componentsA.vue";
import ComponentsB from "@/components/componentsB.vue";
import { ref } from "@vue/reactivity";
const componentsList = ref(3);
// A按钮
const addComponent = () => {
  componentsList.value++;
};
//B按钮
const removeLastComponent = () => {
  componentsList.value--;
};
// C按钮
const componentA = ref([]);
const addNumA = () => {
  componentA.value.forEach((item) => {
    item.addRandomA();
  });
};
// D按钮
const componentB = ref([]);
const addNumB = () => {
  componentB.value.forEach((item) => {
    item.lessenRandomB();
  });
};
</script>

<style  scoped>
button {
  margin: 0 10px;
}
.conter {
  height: 600px;
  overflow: auto;
}
</style>