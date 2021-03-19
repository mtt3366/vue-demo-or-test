<template>
  <MyTable v-bind="tableProps" :test="'testAttr'" v-bind:title.sync="title" />
</template>

<script>
import MyTable from "./MyTable"; // todo
export default {
  name: "MyTableMain", // todo
  components: {
    MyTable // todo
  },
  data() {
    return {
      tableProps: {
        loading: false,
        height: "100px",
        dataSource: ["1123", "2341412", "12342"]
      },
      title: "我是title"
    };
  }
};
</script>

<style scoped></style>
