<template>
  <div>
    <div>
      <div @click="$emit('update:title', title + 'add')">
        syncTitle为: {{ title }}
      </div>
      <div @click="commTitle = commTitle + 'add'">
        commTitle为: {{ commTitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BindSyncTest",
  components: {},
  props: ["title", "commTitle"],
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped></style>
