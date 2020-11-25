<template>
  <div class="">
    <el-dialog
      title="请输入发布张数或选择发布票号"
      :visible.sync="myVisible"
      @close="$emit('close')"
    >
      <button @click="cur = !cur">切换</button>
      <div v-show="cur">
        <el-input-number
          v-model="curPushNum"
          :min="1"
          :max="allTickNo.length"
        ></el-input-number>
      </div>
      <div v-show="!cur">
        <el-table
          :data="pushTickTableData"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="票号" width="320">
            <template slot-scope="scope">{{ scope.row.ticketNo }}</template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="$emit('close')">取 消</el-button>
        <el-button type="primary" @click="handlePushNumConfirm"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ChgPushTickDialog", // todo
  components: {},
  props: {
    allTickNo: {
      type: Array,
      required: true,
      default() {
        return ["1"];
      }
    },
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
      cur: true, //true 代表选择数量,false代表选择票号
      curPushNum: this.allTickNo.length,
      selTickNos: []
    };
  },
  computed: {
    pushTickTableData() {
      return this.allTickNo.map(ele => ({ ticketNo: ele }));
    }
  },
  watch: {
    visible(newValue) {
      console.log("newValue", newValue);
      this.myVisible = newValue;
      this.cur = true; //每次都打开数字那一面
      this.curPushNum = this.allTickNo.length;
    },
    allTickNo(newValue) {
      this.curPushNum = newValue.length;
    }
  },
  methods: {
    handleSelectionChange(selArr) {
      console.log("selArr", selArr);
      this.selTickNos = selArr.map(ele => ele.ticketNo);
    },
    handlePushNumConfirm() {
      const returnArr = this.cur
        ? [...this.allTickNo].slice(0, this.curPushNum)
        : this.selTickNos;
      this.$emit("change", returnArr);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.tick-price-toggle-input {
}
</style>
