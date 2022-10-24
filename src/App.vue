<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
<template>
  <div class="main-bg">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="card shadow">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
