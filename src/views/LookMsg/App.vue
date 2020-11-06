<template>
  <div>
    <button @click="lookMsgVisible = true">open</button>
    <LookMsg
      :value="{
        buyUserName: '1',
        sellUserName: '2',
        buyTickPrice: {
          calcKou: '3'
        },
        ticketClient: '4',
        capitalType: '5',
        commons: '6',
        internalCommons: '7'
      }"
      :visible="lookMsgVisible"
      @close="lookMsgVisible = false"
    />
  </div>
</template>

<script>
import LookMsg from "./LookMsg"; // todo
export default {
  name: "LookMsgMain", // todo
  components: {
    LookMsg // todo
  },
  data() {
    return {
      lookMsgVisible: false
    };
  },
  methods: {}
};
</script>

<style scoped></style>
