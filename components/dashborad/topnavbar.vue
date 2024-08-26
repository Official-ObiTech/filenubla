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

        
           
        <div class="flex items-center justify-end lg:flex-1 gap-36">
          <div class="">
            <search-field />
          </div>

         <div class="gap-6 flex items-center">
          <div class="relative inline-flex">
            <DashboradColorModeSwitch />
          </div>

            <div class="lg:block hidden ">
              <avatar />
            </div>

              <mobile-menu />
            </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
    
</script>
