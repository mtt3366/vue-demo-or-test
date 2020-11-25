<template>
  <div>
    <div class="child1" @click="handleClick(1)">
      第一块值:{{ value.childValue1 }}
    </div>
    <div class="child2" @click="handleClick(2)">
      第二块值:{{ value.childValue2 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Child",
  components: {},
  props: ["value"],
  data() {
    return {};
  },
  methods: {
    handleClick(type) {
      //在emit之前进行数据控制
      let val = this.value[`childValue${type}`] + "我使劲点了一下";
      if (type === 1) {
        val = this.value[`childValue${type}`] + "我轻松点了1下";
      }
      this.$emit("input", {
        ...this.value,
        [`childValue${type}`]: val
      });
    }
  }
};
</script>

<style scoped>
.child1 {
  color: #a441bf;
}
.child2 {
  color: #41bf4e;
}
</style>
