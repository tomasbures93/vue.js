<script setup lang="ts">

import TransactionForm from "@/components/Transaction/TransactionForm.vue";
</script>

<template>
  <main class="page">
    <section class="form-card">
      <h1>Add Transaction</h1>

      <TransactionForm />      
    </section>
  </main>
</template>

<style scoped>
.page {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #2c3e50;
}

.form-card {
  width: 100%;
  max-width: 420px;
  border: 1px solid #42b883;
  border-radius: 16px;
  padding: 2rem;
}

h1 {
  margin-bottom: 1.5rem;
  text-align: center;
  color: #42b883;
  font-size: 1.8rem;
}
</style>