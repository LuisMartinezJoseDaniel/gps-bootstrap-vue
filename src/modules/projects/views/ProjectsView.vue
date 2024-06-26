<script setup lang="ts">
import SimpleCard from '@/modules/common/components/SimpleCard.vue';

import TransactionForm from '../components/TransactionForm.vue';

import { useTitleStore } from '@/stores/titleStore';
import { ref } from 'vue';
import type { BackendResponse } from '../interfaces/transaction';

const titleStore = useTitleStore();
titleStore.setTitle('Transacciones');

const transactions = ref<BackendResponse>();
const hasContent = ref(false);

// Column Definitions: Defines the columns to be displayed.
const colDefs = ref([
  { headerName: '#' },
  { headerName: 'operdate' },
  { headerName: 'Transaction Status' },
  { headerName: 'Subscriber Id' },
  { headerName: 'Offering Id' },
  { headerName: 'Monto Recarga' },
  { headerName: 'Provider' },
  { headerName: 'Pipe of Sale' },
  { headerName: 'Order Id' },
  { headerName: 'Be Id' },
  { headerName: 'Status Cx Provider' },
  { headerName: 'Status Cx MVNO' },
  { headerName: 'Status Cut Provider' },
  { headerName: 'Status Cut MVNO' },
]);

//fetch TRANSACTIONS from api
try {
  fetch(
    'http://localhost:8080/transactions/VwApigee/page?startDate=2024-06-18&endDate=2024-06-25&provider=-1&beIdMvno=-1&groupStatusCxProvider=-1&idStatusCxProvider=-1&idStatusCutProvider=-1&idStatusCutMvno=-1&subscriberId=&groupStatusCxMvno=-1&idStatusCxMvno=-1&orderIds=&pageSize=100&pageNumber=0',
  )
    .then((response) => response.json())
    .then((data) => {
      transactions.value = data as BackendResponse;

      hasContent.value = data.content.length > 0;
    });
} catch (error) {
  console.log(error);
}
</script>

<template>
  <div class="grid">
    <!-- Form -->
    <transaction-form></transaction-form>
    <!-- Table -->
    <simple-card class="mt-4">
      <template v-slot:title> Transacciones </template>
      <!-- <ag-grid-vue
        :rowData="transactions?.content"
        :columnDefs="colDefs"
        style="height: 500px"
        class="ag-theme-quartz"
      >
      </ag-grid-vue> -->
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>operdate</th>
              <th>Transaction Status</th>
              <th>Subscriber Id</th>
              <th>Offering Id</th>
              <th>Monto Recarga</th>
              <th>Provider</th>
              <th>Pipe of Sale</th>
              <th>Order Id</th>
              <th>Be Id</th>
              <th>Status Cx Provider</th>
              <th>Status Cx MVNO</th>
              <th>Status Cut Provider</th>
              <th>Status Cut MVNO</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="hasContent">
              <tr
                v-for="{
                  idApiGee,
                  operdate,
                  transactionStatus,
                  subscriberId,
                  offeringId,
                  montoRecarga,
                  provider,
                  pipeOfSale,
                  orderId,
                  beId,
                  statusCxProvider,
                  statusCxMvno,
                  statusCutProvider,
                  statusCutMvno,
                } in transactions!.content"
                :key="idApiGee"
              >
                <th>{{ idApiGee }}</th>
                <td>
                  {{ operdate }}
                </td>
                <td>
                  {{ transactionStatus }}
                </td>
                <td>{{ subscriberId }}</td>
                <th>
                  <button class="btn btn-ghost btn-xs">{{ offeringId }}</button>
                </th>
                <td>{{ montoRecarga }}</td>
                <td>{{ provider }}</td>
                <td>{{ pipeOfSale }}</td>
                <td>{{ orderId }}</td>
                <td>{{ beId }}</td>
                <td>{{ statusCxProvider }}</td>
                <td>{{ statusCxMvno }}</td>
                <td>{{ statusCutProvider }}</td>
                <td>{{ statusCutMvno }}</td>
              </tr>
            </template>
          </tbody>

          <tfoot>
            <tr></tr>
          </tfoot>
        </table>
      </div>
    </simple-card>
  </div>
</template>
