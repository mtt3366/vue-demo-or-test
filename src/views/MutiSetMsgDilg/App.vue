<template>
  <div>
    <button @click="mutiSetVisible = true">open</button>
    <MutiSetMsgDilg
      @change="handleChange"
      :visible="mutiSetVisible"
      @close="mutiSetVisible = false"
    />
  </div>
</template>

<script>
import MutiSetMsgDilg from "./MutiSetMsgDilg"; // todo
export default {
  name: "MutiSetMsgDilgMain", // todo
  components: {
    MutiSetMsgDilg // todo
  },
  data() {
    return {
      mutiSetVisible: false
    };
  },
  methods: {
    handleChange(setData) {
      console.log("selTickNos", setData);
      this.mutiSetVisible = false;
    }
  }
};
</script>

<style scoped></style>
