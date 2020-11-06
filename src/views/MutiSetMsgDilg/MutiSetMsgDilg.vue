<template>
  <div class="muti-set-msg-dilg">
    <el-dialog
      title="批量设置信息"
      :visible.sync="myVisible"
      @close="$emit('close')"
    >
      <div class="row">
        入库人
        <el-select
          v-model="myData.buyUserId"
          placeholder="请选择入库人"
          size="small"
          filterable
          @change="
            id => {
              handleSelChg(id, 'buy');
            }
          "
        >
          <el-option
            v-for="item in persionOp"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        挂票人
        <el-select
          v-model="myData.sellUserId"
          placeholder="请选择挂票人"
          size="small"
          filterable
          @change="
            id => {
              handleSelChg(id, 'sell');
            }
          "
        >
          <el-option
            v-for="item in persionOp"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="row">
        拟售价
        <tick-price-toggle-input v-model="myData.sellTickPrice" :showZk="false" :showKou="false" />
      </div>
      <div class="row">
        购入价
        <tick-price-toggle-input v-model="myData.buyTickPrice" :showZk="false" :showKou="false" />
      </div>
      <div class="row">
        票源客户
        <el-input size="small" v-model="myData.ticketClient"></el-input>
        占资类型
        <el-select v-model="myData.capitalType" size="small">
          <el-option label="占资" :value="'1'"> </el-option>
          <el-option label="不占资" :value="'0'"> </el-option>
        </el-select>
      </div>
      <div class="row">
        备注
        <el-input
          size="small"
          type="textarea"
          :rows="2"
          v-model="myData.commons"
          maxlength="50"
          show-word-limit
        ></el-input>
      </div>
      <div class="row">
        内部记事
        <el-input
          size="small"
          type="textarea"
          :rows="2"
          v-model="myData.internalCommons"
          maxlength="50"
          show-word-limit
        ></el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="$emit('close')">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定 </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import TickPriceToggleInput from "../TickPrice/TickPriceToggleInput";
function copyObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const initMutiSetData = {
  buyUserId: null, //入库人id
  sellUserId: null, //挂票人id
  buyUserName: null, //入库人
  sellUserName: null, //挂票人
  //初始化自定义的拟售价
  sellTickPrice: {
    //拟售价三种方式
    type: 2, //拟售价类型 1,2,3,4(无),5
    lakhDebit: "", //拟售价每十万扣款2

    point: "", //拟售价年息+手续费 3
    handleCharge: "", //手续费

    directDeduction: "", //拟售价直扣 1

    pointDay: "" //拟售价5 年息加天数中的天数}}
  },
  buyTickPrice: {
    type: 2, //类型 1,2,3,4(无),5
    lakhDebit: "", //每十万扣款2

    point: "", //年息+手续费 3
    handleCharge: "", //手续费

    directDeduction: "", //直扣 1

    pointDay: "" //5 年息加天数中的天数}}
  },
  ticketClient: "", //票源客户
  capitalType: "1", //'1','0'

  commons: "", //备注
  internalCommons: "" //内部记事
};
export default {
  name: "MutiSetMsgDilg", // todo
  components: { TickPriceToggleInput },
  props: {
    visible: {
      type: Boolean,
      required: true,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      myVisible: false,
      myData: initMutiSetData,
      persionOp: []
    };
  },
  computed: {},
  watch: {
    visible(newValue) {
      console.log("newValue", newValue);
      this.myVisible = newValue;
      this.myData = copyObj(initMutiSetData);
    }
  },
  methods: {
    async getList() {
      return new Promise(resolve => {
        resolve([
          {
            value: "1",
            label: "黄金糕"
          },
          {
            value: "2",
            label: "双皮奶"
          },
          {
            value: "3",
            label: "蚵仔煎"
          },
          {
            value: "4",
            label: "龙须面"
          },
          {
            value: "5",
            label: "北京烤鸭"
          },
          {
            value: "6",
            label: "北京烤鸭222"
          }
        ]);
      });
    },
    handleSelChg(id, type) {
      console.log(id, type);
      this.myData[`${type}UserName`] =
        this.persionOp.find(ele => ele.value === id).label || "";
    },
    handleConfirm() {
      //buyUserId{}: null, //入库人id
      // sellUserId: null, //挂票人id)
      if (!this.myData.buyUserId) {
        alert("请选择入库人");
        return;
      }
      if (!this.myData.sellUserId) {
        alert("请选择挂票人");
        return;
      }
      this.$emit("change", this.myData);
    }
  },
  mounted() {
    this.getList().then(res => {
      this.persionOp = res;
    });
  }
};
</script>

<style scoped>
.tick-price-toggle-input {
}
</style>
