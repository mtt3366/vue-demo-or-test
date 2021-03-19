<template>
  <div>
    {{ test1 }}

    当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象 property 的访问。
  </div>
</template>

<script>
export default {
  name: "MyComOne",
  props: ["test1"],
  mounted() {
    console.log(this.$props);
  }
};
</script>

<style scoped></style>
