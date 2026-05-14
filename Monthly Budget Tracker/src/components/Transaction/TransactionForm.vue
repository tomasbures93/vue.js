<script setup lang="ts">
import {inject, type Ref, ref} from "vue";
import Budget from "@/models/Budget.ts";
import type {Transaction} from "@/models/Transaction.ts";
import SubmitButton from "@/components/shared/SubmitButton.vue";
import type {Category} from "@/models/Category.ts";

const budget = inject<Ref<Budget>>("budget");
const categories = inject<Ref<Category[]>>("categories");

const initialValue = (): Transaction => ({
  id: "",
  title: "",
  amount: 0,
  type: "income",
  categoryId: 0,
  date: "",
  note: "",
  createdAt: ""
})

const transaction = ref<Transaction>(initialValue())

function addTransaction() {
  if(transaction.value.amount <= 0 || 
      transaction.value.title === "" || 
      transaction.value.date === "" ||
      transaction.value.categoryId === 0) return
  
  console.log(transaction.value);
  budget!.value.addTransaction(transaction.value);
  transaction.value = initialValue();
}
</script>

<template>
  <form @submit.prevent="addTransaction">
    <div class="form-group">
      <label>Title</label>
      <input type="text" v-model="transaction.title" placeholder="Enter title" required/>
    </div>

    <div class="form-group">
      <label>Amount</label>
      <input
          type="number"
          step="0.01"
          min="0"
          v-model="transaction.amount"
          placeholder="0.00"
          required
      />
    </div>

    <div class="form-group">
      <label>Type</label>
      <select v-model="transaction.type">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>

    <div class="form-group">
      <label>Category</label>
      <select v-model="transaction.categoryId" required>
        <option  v-for="category in categories" :key="category.id" :value=category.id>
          {{category.name}}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label>Date</label>
      <input type="date" v-model="transaction.date" required/>
    </div>

    <div class="form-group">
      <label>Note</label>
      <input type="text" v-model="transaction.note" placeholder="Optional note" />
    </div>
    
    <SubmitButton text="Add Transaction" />
  </form>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  
  label {
    font-weight: 600;
    font-size: 0.95rem;
  }
  
  input,
  select {
    padding: 0.75rem;
    border: 1px solid #42b883;
    border-radius: 8px;
    font-size: 1rem;
    background-color: #ffffff;
    color: #2c3e50;
    outline: none;
  }
  
  input:focus,
  select:focus {
    border-color: #2c3e50;
  }
</style>