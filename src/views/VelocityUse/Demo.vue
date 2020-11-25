<template>
  <div>
    <button @click="animation.restart()">点击</button>
    <div class="item blue"></div>
    <div class="item red"></div>
    <div class="item red"></div>
    <div class="item red"></div>
    <div class="item red"></div>
    <div class="item red"></div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Demo",
  components: {},
  data() {
    return {
      animation: {}
    };
  },
  mounted() {
    this.animation = anime({
      targets: ".item",
      keyframes: [{ translateX: -100 }, { translateX: 100 }, { translateX: 0 }],
      duration: 600,
      easing: "easeInOutQuad",
      delay: function(el, i) {
        return i * 100;
      }
    });
  },
  methods: {}
};
</script>

<style scoped>
.item {
  width: 100px;
  height: 100px;

  border-radius: 50px;

  margin-left: 200px;
}
.blue {
  background: blue;
}
.red {
  background: red;
}
</style>
