<script setup lang="ts">

</script>

<template>
  <header class="app-header">
    <h1>Expense Tracker</h1>
  </header>
</template>

<style scoped>
.app-header {
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #42b883;
  padding: 1.5rem 2rem;
  text-align: center;
}

.app-header h1 {
  margin: 0;
  color: #42b883;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

@media (max-width: 700px) {
  .app-header {
    padding: 1.25rem 1rem;
  }

  .app-header h1 {
    font-size: 1.6rem;
  }
}
</style>