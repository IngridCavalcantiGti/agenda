<template>
  <div class="p-4 d-flex">
    <img alt="logo" src="../assets/ic-logo.png" class="me-5" />
    <a-button @click="showModal" class="d-flex align-items-center">
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
      @ok="handleOk"
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
import { ref } from "@vue/composition-api";

export default {
  setup() {
    const visible = ref(false);
    const name = ref("");
    const email = ref("");
    const phone = ref("");

    const showModal = () => {
      console.log("clicou");
      visible.value = true;
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
.ant-modal {
  width: 27rem;
  height: 21.375rem;
  margin: 10.625rem 10.438rem 1.437rem 30.375rem;
  padding: 1rem 0;
  border-radius: 16px;
  box-shadow: 0 16px 10px 0;
}

.input-modal {
  width: 24rem;
  height: 2rem;
  margin: 0.25rem;
  border-radius: 4px;
  border: solid 1px #c0c3d2;
  background-color: #ffffff;
}
.input-modal-phone {
  width: 8rem;
  height: 2rem;
  margin: 0.25rem;
  border-radius: 4px;
  border: solid 1px #c0c3d2;
  background-color: #ffffff;
}
.bg-modal {
  width: 27rem;
  height: 21.375rem;
  margin: 10.625rem 10.438rem 1.437rem 30.375rem;
  padding: 1rem 0;
  border-radius: 16px;
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
}
</style>
