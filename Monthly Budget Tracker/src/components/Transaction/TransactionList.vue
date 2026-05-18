<script setup lang="ts">
  import Budget from "@/models/Budget.ts";
  import {inject, type Ref} from "vue";
  import TransactionItem from "@/components/Transaction/TransactionItem.vue";

  const transactions = inject<Ref<Budget>>("budget");
</script>

<template>
  <p v-if="transactions!.getAllTransactions().length === 0">No transactions found</p>
  <table v-else>
    <thead>
    <tr>
      <th>Title</th>
      <th>Amount</th>
      <th>Type</th>
      <th>Category</th>
      <th>Date</th>
      <th>Note</th>
    </tr>
    </thead>
    <tbody>
      <TransactionItem 
          v-for="transaction in transactions!.getAllTransactions()" 
          :index="transaction.id" 
          :transaction="transaction" />
    </tbody>
  </table>
</template>

<style scoped>

</style>