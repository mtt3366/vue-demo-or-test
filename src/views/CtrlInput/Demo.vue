<template>
  <div>
    仅可以输入数字的受控组件
    <CtrlInput
      type="text"
      placeholder="请输入数字"
      :value="value"
      @input="handleInput"
    ></CtrlInput>
  </div>
</template>

<script>
import CtrlInput from "./CtrlInput";
export default {
  name: "Demo",
  components: {
    CtrlInput
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    handleInput(v) {
      console.log(v);
      if (/^[0-9]*$/.test(v)) {
        console.log(111);
        this.value = v;
      }
    }
  }
};
</script>

<style scoped></style>
