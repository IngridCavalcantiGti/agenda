<template>
  <div class="d-flex justify-content-center">
    <div>
      <img alt="Icone Plus" src="../assets/ic-book.png" class="me-2 d-block" />
      <span class="d-block mt-2 mb-2 text-center">
        Nenhum contato foi criado ainda
      </span>
      <a-button
        @click="(event) => $emit('click', { event })"
        class="d-flex align-items-center"
      >
        <img alt="Icone Plus" src="../assets/ic-plus.png" class="me-2" />
        Criar contato
      </a-button>
    </div>
  </div>
</template>
