<template>
  <div class="my-switch" @click.prevent="switchValue">
    <input
      class="my-switch__input"
      type="checkbox"
      @change="handleChange"
      ref="input"
      :true-value="activeValue"
      :false-value="inactiveValue"
    />
    <span :class="{ line: true, on: checked, off: !checked }"> </span>
    <span :class="{ slider: true, on: checked, off: !checked }">{{
      checked ? "ON" : "OFF"
    }}</span>
  </div>
</template>

<script>
export default {
  name: "MySwitch",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    checked() {
      //是否被选中,用传进来的value 和 activeValue来比较,不一样就是没被选中
      return this.value === this.activeValue;
    }
  },
  watch: {
    checked() {
      //改变原生的checked value
      this.$refs.input.checked = this.checked;
    }
  },

  methods: {
    switchValue() {
      this.handleChange();
    },
    handleChange() {
      const val = this.checked ? this.inactiveValue : this.activeValue; //取反操作
      this.$emit("input", val);
      this.$emit("change", val);
      this.$nextTick(() => {
        // set input's checked property
        // in case parent refuses to change component's value
        this.$refs.input.checked = this.checked;
      });
    }
  },
  mounted() {
    this.$refs.input.checked = this.checked;
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
