<template>
  <div class="body-wrap">
    <nav class="">
      <div
        v-for="(link, index) in routerLinks"
        :key="index"
        :class="{ focus: cur === link.path }"
        @click="cur = link.path"
      >
        {{ index + 1 }}.
        <router-link :to="link.path">{{ link.desc }}</router-link>
      </div>
    </nav>
    <main class="">
      <h1>{{ this.$route.name }}</h1>
      <hr />
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      cur: "/" + this.$route.name,
      routerLinks: []
    };
  },
  methods: {
    getAllHomeChildRoute() {
      //获取所有的子路由
      return (
        this.$router.options.routes.find(({ name }) => name === "Home")
          .children || []
      );
    },
    getRouterLinks() {
      //获取所有router-links
      return this.getAllHomeChildRoute().map(ele => ({
        path: `/${ele.path}`,
        desc: ele.meta.desc
      }));
    }
  },
  mounted() {
    // console.log(this.$route); //当前路由的信息
    // console.log(this.$router); //所有路由的信息
    // console.log(this.getAllHomeChildRoute());
    this.routerLinks = this.getRouterLinks();
  }
};
</script>
<style scoped lang="scss">
/*
https://www.ruanyifeng.com/blog/2015/07/flex-examples.html
圣杯布局阮一峰
*/
.body-wrap {
  display: flex;
  min-height: 100vh;
  .focus {
    color: #ff7700;
    a {
      color: #ff7700;
    }
  }
  nav {
    flex: 0 0 12em;
    min-height: 100vh;
    border-right: 1px solid red;
    margin-right: 10px;
  }
  main {
    flex: 1;
    min-height: 100vh;
  }
}
</style>
