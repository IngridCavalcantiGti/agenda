<template>
  <div>
    <a-modal
      v-model="visible"
      title="Criar novo contato"
      @ok="handleOk"
      cancelText="Cancelar"
      okText="Salvar"
      @sendEvent="showModalNewContact"
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

export default {
  setup(props, { emit }) {
    const visible = ref(false);
    const name = ref("");
    const email = ref("");
    const phone = ref("");

    const handleOk = () => {
      visible.value = false;
      emit("pushData");
    };

    const showModalNewContact = () => {
      // visible.value = true;
      console.log("chegou no modal");
    };

    return {
      visible,
      handleOk,
      name,
      email,
      phone,
      showModalNewContact,
    };
  },
};
</script>
<style>
.ant-btn .ant-btn-primary {
  background-color: #fa7268;
  border-radius: 16px;
}

.ant-modal {
  width: 27rem !important;
}
</style>
