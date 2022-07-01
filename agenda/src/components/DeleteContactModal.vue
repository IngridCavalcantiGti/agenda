<template>
  <div>
    <a-modal
      v-model="visible"
      title="Excluir contato"
      @ok="handleOk"
      cancelText="Cancelar"
      okText="Excluir"
    >
      <span>Deseja realmente excluir o contato?</span>
    </a-modal>
  </div>
</template>
