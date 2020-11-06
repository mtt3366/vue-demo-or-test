<template>
  <div class="">
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
        <tick-price-toggle-input
          :value="myData.sellTickPrice"
          @input="myData.sellTickPrice = $event"
          :showZk="false"
          :showKou="false"
        />
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="$emit('close')">取 消</el-button>
        <el-button type="primary" @click="$emit('change', myData)"
          >确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import TickPriceToggleInput from "../TickPrice/TickPriceToggleInput";

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
      myData: {
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
      },
      persionOp: [],
      value: ""
    };
  },
  computed: {},
  watch: {
    visible(newValue) {
      console.log("newValue", newValue);
      this.myVisible = newValue;
      this.cur = true; //每次都打开数字那一面
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
