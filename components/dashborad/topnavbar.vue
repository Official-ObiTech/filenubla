<template>
  <div>
    <header
      class="top-0 z-50 border-b border-gray-200 dark:border-gray-800 -mb-px"
    >
      <div
        id="Header"
        class="flex items-center mx-auto px-4 justify-between gap-4 h-[4rem] lg:px-8 max-w-7xl sm:px-8"
      >
        <div class="flex items-center lg:flex-1 gap-1.5">
          <NuxtLink
            class="flex font-bold text-xl items-end dark:text-white text-gray-900 cursor-pointer"
            to="/"
          >
            <span> <span class="text-primary">File</span>Nubla </span>
          </NuxtLink>
        </div>

        <search-field />
           
        <div class="flex items-center justify-end lg:flex-1 gap-1">

          <div class="relative inline-flex">
            <DashboradColorModeSwitch />
          </div>

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
          <!-- <div class="lg:hidden block">
            <dashborad-side-bar />
          </div> -->

          <UButton
        icon="i-heroicons-queue-list-16-solid"
        size="sm"
        class="text-gray-700 dark:text-gray-200 font-medium gap-x-1 hover:bg-gray-50"  
        variant="ghost"
        @click="isOpen = true"
    />

          <USlideover v-model="isOpen" prevent-close>
      <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              FileNubla
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>

        </template>

   
        <div> 
          <ul class="gap-x-8 items-center cursor-pointer sm:font-sm sm:space-y-2 h-80 ">
            <li class="relative">
                <NuxtLink to="" class="flex font-semibold items-center gap-1 text-sm hover:text-blue-500  select-none">
                    Documentation
                </NuxtLink>
            </li>

            <li class="relative">
                <NuxtLink to="" class="flex font-semibold items-center gap-1 text-sm hover:text-blue-500  select-none">
                    Releases
                </NuxtLink>
            </li>

            <li class="relative">
                <NuxtLink to="" class="flex font-semibold items-center gap-1 text-sm hover:text-blue-500  select-none">
                    Sponsors
                </NuxtLink>
            </li>

        </ul>
        <UButton
                class="lg:hidden block"
                v-if="!$auth.loggedIn"
                icon="i-heroicons-arrow-right-on-rectangle-20-solid"
                size="lg"
                color="primary"
                variant="soft"
                :trailing="false"
              >
            <LoginLink to="/api/login" external> Sign in </LoginLink></UButton
          >

        </div>
      </UCard>
    </USlideover>

        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
    
</script>
