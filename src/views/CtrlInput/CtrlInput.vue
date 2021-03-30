<template>
  <label>
    <input ref="input" v-bind="$attrs" :value="value" v-on="inputListeners" />
  </label>
</template>

<script>
export default {
  name: "CtrlInput",
  props: {
    value: {
      type: String
    }
  },
  computed: {
    inputListeners() {
      return {
        //从父级添加所有的监听器
        ...this.$listeners,
        // 然后我们添加自定义监听器
        // 这里确保组件配合 `v-model` 的工作
        input: e => {
          this.$emit("input", e.target.value);
          // 保证原生的input value 是可控的
          // ensure native input value is controlled
          this.$nextTick(this.setNativeInputValue);
        }
      };
    },
    nativeInputValue() {
      //将传入的值转为String,防止出错
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    }
  },
  methods: {
    setNativeInputValue() {
      // 将展示的原生的input value 和this中的input value保持一致
      const input = this.$refs.input;
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    }
  },
  watch: {
    //将展示的原生的input value 和this中的input value保持一致
    nativeInputValue() {
      this.setNativeInputValue();
    }
  }
};
</script>

<style scoped></style>
