<template>
  <div class="home">
    <div class="link">
      <span
        v-for="(link, index) in routerLinks"
        class="route-item"
        :key="index"
      >
        {{ index + 1 }}.
        <router-link :to="link.path">{{ link.desc }}</router-link>
      </span>
    </div>
    <hr />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
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
<style scoped>
.route-item {
  margin-right: 10px;
}
</style>
