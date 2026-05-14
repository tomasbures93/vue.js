<script setup lang="ts">
  import AppLayout from "@/components/layout/AppLayout.vue";
  import {provide, ref} from "vue";
  
  import Budget from "@/models/Budget.ts";
  
  const budget = ref(new Budget());
  const categories = ([
    { id: 1, name: "Housing" },
    { id: 2, name: "Food & Groceries" },
    { id: 3, name: "Dining Out" },
    { id: 4, name: "Transportation" },
    { id: 5, name: "Health & Fitness" },
    { id: 6, name: "Entertainment" },
    { id: 7, name: "Savings & Investments" },
    { id: 8, name: "Debt & Loans" },
    { id: 9, name: "Income" }
  ]);
  
  provide("budget", budget);
  provide("categories", categories);
</script>

<template>
  <AppLayout />
</template>

<style scoped>

</style>
