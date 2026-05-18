<script setup lang="ts">
import type {Transaction} from "@/models/Transaction.ts";

defineProps<{
  transaction: Transaction
}>();
</script>

<template>
  <tr>
    <td>{{transaction.title}}</td>
    <td>{{transaction.amount}}</td>
    <td>{{transaction.type}}</td>
    <td>{{transaction.category}}</td>
    <td>{{transaction.date}}</td>
    <td>{{transaction.note}}</td>
  </tr>
</template>

<style scoped>

</style>