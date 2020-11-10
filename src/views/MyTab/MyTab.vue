<template>
  <div class="my-tab">
    <div
      class="tab-item"
      :class="{ active: value === index + 1 }"
      v-for="(item, index) in tabs"
      :key="index"
      @click="$emit('input', index + 1)"
    >
      <span class="line"></span>
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTab", // todo
  props: {
    value: {
      type: Number,
      required: true,
      default() {
        return 1;
      }
    },
    tabs: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.my-tab {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 45px;
  font-size: 14px;
  color: #666666;
}

.my-tab .tab-item {
  cursor: pointer;
  position: relative;
  flex: 1;
  text-align: center;

  height: 45px;
  line-height: 45px;
}
.my-tab .tab-item.active {
  color: #333333;
}
.my-tab .tab-item::before {
  content: "";
  display: block;
  width: 1px;
  height: 15px;
  background-color: #dbdbdb;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -7px;
}

.my-tab .tab-item:last-child::before {
  display: none;
}

.my-tab .tab-item::before {
  content: "";
  display: block;
  width: 1px;
  height: 15px;
  background-color: #dbdbdb;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -7px;
}
.my-tab .tab-item .line {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #dbdbdb;
  left: 0;
  bottom: 0;
}
.my-tab .tab-item.active .line {
  height: 3px;
  background-color: #009cff;
}
</style>
