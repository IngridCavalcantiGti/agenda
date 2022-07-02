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
/* body {
  background-color: #f8f9fd !important;
} */
.ant-pagination {
  display: none;
}
.ant-table-column-title {
  color: #9198af;
  background-color: #ffffff;
}
.ant-table-thead > tr > th {
  background: #ffffff !important;
  height: 2.5rem !important;
}

/* .ant-table-thead {
  border: solid 1px #e1e1e1 !important;
  border-radius: 4px !important;
} */
.ant-table-tbody:hover {
  background: #fff3f2;
}
/* .ant-table-tbody:active {
  background: #fff3f2;
} */
.ant-modal-content,
.ant-modal-header {
  border-radius: 16px 16px 0 0 !important;
}
.home {
  width: 90rem;
  height: 64rem;
  background-color: #f8f9fd;
}

.ant-modal-header {
  height: 2.9rem !important;
}

.ant-modal-title {
  font-size: 1rem !important;
  color: #2a2d3b;
}

.ant-modal-footer {
  border-radius: 0 0 16px 16px !important;
}
</style>
