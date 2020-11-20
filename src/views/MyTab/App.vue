<template>
  <div>
    <MyTab
      v-model="tabCur"
      :tabs="['常规设置', '风控设置', '入库设置', '显示设置']"
    />
  </div>
</template>

<script>
import MyTab from "./MyTab"; // todo
export default {
  name: "MyTabMain", // todo
  components: {
    MyTab // todo
  },
  data() {
    return {
      tabCur: 1
    };
  },
  methods: {
    sleep(duration = 0) {
      return new Promise(resolve => {
        setTimeout(resolve, duration);
      });
    },
    async postTicketList2() {
      await this.sleep(1000);
      return {
        id: 1
      };
    }
  },
  async mounted() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      const x = await this.postTicketList2();
      arr.push(x);
    }
    console.log(arr);
  }
};
</script>

<style scoped></style>
