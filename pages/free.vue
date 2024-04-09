<script lang="ts" setup>
import { useAuth } from "@nuxtjs/kinde/dist/runtime/composables";

const auth = useAuth();
</script>

<template>
  <h1>You're free</h1>
  {{ auth }}
  <div>
    {{ loggedIn }}
    {{ user }}
  </div>
</template>

<style></style>
