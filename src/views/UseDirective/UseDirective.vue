<template>
  <div>
    <input v-focus placeholder="局部指令,刷新就自动聚焦" />
    <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
    <div v-color-swatch="bgColor">bgColor-red</div>
  </div>
</template>

<script>
export default {
  name: "UseDirective", // todo
  components: {},
  data() {
    return {
      message: "我是message",
      bgColor: "red"
    };
  },
  directives: {
    //局部指令
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    },
    demo: {
      bind: function(el, binding, vnode) {
        console.log(vnode);
        console.log(el);
        console.log(vnode.elm === el);
        const s = JSON.stringify;

        el.innerHTML =
          "name: " +
          s(binding.name) +
          "<br>" +
          "value: " +
          s(binding.value) +
          "<br>" +
          "expression: " +
          s(binding.expression) +
          "<br>" +
          "argument: " +
          s(binding.arg) +
          "<br>" +
          "modifiers: " +
          s(binding.modifiers) +
          "<br>" +
          "vnode keys: " +
          Object.keys(vnode).join(", ");
      }
    },
    "color-swatch": (el, binding) => {
      //函数简写
      el.style.backgroundColor = binding.value;
    }
  }
};
</script>

<style scoped></style>
