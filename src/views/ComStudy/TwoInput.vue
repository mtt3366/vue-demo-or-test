<template>
  <div>
    <el-input v-model="value.input1" placeholder="请输入内容"></el-input>
    <el-input v-model="value.input2" placeholder="请输入内容"></el-input>
    <hr />
  </div>
</template>

<script>
export default {
  name: "TwoInput",
  components: {},
  props: ["value"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
