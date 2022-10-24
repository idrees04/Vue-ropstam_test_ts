<template>
  <div class="card-title text-center border-bottom">
    <h2 class="p-3">Sign Up</h2>
  </div>
  <div class="card-body">
    <form>
      <div class="form-group mb-2">
        <label>Full Name</label>
        <input type="text" class="form-control form-control-lg" />
      </div>
      <div class="form-group mb-2">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" />
      </div>
      <div class="form-group mb-4">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg" />
      </div>
      <div class="d-grid mb-2">
        <button type="submit" class="btn text-light main-bg">Sign Up</button>
      </div>
      <p>
        Already registered
        <router-link :to="{ name: 'login' }">sign in?</router-link>
      </p>
    </form>
  </div>
</template>
