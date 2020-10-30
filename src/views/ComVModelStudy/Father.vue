<template>
  <div>
    <Child v-model="fatherArr[0]" @input="handleInput"></Child>
    <Child v-model="fatherArr[1]"></Child>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  name: "Father",
  components: { Child },
  data() {
    return {
      fatherArr: [
        {
          childValue1: "我是第一个Value初始值",
          childValue2: "我是第二个Value初始值"
        },
        {
          childValue1: "我是第一个Value初始值",
          childValue2: "我是第二个Value初始值"
        }
      ]
    };
  },
  methods: {
    handleInput(v) {
      console.log(v);
    }
  }
};
</script>

<style scoped></style>
