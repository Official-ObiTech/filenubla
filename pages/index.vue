<template>
  <div class="container bg-slate-100/50 dark:bg-slate-800 lg:px-4">
    <div class="top-0 left-0 right-0 sticky bg-background/75 backdrop-blur z-50 ">
      <onboarding-navTop />
    </div>


    <div class="py-0 sm:py-32" orientation="horizontal">
      <dashborad-hero />
    </div>

    <div
      class="sm:py-20 mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl gap-16 sm:gap-y-20 flex flex-col py-0"
    >
      <dashborad-hero2 />
      <dashborad-cards />
    </div>

    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 gap-16 max-w-7xl sm:gap-y-24 flex flex-col py-20 mt-4 sm:py-32 !pt-0"
    >
      <dashborad-supporter />
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 left-0 right-0 bottom-0 ">
      <dashborad-footer />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
