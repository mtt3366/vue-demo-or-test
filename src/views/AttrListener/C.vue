<template>
  <div>
    <h5>组件C</h5>
    <input v-model="myc" @input="hInput" />
  </div>
</template>

<script>
export default {
  name: "C", // todo
  components: {},
  props: { myData: { String } },
  created() {
    this.myc = this.myData; // 在组件A中传递过来的属性
    console.info(
      "在组件A中传递过来的属性(打印的是B中的,因为B中的$attrs是a的attrs,在c这里用Props接收了,所以打印$props,这个就是b传过来的props)",
      this.$props,
      this.$listeners
    ); //因为
  },
  methods: {
    hInput() {
      this.$emit("changeMyData", this.myc); // // 在组件A中传递过来的事件
    }
  }
};
</script>

<style scoped></style>
