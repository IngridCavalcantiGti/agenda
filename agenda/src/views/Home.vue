<template>
  <div class="home">
    <Header class="mb-5" @click="showModal" :isAddContactVisible="hasData" />
    <Table
      :data="data"
      v-if="hasData"
      @clickEdit="showModal"
      @clickDelete="showModalDelete"
      class="custom-row-hover"
    />

    <EmptyData v-else @click="showModal" />
    <a-modal
      v-model="visible"
      :ok-button-props="{ props: { disabled: isDisabled } }"
      :title="titleModal"
      @ok="handleAdd"
      @cancel="clear"
      cancelText="Cancelar"
      okText="Salvar"
      width="27rem"
      :closable="false"
    >
      <span class="d-block">Nome</span>
      <a-input v-model="name" class="input-modal" />
      <span class="d-block mt-2">E-mail</span>
      <a-input v-model="email" class="input-modal" />
      <span class="d-block mt-2">Telefone</span>
      <a-input
        v-model="phone"
        v-mask="'(##) #########'"
        class="input-modal-phone"
      />
    </a-modal>
    <a-modal
      v-model="visibleDelete"
      title="Excluir contato"
      @ok="handleDelete"
      cancelText="Cancelar"
      okText="Excluir"
      :closable="false"
      width="27rem"
    >
      <span>Deseja realmente excluir o contato?</span>
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
    const visible = ref(false);
    const visibleDelete = ref(false);
    const name = ref("");
    const email = ref("");
    const phone = ref("");
    const isEdit = ref(false);
    const currentKey = ref(null);
    const titleModal = computed(() => (isEdit.value ? "Editar contato" : "Criar novo contato"));
    const showModal = ({ edit = false }) => {
      visible.value = true;
      isEdit.value = Boolean(edit);
      if (isEdit.value) {
        currentKey.value = edit.key;
        name.value = edit.name;
        email.value = edit.email;
        phone.value = edit.phone;
      }
    };

    const keyToDelete = ref();
    const showModalDelete = ({ key }) => {
      keyToDelete.value = key;
      visibleDelete.value = true;
    };

    const data = ref([]);

    const clear = () => {
      name.value = "";
      email.value = "";
      phone.value = "";
      currentKey.value = null;
    };

    const handleAdd = () => {
      let newKey = 1;
      if (data.value.length) {
        // eslint-disable-next-line max-len
        const item = data.value
          .map((dataItem) => dataItem.key)
          .reduce((oldValue, currentValue) => Math.max(oldValue, currentValue));
        newKey = item + 1;
      }
      const newData = {
        key: currentKey.value ?? newKey,
        avatar: `${name.value.substr(0, 1)} `,
        name: `${name.value}`,
        email: `${email.value}`,
        phone: `${phone.value}`,
      };

      if (isEdit.value) {
        const position = data.value.map((item) => item.key).indexOf(currentKey.value);
        data.value.splice(position, 1, newData);
      } else {
        data.value.push(newData);
      }
      visible.value = false;
      clear();
    };

    const hasData = computed(() => data.value.length > 0);

    const handleDelete = () => {
      const position = data.value.map((item) => item.key).indexOf(keyToDelete.value);
      data.value.splice(position, 1);
      keyToDelete.value = null;
      visibleDelete.value = false;
    };

    const isDisabled = computed(
      () => !name.value.length && !email.value.length && !phone.value.length,
    );

    return {
      visible,
      name,
      email,
      phone,
      showModal,
      handleAdd,
      data,
      titleModal,
      hasData,
      visibleDelete,
      showModalDelete,
      handleDelete,
      isDisabled,
      clear,
    };
  },
};
</script>

<style>
.ant-table-column-title {
  color: #9198af;
}
.ant-table-thead > tr > th {
  background: #ffffff !important;
  height: 2.5rem !important;
}

.ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
  background: #fff3f2 !important;
}

.ant-table-wrapper {
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  margin-left: 1rem;
  margin-right: 1rem;
}

.ant-table-tbody {
  height: 2.5rem;
  background: #ffffff;
}

body {
  background-color: #f8f9fd !important;
}

.ant-modal-content {
  border-radius: 16px !important;
}
.ant-modal-header {
  height: 2.9rem;
  border-radius: 16px !important;
}
.ant-modal-title {
  border-radius: 16px !important;
}

.ant-modal-content .ant-btn-primary,
.ant-modal-content .ant-btn-primary:hover,
.ant-modal-content .ant-btn-primary:active {
  border-radius: 50px;
  background-color: #fa7268;
  border: #fa7268;
}

.ant-modal-content .ant-btn:nth-child(1) {
  border: transparent;
  background-color: white;
  color: #fa7268;
}
.ant-modal-content .input-modal {
  background-color: #ffffff !important;
}
.ant-modal-content .input-modal-phone {
  background-color: #ffffff !important;
  width: 8rem;
}
.ant-modal-body {
  color: #2a2d3b;
}
</style>
