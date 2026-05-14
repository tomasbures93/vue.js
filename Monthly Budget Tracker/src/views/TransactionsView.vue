<script setup lang="ts">
import {inject, type Ref} from "vue";
import  Budget from "@/models/Budget.ts";

const budget = inject<Ref<Budget>>("budget");

const transactions = budget!.value.getAllTransactions();
</script>

<template>
  <h1>Transaction View</h1>
  <p>{{transactions.map(item => item.title)}}</p>
</template>

<style scoped>

</style>