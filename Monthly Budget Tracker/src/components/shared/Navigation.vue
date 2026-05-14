<template>
  <nav class="navbar">
    <RouterLink to="/">Dashboard</RouterLink>
    <RouterLink to="/transactions">Transactions</RouterLink>
    <RouterLink to="/transactions/new">Add Transaction</RouterLink>
    <RouterLink to="/categories">Categories</RouterLink>
    <RouterLink to="/settings">Settings</RouterLink>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #42b883;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.navbar a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: 0.2s ease;
}

.navbar a:hover {
  color: #42b883;
}

.navbar a.router-link-active {
  background-color: #42b883;
  color: #ffffff;
}

@media (max-width: 700px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .navbar a {
    width: 100%;
    text-align: center;
  }
}
</style>