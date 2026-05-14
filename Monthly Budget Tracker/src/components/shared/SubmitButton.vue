<script setup lang="ts">
  defineProps({
    text: String,
    
  })
</script>

<template>
  <button type="submit">{{text}}</button>
</template>

<style scoped>
  button {
    margin-top: 1rem;
    padding: 0.85rem;
    border: none;
    border-radius: 8px;
    background-color: #42b883;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.9;
  }
</style>