<template>
  <div>
    <TwoInput v-model="twoInputObj[0]" @input="handleChange"></TwoInput>
    <TwoInput v-model="twoInputObj[1]" @input="handleChange"></TwoInput>
  </div>
</template>

<script>
import TwoInput from "./TwoInput";
export default {
  name: "ComStudy",
  components: { TwoInput },
  data() {
    return {
      twoInputObj: [
        {
          input1: "我是第一个input值",
          input2: "我是第二个input值"
        },
        {
          input1: "我是第一个input值",
          input2: "我是第二个input值"
        }
      ]
    };
  },
  methods: {
    handleChange(value) {
      console.log("valuex", value);
    }
  }
};
</script>

<style scoped></style>
