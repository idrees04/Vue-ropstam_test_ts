<script setup lang="ts">
import { RouterLink } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>
<template>
  <div class="card-title text-center border-bottom">
    <h2 class="p-3">Login</h2>
  </div>
  <div class="card-body">
    <form>
      <div class="form-group mb-2">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" />
      </div>
      <div class="form-group mb-4">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg" />
      </div>
      <!-- <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign In
      </button> -->
      <div class="d-grid">
        <button type="submit" class="btn text-light main-bg">Login</button>
      </div>
      <!-- <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p> -->
      <p>
        register
        <router-link :to="{ name: 'signup' }">sign up?</router-link>
      </p>
    </form>
  </div>
</template>
