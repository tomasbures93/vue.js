<script setup lang="ts">
import {inject, type Ref, ref} from "vue";
import Budget from "@/models/Budget.ts";
import type {Transaction} from "@/models/Transaction.ts";
import SubmitButton from "@/components/shared/SubmitButton.vue";
import type {Category} from "@/models/Category.ts";

const budget = inject<Ref<Budget>>("budget");
const categories = inject<Ref<Category[]>>("categories");

let errors = ref<string[]>([]);

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
  errors.value = validateForm(transaction.value);
  if(errors.value.length > 0) return;
  
  console.log(transaction.value);
  budget!.value.addTransaction(transaction.value);
  transaction.value = initialValue();
}

function validateForm(transaction: Transaction): string[] {
  const errors: string[] = [];
  
  if(transaction.title === "") errors.push("Title is required");
  if(transaction.amount <= 0) errors.push("Amount must be greater than 0");
  if(transaction.categoryId === 0) errors.push("Category is required");
  if(transaction.date === "") errors.push("Date is required");
  return errors;
}
</script>

<template>
  <form @submit.prevent="addTransaction">
    <div class="form-group error" v-if="errors.length > 0">
      <p class="no-padding"><strong>Errors</strong></p>
      <span v-for="error in errors" :key="error">- {{error}}</span>
    </div>
    
    <div class="form-group">
      <label>Title</label>
      <input type="text" v-model="transaction.title" placeholder="Enter title"/>
    </div>

    <div class="form-group">
      <label>Amount</label>
      <input
          type="number"
          step="0.01"
          min="0"
          v-model="transaction.amount"
          placeholder="0.00"
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
      <select v-model="transaction.categoryId">
        <option  v-for="category in categories" :key="category.id" :value=category.id>
          {{category.name}}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label>Date</label>
      <input type="date" v-model="transaction.date"/>
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
  
  .error {
    padding: 1rem;
    border: 1px solid red;
    border-radius: 8px;
  }
  
  .no-padding {
    padding: 0;
    margin: 0;
    color: red;
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