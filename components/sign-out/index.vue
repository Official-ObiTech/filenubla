<template>
      <UButton
            v-if="!$auth.loggedIn"
            icon="i-heroicons-arrow-right-on-rectangle-20-solid"
            size="lg"
            color="primary"
            variant="soft"
            :trailing="false"
            class="lg:block hidden"
          >
            <LoginLink to="/api/login" external> Sign Out </LoginLink></UButton
          >  
</template>

<script>

</script>

<style>

</style>