<template>
  <div>
    <MySwitch v-model="check" :active-value="'ON'" :inactive-value="'OFF'">
    </MySwitch>
    {{ check }}
  </div>
</template>

<script>
import MySwitch from "./MySwitch";
export default {
  name: "Demo", // todo
  components: { MySwitch },
  data() {
    return {
      check: "ON"
    };
  }
};
</script>

<style scoped></style>
