<template>
  <div class="home">
    <Header class="mb-5" />
    <Table />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";

export default {
  name: "Home",
  components: {
    Header,
    Table,
  },
};
</script>

<style>
.ant-pagination {
  display: none;
}
</style>
