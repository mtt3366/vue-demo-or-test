<template>
  <div>
    <h3>组件B</h3>
    <C v-bind="$attrs" v-on="$listeners"></C>
  </div>
</template>

<script>
import C from "./C";
export default {
  name: "B", // todo
  components: { C }
};
</script>

<style scoped></style>
