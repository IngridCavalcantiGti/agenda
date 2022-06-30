<template>
  <div class="p-4 d-flex">
    <img alt="logo" src="../assets/ic-logo.png" class="me-5" />
    <a-button @click="showModal">
      <img alt="Icone Plus" src="../assets/ic-plus.png" class="me-2" />
      Criar contato
    </a-button>
    <div class="input-w">
      <a-input placeholder="Buscar..." class="ms-4 input-color">
        <template #suffix>
          <img alt="Icone Search" src="../assets/ic-search.png" class="me-2" />
        </template>
      </a-input>
    </div>
    <a-modal
      v-model="visible"
      title="Criar novo contato"
      ok="handleOk"
      cancelText="Cancelar"
      okText="Salvar"
    >
      <span>Nome</span>
      <a-input v-model="name" />
      <span>E-mail</span>
      <a-input v-model="email" a />
      <span>Telefone</span>
      <a-input v-model="phone" />
    </a-modal>
  </div>
</template>
<script>
import { ref } from "@vue/composition-api";
// import Modal from "@/components/Modal.vue";

export default {
  // components: { Modal },

  setup() {
    const visible = ref(false);
    const name = ref("");
    const email = ref("");
    const phone = ref("");

    const showModal = () => {
      visible.value = true;
      console.log("clicou");
    };

    const handleOk = () => {
      visible.value = false;
    };

    return {
      showModal,
      handleOk,
      visible,
      name,
      email,
      phone,
    };
  },
};
</script>

<style scoped>
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
.ant-input {
  background-color: #e4e7f4;
  height: 2rem;
  border-radius: 4px;
  color: #9198af;
}
.input-w {
  width: 64.5rem;
}

.ant-modal-close {
  display: none;
}
</style>
