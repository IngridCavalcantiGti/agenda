<template>
  <div class="p-4 d-flex gap-4">
    <img alt="logo" src="../assets/ic-logo.png" />
    <Button
      @click="(event) => $emit('click', { event })"
      v-if="isAddContactVisible"
    />
    <div class="flex-grow-1">
      <a-input placeholder="Buscar...">
        <template #suffix>
          <button
            @click="(event) => $emit('clickSearch', { event })"
            class="btn-custom"
          >
            <i class="bi bi-search"></i>
          </button>
        </template>
      </a-input>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button.vue";

// import { ref } from "@vue/composition-api";

export default {
  components: {
    Button,
  },
  props: { isAddContactVisible: { type: Boolean } },

  setup() {
    // const test = ref("");

    // const search = () => {
    //   emit("inputSearch");
    // };

    return {
      // search,
      // test,
    };
  },
};
</script>

<style>
.ant-input {
  background-color: #e4e7f4;
  height: 2rem;
  border-radius: 4px;
  color: #9198af;
}

.input-search {
  background: red;
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
.btn-custom {
  background-color: transparent;
  border: none;
}
</style>
