<template>
  <div class="home">
    <Header class="mb-5" />
    <Table />
    <!-- <Modal /> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";
// import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
  components: {
    Header,
    Table,
    // Modal,
  },
};
</script>
