<template>
  <div class="my-switch" @click="open = !open">
    <input
      class="my-switch__input"
      type="checkbox"
      @change="handleChange"
      ref="input"
      :id="id"
      :name="name"
      :true-value="activeValue"
      :false-value="inactiveValue"
    />
    <span :class="{ line: true, on: open, off: !open }"> </span>
    <span :class="{ slider: true, on: open, off: !open }">{{
      open ? "ON" : "OFF"
    }}</span>
  </div>
</template>

<script>
export default {
  name: "MySwitch",
  data() {
    return {
      open: true,
      activeValue: "",
      inactiveValue: ""
    };
  },

  methods: {
    handleChange() {}
  }
};
</script>

<style scoped lang="scss">
.my-switch {
  cursor: pointer;
  user-select: none;
  width: 70px;
  height: 25px;
  position: relative;
  .my-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .line {
    position: absolute;
    width: 70px;
    height: 8px;
    border-radius: 4px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    &.on {
      background-color: #b8d7ff;
    }
    &.off {
      background: rgb(230, 230, 230);
    }
  }
  .slider {
    transition: all 0.3s;
    position: absolute;
    width: 40px;
    height: 25px;
    border-radius: 4px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    letter-spacing: 1px;
    color: #ffffff;
    text-align: center;
    line-height: 25px;
    font-weight: bold;
    &.on {
      right: 0;
      background-color: #6492cd;
      margin-right: 0;
    }
    &.off {
      right: 100%;
      margin-right: -40px;
      background: rgba(158, 158, 158);
    }
  }
}
</style>
