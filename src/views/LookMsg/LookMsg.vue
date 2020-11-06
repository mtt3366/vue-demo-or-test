<template>
  <div class="look-msg">
    <el-dialog
      title="查看信息"
      :visible.sync="myVisible"
      @close="$emit('close')"
    >
      <div class="row">
        入库人
        {{ myData.buyUserName }}
        挂票人
        {{ myData.sellUserName }}
      </div>
      <div class="row">购入价 {{ myData.buyTickPrice.calcKou }}元/十万</div>
      <div class="row">
        票源客户
        {{ myData.ticketClient }}
        占资类型
        {{ myData.capitalType === "1" ? "占资" : "不占资" }}
      </div>
      <div class="row">
        备注
        {{ myData.commons }}
      </div>
      <div class="row">
        内部记事
        {{ myData.internalCommons }}
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "LookMsg", // todo
  props: {
    visible: {
      type: Boolean,
      required: true,
      default() {
        return false;
      }
    },
    value: {
      type: Object,
      required: true,
      default() {
        return {
          buyUserName: "",
          sellUserName: "",
          buyTickPrice: { calcKou: "" },
          ticketClient: "",
          capitalType: "",
          commons: "",
          internalCommons: ""
        };
      }
    }
  },
  data() {
    return {
      myVisible: false,
      myData: this.value
    };
  },
  watch: {
    visible(newValue) {
      this.myVisible = newValue;
      this.myData = this.value;
    }
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped></style>
