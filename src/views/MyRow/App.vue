<template>
  <div>
    <MyRow label="规范合法化" value="士大夫" :length="6" />
    <MyRow label="发个很反感1" value="士大夫" :length="6" />
  </div>
</template>

<script>
import MyRow from "./MyRow"; // todo
export default {
  name: "MyRowMain", // todo
  components: {
    MyRow // todo
  },
  data() {
    return {};
  },
  methods: {},
  async mounted() {}
};
</script>

<style scoped></style>
