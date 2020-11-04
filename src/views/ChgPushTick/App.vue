<template>
  <div>
    <button @click="dialogPushNumVisible = true">编</button>
    <ChgPushTickDialog
      :all-tick-no="tickNo"
      @change="handleChange"
      :visible="dialogPushNumVisible"
      @close="dialogPushNumVisible = false"
    />
  </div>
</template>

<script>
import ChgPushTickDialog from "./ChgPushTickDialog"; // todo
export default {
  name: "TemplateDemo", // todo
  components: {
    ChgPushTickDialog // todo
  },
  data() {
    return {
      dialogPushNumVisible: false,
      tickNo: [
        "110000000000120200202100000001",
        "110000000000120200202100000002",
        "110000000000120200202100000003",
        "110000000000120200202100000004",
        "110000000000120200202100000005"
      ]
    };
  },
  methods: {
    handleChange(selTickNos) {
      console.log("selTickNos", selTickNos);
      this.dialogPushNumVisible = false;
    }
  }
};
</script>

<style scoped></style>
