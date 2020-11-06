<template>
  <div class="tick-price-toggle-input">
    <div class="tog-area">
      <div v-show="myData.type === 2" class="item-wrap">
        <el-input
          placeholder="每十万扣款"
          :value="myData.lakhDebit"
          class="input1"
          @input="
            e => {
              handleInput(e, 'lakhDebit');
            }
          "
        />
      </div>

      <div v-show="myData.type === 3" class="item-wrap">
        <el-input
          placeholder="年息"
          :value="myData.point"
          class="input2"
          @input="
            e => {
              handleInput(e, 'point');
            }
          "
        />%+
        <el-input
          placeholder="手续费"
          :value="myData.handleCharge"
          class="input3"
          @input="
            e => {
              handleInput(e, 'handleCharge');
            }
          "
        />
      </div>
      <div v-show="myData.type === 1" class="item-wrap">
        <el-input
          placeholder="直扣"
          class="input1"
          :value="myData.directDeduction"
          @input="
            e => {
              handleInput(e, 'directDeduction');
            }
          "
        />
      </div>
      <div v-show="myData.type === 5" class="item-wrap">
        <el-input
          placeholder="年息"
          :value="myData.point"
          class="input2"
          @input="
            e => {
              handleInput(e, 'point');
            }
          "
        />%+
        <el-input
          placeholder="天数"
          :value="myData.pointDay"
          class="input3"
          @input="
            e => {
              handleInput(e, 'pointDay');
            }
          "
        />
      </div>
      <span @click="toggle" class="toggle">改</span>
    </div>
    <div
      v-show="showKou && (myData.type === 3 || myData.type === 5)"
      class="text-area"
    >
      每十万扣:{{ kou1 }} 元/每十万
    </div>
  </div>
</template>

