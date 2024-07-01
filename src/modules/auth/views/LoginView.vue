<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <form class="card-body">
    <h2 class="card-title">Login</h2>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Usuario</span>
      </label>
      <input type="email" placeholder="email" class="input input-bordered" required />
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" class="input input-bordered" required />
      <label class="label">
        <RouterLink to="/auth/forgot-password" class="label-text-alt link link-hover"
          >Forgot password?</RouterLink
        >
      </label>
    </div>
    <div class="form-control mt-6">
      <RouterLink to="/" class="btn btn-primary">Login</RouterLink>
    </div>
  </form>
</template>
