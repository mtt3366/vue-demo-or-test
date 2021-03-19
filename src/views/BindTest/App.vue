<template>
  <div>
    <MyComOne test1="xxxx1" test2="xxxx2"></MyComOne>
    <MyComTwo test1="test1" test2="test2"></MyComTwo>

    <div v-bind="{ id: '1', id2: 1, 'other-attr': true }">
      {{ `v-bind 普通div测试 ` }}
    </div>
    <BindTest
      my-prop="my-propstxt"
      my-attr="my-attr"
      v-bind="{ myProp2: 'myProp2', myAttr2: 'myAttr2' }"
    ></BindTest>
    <BindSyncTest
      v-bind:title="doc.title"
      v-on:update:title="doc.title = $event"
      v-bind:commTitle="commTitle"
    />
    <BindSyncTest v-bind:title.sync="doc.title" v-bind:commTitle="commTitle" />
  </div>
</template>

<script>
import MyComOne from "./MyComOne";
import MyComTwo from "./MyComTwo";
import BindTest from "./BindTest";

import BindSyncTest from "./BindSyncTest";
export default {
  name: "BindTestMain",
  components: {
    BindSyncTest,
    BindTest,
    MyComOne,
    MyComTwo
  },
  data() {
    return {
      doc: {
        title: "我是syncTitle"
      },
      commTitle: "我是commTitle"
    };
  }
};
</script>

<style scoped></style>
