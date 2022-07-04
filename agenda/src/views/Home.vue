<template>
  <div class="home">
    <Header class="mb-5" @click="showModal" :isAddContactVisible="hasData" />
    <Table :data="data" v-if="hasData" @clickEdit="showModal" />
    <EmptyData v-else @click="showModal" />
    <a-modal
      v-model="visible"
      :ok-button-props="{ props: { disabled: true } }"
      :title="titleModal"
      @ok="handleAdd"
      cancelText="Cancelar"
      okText="Salvar"
      width="27rem"
      :closable="false"
    >
      <span class="d-block">Nome</span>
      <a-input v-model="name" class="input-modal" />
      <span class="d-block">E-mail</span>
      <a-input v-model="email" class="input-modal" />
      <span class="d-block">Telefone</span>
      <a-input
        v-model="phone"
        v-mask="'(##) #########'"
        class="input-modal-phone"
      />
    </a-modal>
  </div>
</template>

<script>
import { ref, computed } from "@vue/composition-api";
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";
import EmptyData from "@/components/EmptyData.vue";

export default {
  name: "Home",
  components: {
    Header,
    Table,
    EmptyData,
  },

  setup() {
    const sendDataTable = () => {
      console.log("aqui");
    };

    const visible = ref(false);
    const name = ref("");
    const email = ref("");
    const phone = ref("");
    const titleModal = ref("");
    const showModal = ({ edit = false }) => {
      titleModal.value = edit ? "Editar contato" : "Criar novo contato";
      visible.value = true;
    };

    const data = ref([
      // {
      //   key: 1,
      //   avatar: `I `,
      //   contacts: `Ingrid`,
      //   email: `ingrid@teste`,
      //   phone: `(81) 999409322`,
      // },
    ]);
    const handleAdd = () => {
      visible.value = false;
      const newData = {
        key: data.value.length + 1,
        avatar: `${name.value.substr(0, 1)} `,
        contacts: `${name.value}`,
        email: `${email.value}`,
        phone: `${phone.value}`,
      };
      data.value.push(newData);
    };

    const hasData = computed(() => data.value.length > 0);

    return {
      sendDataTable,
      visible,
      name,
      email,
      phone,
      showModal,
      handleAdd,
      data,
      titleModal,
      hasData,
    };
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
