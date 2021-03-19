import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/Index.vue";
import { toLineLink } from "@/utils";
Vue.use(VueRouter);

const childrenRouteConfig = [
  {
    name: "SlotUse",
    desc: "作用域插槽使用"
  },
  {
    name: "SlotCardDemo",
    desc: "作用域插槽卡片示例理解"
  },
  {
    name: "AntdUse",
    desc: "antd使用测试"
  },
  {
    name: "VelocityUse",
    desc: "velocity使用测试"
  },
  {
    name: "ComStudy",
    desc: "v-model组件开发学习,可控,不可控"
  },
  {
    name: "ComVModelStudy",
    desc: "组件上使用v-model"
  },
  {
    name: "TickPrice",
    desc: "拟售价业务组件"
  },
  {
    name: "ChgPushTick",
    desc: "选择要提交的票号"
  },
  {
    name: "MutiSetMsgDilg",
    desc: "批量设置"
  },
  {
    name: "LookMsg",
    desc: "查看设置"
  },
  {
    name: "MyTab",
    desc: "Tab"
  },
  {
    name: "MyTable",
    desc: "MyTable"
  },
  {
    name: "AttrListener",
    desc: "$attrs和$listeners用法"
  },
  {
    name: "UseDirective",
    desc: "自定义一个让背景变绿色的指令"
  },
  {
    name: "MyRow",
    desc: "MyRow"
  },
  {
    name: "CheckBox",
    desc: "CheckBox"
  }
];
const childrenRoute = childrenRouteConfig.map(({ name, desc }) => ({
  path: `${toLineLink(name)}`, //作用于插槽使用
  name: toLineLink(name),
  component: () => import(`../views/${name}/App.vue`),
  meta: { desc }
}));
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "Index",
        component: Index,
        meta: { desc: "首页展示" }
      },
      ...childrenRoute
    ]
  }

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
