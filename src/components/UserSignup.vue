<template>
  <div class="card-title text-center border-bottom">
    <h2 class="p-3">Sign Up</h2>
  </div>
  <div class="card-body">
    <form>
      <div class="form-group mb-2">
        <label for="fullName">
          <input type="text" id="fullName" class="form-control form-control-lg" />
          Full Name
        </label>
      </div>
      <div class="form-group mb-2">
        <label for="email">
          <input type="email" id="email" class="form-control form-control-lg" />
          Email address
        </label>
      </div>
      <div class="form-group mb-4" for>
        <label for="password">
          <input type="password" id="password" class="form-control form-control-lg" />
          Password
        </label>
      </div>
      <div class="d-grid mb-2">
        <button type="submit" class="btn text-light main-bg">Sign Up</button>
      </div>
      <p>
        Already have an account?
        <router-link :to="{ name: 'login' }">sign in</router-link>
      </p>
      <p>
        register
        <router-link :to="{ name: 'todo' }"> ToDO</router-link>
      </p>
    </form>
  </div>
</template>
