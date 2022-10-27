<template>
  <div class="card-title text-center border-bottom">
    <h2 class="p-3">Login</h2>
  </div>
  <div class="card-body">
    <form>
      <div class="form-group mb-2">
        <label for="emaillogin">
          <input
            v-model="form.email"
            type="email"
            id="emaillogin"
            class="form-control form-control-lg"
            required
          />
          Email address
        </label>
      </div>
      <div class="form-group mb-4">
        <label for="passwordlogin">
          <input
            v-model="form.password"
            type="password"
            id="passwordlogin"
            class="form-control form-control-lg"
            required
          />
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
<script lang="ts">
import { defineComponent, reactive } from 'vue';
// import { RouterLink } from 'vue-router';
// import HelloWorld from "./components/HelloWorld.vue";
export default defineComponent({
  setup() {
    const form = reactive({
      email: '',
      password: '',
    });

    const onSubmit = () => {
      ///    userStore.login(form.username, form.password);
      console.log(form.email, form.password);
    //  form.email = "";
    //  form.password = "";
    };

    //    return { form, userStore, onSubmit };
    return { form, onSubmit };
  },
});
</script>
