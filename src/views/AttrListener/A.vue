<template>
  <div>
    <h2>组件A 数据项:{{ myData }}</h2>
    <B @changeMyData="changeMyData" :myData="myData"></B>
  </div>
</template>

<script>
import B from "./B";
export default {
  name: "A",
  data() {
    return {
      myData: "100"
    };
  },
  components: { B },
  methods: {
    changeMyData(val) {
      this.myData = val;
    }
  }
};
</script>

<style scoped></style>
