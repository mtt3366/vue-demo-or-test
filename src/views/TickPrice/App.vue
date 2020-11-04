<template>
  <TickPrice
    v-model="tickPrice"
    :need-data="{
      ticketAmount: 11.9021,
      adjustmentDays: 0,
      interestDays: 366
    }"
    :showZk="true"
    :showKou="true"
  />
</template>

<script>
import TickPrice from "./TickPrice"; // todo
export default {
  name: "TickPriceMain", // todo
  components: {
    TickPrice // todo
  },
  data() {
    return {
      tickPrice: {
        //拟售价三种方式
        type: 2, //拟售价类型 1,2,3,4(无),5
        lakhDebit: "", //拟售价每十万扣款2

        point: "", //拟售价年息+手续费 3
        handleCharge: "", //手续费

        directDeduction: "", //拟售价直扣 1

        pointDay: "" //拟售价5 年息加天数中的天数}}
      }
    };
  }
};
</script>

<style scoped></style>
