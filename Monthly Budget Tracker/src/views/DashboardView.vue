<script setup lang="ts">
import {inject, type Ref} from "vue";
import type Budget from "@/models/Budget.ts";

const budget = inject<Ref<Budget>>("budget");
</script>

<template>
  <h1>Dashboard View</h1>
  <p v-if="budget!.getAllTransactions().length === 0">
    No Transaction Found Create a New one
  </p>
  <p v-else>
    Some transactions were found
  </p>
</template>

<style scoped>

</style>