<template>
  <div class="card-title text-center border-bottom">
    <h2 class="p-3">Sign Up</h2>
  </div>
  <div class="card-body">
    <form>
      <div class="form-group mb-2">
        <label for="fullName">
          <input
            v-model="form.fullname"
            type="text"
            id="fullName"
            class="form-control form-control-lg"
            required
          />
          Full Name
        </label>
      </div>
      <div class="form-group mb-2">
        <label for="email">
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="form-control form-control-lg"
            required
          />
          Email address
        </label>
      </div>
      <div class="form-group mb-4" for>
        <label for="password">
          <input
            v-model="form.password"
            type="password"
            id="password"
            class="form-control form-control-lg"
            required
          />
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
<script lang="ts">
import { defineComponent, reactive } from 'vue';
// import { RouterLink } from 'vue-router';
// import HelloWorld from "./components/HelloWorld.vue";
export default defineComponent({
  setup() {
    const form = reactive({
      fullname: '',
      email: '',
      password: '',
    });

    const onSubmit = () => {
      ///    userStore.login(form.username, form.password);
      console.log(form.fullname, form.email, form.password);
      //  form.email = "";
      //  form.password = "";
    };

    //    return { form, userStore, onSubmit };
    return { form, onSubmit };
  },
});
</script>
