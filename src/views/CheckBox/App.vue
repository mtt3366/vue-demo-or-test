<template>
  <div>
    <CheckBox v-model="checked" />
    <CheckBox v-model="checked" />
  </div>
</template>

<script>
import CheckBox from "./CheckBox"; // todo
export default {
  name: "CheckBoxMain", // todo
  components: {
    CheckBox // todo
  },
  data() {
    return {
      checked: true
    };
  },
  methods: {}
};
</script>

<style scoped></style>
