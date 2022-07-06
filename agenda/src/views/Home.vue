<template>
  <div class="home">
    <Header
      class="mb-5"
      @click="showModal"
      :isAddContactVisible="hasData"
      @clickSearch="inputSearch"
      :input="searchValue"
    />
    <Table
      :data="data"
      v-if="hasData"
      @clickEdit="showModal"
      @clickDelete="showModalDelete"
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
      <span class="d-block">E-mail</span>
      <a-input v-model="email" class="input-modal" />
      <span class="d-block">Telefone</span>
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
    const searchValue = ref("teste dddddddd");
    const inputSearch = () => {
      console.log(searchValue.value);
    };

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
        console.log(item);
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
      inputSearch,
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
      searchValue,
      clear,
    };
  },
};
</script>

<style>
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

.ant-table-tbody:hover {
  background: #fff3f2;
}

/* .ant-modal-content, */
/* .ant-modal-header {
  border-radius: 16px 16px 0 0 !important;
} */
body {
  background-color: #f8f9fd;
}

/* .ant-modal-title {
  font-size: 1rem !important;
  color: #2a2d3b;
} */

/* .ant-modal-footer {
  border-radius: 0 0 16px 16px !important;
} */

/* inicio aqui */
/* .modal-contact {
  width: 27rem;
  height: 21.375rem;
  margin: 10.625rem 10.438rem 1.437rem 30.375rem;
  padding: 1rem 0;
  border-radius: 16px;
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
  background-color: red;
} */

.ant-modal-content {
  border-radius: 16px !important;
}
.ant-modal-header {
  height: 2.9rem;
  border-radius: 16px 16px 0 0 !important;
}
.ant-modal-title {
  border-radius: 16px !important;
}
.ant-modal {
  border-radius: 16px 16px 0 0 !important;
}

/* testando aqui */

/* .ant-modal-content {
  background-color: red;
}
.ant-modal-body {
  background-color: blue;
}
.ant-modal-footer {
  background-color: green;
} */
.ant-modal-content {
  background-color: blue;
}

.ant-modal-content .ant-btn-primary {
  border-radius: 50px;
  background-color: #fa7268;
}
</style>
