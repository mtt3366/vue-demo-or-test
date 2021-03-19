<template>
  <div>
    {{ `v-bind 组件测试` }}

    <h1>
      结论: v-bind 只是相当于...obj,把obj的键值对,写在html 属性上
      <br />
      v-bind="$attrs" 和 v-bind="$props"
      ,只是分别把属性和props传入子组件(或者写在原生html上,很少用)
    </h1>
  </div>
</template>

<script>
export default {
  name: "BindTest",
  components: {},
  props: ["myProp", "myProp2"],
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
