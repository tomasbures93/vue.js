<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Dashboard</RouterLink>
    <RouterLink to="/transactions">Transactions</RouterLink>
    <RouterLink to="/transactions/new">Add Transaction</RouterLink>
    <RouterLink to="/categories">Categories</RouterLink>
    <RouterLink to="/settings">Settings</RouterLink>
  </nav>
</template>

<style scoped>

</style>