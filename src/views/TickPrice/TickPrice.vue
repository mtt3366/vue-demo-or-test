<template>
  <div class="tick-price-toggle-input">
    <el-input
      v-show="myData.type === 2"
      placeholder="每十万扣款"
      size="mini"
    ></el-input>

    <div v-show="myData.type === 3">
      <el-input placeholder="年息" size="mini"></el-input>+
      <el-input placeholder="手续费" size="mini"></el-input>
    </div>
    <div v-show="myData.type === 1">
      <el-input placeholder="直扣" size="mini"></el-input>
    </div>
    <div v-show="myData.type === 5">
      <el-input placeholder="年息" size="mini"></el-input>+
      <el-input placeholder="天数" size="mini"></el-input>
    </div>
    <button @click="toggle">改变</button>
  </div>
</template>

<script>
export default {
  name: "TickPrice", // todo
  components: {},
  props: {
    value: {
      type: Object,
      required: true,
      default() {
        return {
          //拟售价三种方式
          type: 2, //拟售价类型 1,2,3,4(无)
          lakhDebit: "", //拟售价每十万扣款2

          point: "", //拟售价年息+手续费 3
          handleCharge: "", //手续费

          directDeduction: "", //拟售价直扣 1

          pointDay: "" //拟售价5 年息加天数中的天数}}
        };
      }
    },
    ticketAmount: {
      type: Number,
      required: true,
      default() {
        return 0;
      }
    }
  },
  data() {
    return {
      myData: this.value,
      reverseMap: {
        2: 3,
        3: 1,
        1: 5,
        5: 2
      }
    };
  },
  methods: {
    toggle() {
      this.myData.type = this.reverseMap[this.myData.type];
      this.$emit("input", this.myData);
    }
  },
  mounted() {
    if (this.ticketAmount > 10) {
      this.reverseMap = {
        2: 3,
        3: 5,
        5: 2
      };
    }
  }
};
</script>

<style scoped>
.tick-price-toggle-input {
}
</style>
