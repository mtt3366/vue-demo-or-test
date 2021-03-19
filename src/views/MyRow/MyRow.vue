<template>
  <div class="my-row">
    <div class="label" :style="{ width: length + 'em' }">
      <span v-for="(item, index) in label.split('')" :key="index">{{
        item
      }}</span>
    </div>
    <div class="value">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MyRow",
  props: ["label", "value", "length"]
};
</script>

<style scoped>
.my-row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.my-row .label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #999999;
  margin-right: 30px;
}
.my-row .value {
  font-size: 14px;
  color: #333333;
  flex: 1;
}
</style>
