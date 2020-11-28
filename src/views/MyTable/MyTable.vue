<template>
  <div>
    <div v-bind="$attrs">$attrs测试</div>
    <div v-bind="$props">$props测试</div>
  </div>
</template>

<script>
export default {
  name: "Demo", // todo
  components: {},
  props: ["loading", "height", "dataSource"],
  data() {
    return {};
  },
  mounted() {
    console.log("this.$attrs(此组件从外面传进来的attrs)", this.$attrs);
    console.log("this.$props(此组件从外面传进来的prop)", this.$props);
  }
};
</script>

<style scoped></style>
