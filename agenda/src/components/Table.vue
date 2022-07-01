 <template>
  <div>
    <div class="d-flex justify-content-center" v-if="data.length < 1">
      <div>
        <img
          alt="Icone Plus"
          src="../assets/ic-book.png"
          class="me-2 d-block"
        />
        <span class="d-block mt-2 mb-2 text-center"
          >Nenhum contato foi criado ainda</span
        >
        <a-button @click="showModal" class="d-flex align-items-center">
          <img alt="Icone Plus" src="../assets/ic-plus.png" class="me-2" />
          Criar contato
        </a-button>
      </div>
    </div>

    <a-table :columns="columns" :dataSource="data" v-if="data.length > 0">
      <template #bodyCell>
        <!-- <template v-if="column.key === 'name'">
          <div class="circle-name"></div>
        </template> -->
        <a-table-column key="action">
          <template #default>
            <span>
              <a><i class="bi bi-pencil"></i></a>
              <a><i class="bi bi-trash3"></i></a>
            </span>
          </template>
        </a-table-column>
      </template>
    </a-table>
    <a-modal
      v-model="visible"
      title="Criar novo contato"
      @ok="handleAdd"
      cancelText="Cancelar"
      okText="Salvar"
      class="bg_modal"
      width="27rem"
      :closable="false"
      :ok-button-props="{ disabled: true }"
    >
      <span class="d-block">Nome</span>
      <a-input v-model="name" class="input-modal" />
      <span class="d-block">E-mail</span>
      <a-input v-model="email" class="input-modal" />
      <span class="d-block">Telefone</span>
      <a-input v-model="phone" class="input-modal-phone" />
    </a-modal>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const visible = ref(false);
    const name = ref("");
    const email = ref("");
    const phone = ref("");

    const showModal = () => {
      visible.value = true;
    };

    const columns = [
      {
        dataIndex: "contacts",
        name: "contacts",
        title: "Contatos",
        key: "name",
        width: "25%",
      },
      {
        title: "E-mail",
        dataIndex: "email",
        key: "email",
        width: "25%",
      },
      {
        title: "Telefone",
        dataIndex: "phone",
        key: "phone",
        width: "25%",
      },
      {
        key: "action",
        width: "15%",
        dataIndex: "action",
      },
    ];

    const data = ref([]);

    const count = computed(() => data.value.length + 1);

    const handleAdd = () => {
      visible.value = false;
      const newData = {
        key: `${count.value}`,
        contacts: `${name.value.substr(0, 1)} ${name.value}`,
        email: `${email.value}`,
        phone: `${phone.value}`,
        // action: `${''}`,
      };
      data.value.push(newData);
    };

    return {
      columns,
      data,
      showModal,
      handleAdd,
      visible,
      name,
      email,
      phone,
    };
  },
});
</script>
<style scoped>
.ant-table-column-title {
  color: #9198af;
}
.ant-table-body {
  max-height: 2.5rem;
  display: flex;
  align-items: center;
}
.ant-table-thead {
  background-color: #ffffff;
}
.ant-table-wrapper {
  width: 88rem;
  margin-left: 1rem;
}
.ant-pagination {
  display: none;
}
.ant-btn {
  background-color: #dbff90;
  color: #fa7268;
  border-radius: 20px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16),
    0 0 0 0.5px rgba(0, 0, 0, 0.08), inset 0 0 0 0.5px rgba(0, 0, 0, 0.08),
    0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
  border: none;
  font-weight: 500;
}
.ant-btn:hover {
  background-color: #dbff90;
  color: #fa7268;
  border-radius: 20px;
}

.circle-name {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 1rem 0 0;
  padding: 0.188rem 0.313rem 0.125rem 0.375rem;
  background-color: #fa7268;
}
</style>
