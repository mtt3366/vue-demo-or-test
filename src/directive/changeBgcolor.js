export default {
  install: Vue => {
    //自定义一个指令
    Vue.directive("change-bgcolor", (el, binding) => {
      el.style.backgroundColor = binding.value;
    });
  }
};
