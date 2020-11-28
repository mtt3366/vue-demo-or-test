<template>
  <MyTable v-bind="tableProps" :test="'testAttr'" />
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
      }
    };
  }
};
</script>

<style scoped></style>