<script>
export default {
  name: "tick-price-toggle-input", // todo
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

          pointDay: "", //拟售价5 年息加天数中的天数}}
          calcKou: null //每十万扣
        };
      }
    },
    showZk: {
      //是否显示直扣
      type: Boolean,
      required: false,
      default() {
        return true;
      }
    },
    showKou: {
      //是否显示计算值
      type: Boolean,
      required: false,
      default() {
        return true;
      }
    },
    needData: {
      type: Object,
      required: false,
      default() {
        return {
          ticketAmount: 1, //金额
          adjustmentDays: 0, //调整天
          interestDays: 0 //剩余天数
        };
      }
    }
  },
  computed: {
    kou1() {
      const { point, handleCharge, pointDay } = this.myData;
      if (this.myData.type === 3) {
        return this.calculateNianxiAndHandleCharge(point, handleCharge);
      } else if (this.myData.type === 5) {
        return this.calculateNianxiAndDays(point, pointDay);
      } else {
        return 0;
      }
    }
  },
  watch: {
    value(newVal) {
      this.myData = newVal;
    },
    kou1(newVal) {
      // console.log("newVal", newVal);
      this.myData.calcKou = newVal;
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
    },
    handleInput(e, type) {
      let returnVal = "";
      switch (type) {
        case "lakhDebit":
        case "handleCharge":
        case "directDeduction":
          returnVal = this.formatInputNumber(e, false, 2);
          break;
        case "point":
          returnVal = this.formatInputNumber(e, false, 4);
          break;
        case "pointDay":
          returnVal = this.formatInputNumber(e, true);
          break;
      }
      this.myData[`${type}`] = returnVal;
      this.$emit("input", this.myData);
    },
    /**
     * @param {*} nianXi 年息）
     * @param {*} addDays 新增天数(是输入的天数)
     */
    calculateNianxiAndDays(nianXi, addDays) {
      console.log("------", nianXi);
      console.log(addDays);
      if (
        nianXi === "" ||
        typeof nianXi == "undefined" ||
        addDays === "" ||
        typeof addDays == "undefined"
      ) {
        return "-";
      }
      const ticketAmount = parseFloat(this.needData.ticketAmount) * 10000;
      nianXi = parseFloat(nianXi) / 100;
      const interestDays = parseFloat(this.needData.interestDays);
      const adjustmentDays = parseFloat(this.needData.adjustmentDays);
      addDays = parseFloat(addDays);
      const result =
        (ticketAmount * nianXi * (interestDays + adjustmentDays + addDays)) /
        360 /
        (ticketAmount / 100000);
      return result.toFixed(2);
    },
    calculateNianxiAndHandleCharge(nianXi, handleCharge) {
      if (
        nianXi === "" ||
        typeof nianXi == "undefined" ||
        handleCharge === "" ||
        typeof handleCharge == "undefined"
      ) {
        return "-";
      }
      const ticketAmount = parseFloat(this.needData.ticketAmount) * 10000;
      nianXi = parseFloat(nianXi) / 100;
      const interestDays = parseFloat(
        this.needData.interestDays === 0 ? 1 : this.needData.interestDays
      );
      handleCharge = parseFloat(handleCharge);
      // console.log(ticketAmount, nianXi, interestDays, handleCharge);
      const result =
        ((ticketAmount * nianXi * interestDays) / 360 +
          (handleCharge * ticketAmount) / 100000) /
        (ticketAmount / 100000);
      return result.toFixed(2);
    },
    formatInputNumber(numberInput = "", isInt = false, pointNum = 6) {
      if (isInt) {
        return String(numberInput)
          .replace(/\D/g, "")
          .replace(/^0+([^.])/, "$1");
      }
      numberInput = String(numberInput).replace(/[^\d.]/g, "");
      const numberArr = numberInput.split(".");
      if (numberArr.length > 2) {
        numberArr.splice(2, numberArr.length);
      }
      if (numberArr.length > 1 && numberArr[0] === "") {
        numberArr[0] = "0";
      }
      if (numberArr[0]) {
        numberArr[0] = numberArr[0].replace(/^0+([^0])/, "$1");
      }
      if (numberArr[1] && numberArr[1].length > pointNum) {
        numberArr[1] = numberArr[1].slice(0, pointNum);
      }
      return numberArr.join(".") || undefined;
    },
    formatInputFloat(numberInput = "", isInt = false, decimalNumber = 6) {
      if (isInt) {
        return String(numberInput)
          .replace(/\D/g, "")
          .replace(/^0+/, "");
      }
      numberInput = String(numberInput);
      numberInput = numberInput.replace(/[^\d.]/g, "");
      numberInput = numberInput.replace(/^\./g, "");
      numberInput = numberInput.replace(/\.{2,}/g, ".");
      numberInput = numberInput
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", ".");
      let numberRes = "";
      if (numberInput !== "") {
        const reg = new RegExp(
          "^\\+?(\\d*\\.\\d{" + (decimalNumber + 1) + "})$"
        );
        if (reg.test(numberInput)) {
          numberRes = this.toDecimal(numberInput, decimalNumber);
          numberRes = +numberRes;
        } else {
          numberRes = numberInput;
        }
      }
      return numberRes;
    },
    //保留多位小数
    toDecimal(x = "", decimalNumer = 2) {
      let x1 = "";
      let num = 0;
      if (typeof x == "string") {
        num = parseFloat(x);
      } else {
        num = x;
      }
      let multiplyNumber = Math.pow(10, decimalNumer);
      x1 = Math.floor(num * multiplyNumber) / multiplyNumber;
      x1 = parseFloat(x1.toFixed(decimalNumer));
      return x1;
    }
  },
  mounted() {
    if (!this.showZk || (this.showZk && this.needData.ticketAmount > 10)) {
      this.reverseMap = {
        2: 3,
        3: 5,
        5: 2
      };
    }
  }
};
</script>

<style>
.tick-price-toggle-input .tog-area {
  width: 155px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tick-price-toggle-input .toggle {
  margin-left: 5px;
  background: pink;
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.tick-price-toggle-input .item-wrap {
  width: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tick-price-toggle-input input.el-input__inner {
  /* width: 120px; */
  height: 30px;
  background-color: #fafafa;
  border-radius: 4px;
  border: solid 1px #dbdbdb;
  padding: 0 3px;
  font-size: 14px;
  color: #999999;
}
.tick-price-toggle-input .input1 {
  width: 120px;
}
.tick-price-toggle-input .input2 {
  width: 40px;
}
.tick-price-toggle-input .input3 {
  width: 50px;
}
.tick-price-toggle-input .text-area {
  font-size: 12px;
  letter-spacing: 1px;
  color: #ff6700;
}
</style>
