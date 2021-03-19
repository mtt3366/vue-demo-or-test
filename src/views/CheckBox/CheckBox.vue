<template>
  <div @click="handleClick">
    {{ value ? "选中" : "没选中" }}
  </div>
</template>

<script>
export default {
  name: "Demo", // todo
  components: {},
  props: ["value"],
  methods: {
    handleClick() {
      const returnVal = !this.value;
      this.$emit("input", returnVal);
    }
  }
};
</script>

<style scoped></style>
