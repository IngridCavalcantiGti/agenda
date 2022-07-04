 <template>
  <div>
    <a-table :columns="columns" :dataSource="data">
      <template slot="action" slot-scope="text, record">
        <button @click="(event) => $emit('clickEdit', { event, edit: record })">
          Editar
        </button>
      </template>
    </a-table>
  </div>
</template>
<script>
export default {
  props: {
    data: { type: Array, required: true },
  },
  setup() {
    const columns = [
      {
        dataIndex: "avatar",
        key: "avatar",
        width: "5%",
      },
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
        width: "20%",
        dataIndex: "action",
        scopedSlots: { customRender: "action" },
      },
    ];

    return {
      columns,
    };
  },
};
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

.ant-modal-footer .ant-btn-primary {
  background-color: #fa7268;
}
</style>
