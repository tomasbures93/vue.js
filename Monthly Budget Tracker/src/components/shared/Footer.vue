<script setup lang="ts">

</script>

<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p class="footer-title">Expense Tracker</p>

      <nav class="footer-links">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/transactions">Transactions</RouterLink>
        <RouterLink to="/categories">Categories</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </nav>

      <p class="footer-copy">
        © 2026 Expense Tracker. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  width: 100%;
  background-color: #42b883;
  color: #ffffff;
  padding: 2rem;
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.footer-title {
  margin: 0 0 1rem;
  font-size: 1.25rem;
  font-weight: 700;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.footer-links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: 0.2s ease;
}

.footer-links a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.footer-copy {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.9;
}

@media (max-width: 700px) {
  .app-footer {
    padding: 1.5rem 1rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>