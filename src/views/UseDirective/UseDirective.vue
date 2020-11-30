<template>
  <div>
    <input v-focus placeholder="局部指令,刷新就自动聚焦" />
  </div>
</template>

<script>
export default {
  name: "UseDirective", // todo
  components: {},
  directives: {
    //局部指令
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style scoped></style>
