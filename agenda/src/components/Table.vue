 <template>
  <div>
    <a-table :columns="columns" :dataSource="data">
      <a-table-column key="action">
        <template #default>
          <span>
            <a><i class="bi bi-pencil"></i></a>

            <a><i class="bi bi-trash3"></i></a>
          </span>
        </template>
      </a-table-column>
    </a-table>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
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
        width: "25%",
      },
    ];
    const data = [
      {
        key: "1",
        contacts: "Aysha",
        email: "aysha@hotmail.com",
        phone: "81 99524525",
      },
    ];

    return {
      columns,
      data,
    };
  },
});
</script>
<style>
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
</style>
