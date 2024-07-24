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
  <div class="w-full relative">
    <div
      id="Header"
      class="sticky top-0 z-10 flex items-center mx-auto px-4 justify-between gap-4 h-[4rem] lg:px-8  sm:px-8 bg-slate-50 bg-blur-3xl"
    >
      <div class="flex items-center lg:flex-1 gap-1.5">
        <NuxtLink
          class="flex font-bold text-xl items-end dark:text-white text-gray-900 cursor-pointer"
          to="/"
        >
          <span> <span class="text-primary">File</span>Nubla </span>
        </NuxtLink>
      </div>
    </div>
    <div class="flex grid-rows-2 grid-flow-col gap-4 bg-slate-50">
      <dashborad-side-bar class="hidden lg:block rounded-r-2xl relative w-full lg:w-2/12" />



      <div class="bg-white shadow rounded w-10/12 mx-auto h-screen scroll-y gap-y-4">
        <div class="text-bold text-xl text-center">Welcome to Arsenal</div>
        <div class="items-center justify-center flex text-center">
          <UInput
            icon="i-heroicons-magnifying-glass-20-solid"
            size="md"
            color="gray"
            :trailing="false"
            placeholder="Search..."
            class="w-3/5"
            :ui="{ rounded: 'rounded-full' }"
          />
        </div>
        <!-- <NuxtLink to="/api/logout" external> Sign out </NuxtLink> -->
      </div>
    </div>
  </div>
</template>

