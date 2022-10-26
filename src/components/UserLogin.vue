<script setup lang="ts">
import { RouterLink } from 'vue-router';
// import HelloWorld from "./components/HelloWorld.vue";
</script>
<template>
  <div class="card-title text-center border-bottom">
    <h2 class="p-3">Login</h2>
  </div>
  <div class="card-body">
    <form>
      <div class="form-group mb-2">
        <label for="emaillogin">
          <input type="email" id="emaillogin" class="form-control form-control-lg" />
          Email address
        </label>
      </div>
      <div class="form-group mb-4">
        <label for="passwordlogin">
          <input type="password" id="passwordlogin" class="form-control form-control-lg" />
          Password
        </label>
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
        Need an account?
        <router-link :to="{ name: 'signup' }">sign up</router-link>
      </p>
      <p>
        register
        <router-link :to="{ name: 'todo' }"> ToDO</router-link>
      </p>
    </form>
  </div>
</template>
