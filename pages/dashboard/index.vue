<script setup lang="ts">
definePageMeta({
  // middleware: function (to, from) {
  //   const auth = useAuth();
  //   console.log({ auth });
  //   if (!auth.loggedIn) {
  //     return navigateTo("/");
  //   }
  // },
});

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="h-screen bg-slate-100/50 mx-auto lg:px-4 dark:bg-gray-900/10">
    <div
      class="top-0 left-0 right-0 sticky bg-background/75 backdrop-blur z-50"
    >
      <dashborad-topnavbar />
    </div>
    <div class="lg:grid grid-cols-6 grid-flow-col gap-4 px-3 md:px-5">
      <div id="first-div" class=" ">
        <add-button />

        <div class="no-scrollbar overflow-y-auto h-96 lg:block hidden">
          <dashborad-side-bar />
        </div>
      </div>

      <div id="second-div " class="col-span-5 mt-2 rounded-xl lg:pb-0 pb-6">
        <nuxt-page />
      </div>
    </div>
  </div>
</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
