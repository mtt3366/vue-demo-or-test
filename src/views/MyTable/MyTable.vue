<template>
  <div>
    <div>
      <div @click="$emit('update:title', title + 'add')">{{ title }}</div>
      <div v-bind="$attrs">$attrs测试</div>
      <div v-bind="$props">$props测试</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  components: {},
  props: ["loading", "height", "dataSource", "title"],
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
