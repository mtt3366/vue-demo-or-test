<template>
  <div>
    <MyTab
      v-model="tabCur"
      :tabs="['常规设置', '风控设置', '入库设置', '显示设置']"
    />
  </div>
</template>

<script>
import MyTab from "./MyTab"; // todo
export default {
  name: "MyTabMain", // todo
  components: {
    MyTab // todo
  },
  data() {
    return {
      tabCur: 1
    };
  },
  methods: {}
};
</script>

<style scoped></style>
