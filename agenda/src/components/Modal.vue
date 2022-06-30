<template>
  <div>
    <a-modal
      v-model="visible"
      title="Criar novo Modal"
      onOk="handleOk"
      cancelText="Cancelar"
      okText="Salvar"
    >
      <a-input v-model="name" addonBefore="Nome" />
      <a-input v-model="email" addonBefore="E-mail" />
      <a-input v-model="phone" addonBefore="Telefone" />
    </a-modal>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const visible = ref(true);
    const name = ref("");
    const email = ref("");
    const phone = ref("");

    const handleOk = () => {
      visible.value = false;
    };

    return {
      visible,
      handleOk,
      name,
      email,
      phone,
    };
  },
};
</script>
