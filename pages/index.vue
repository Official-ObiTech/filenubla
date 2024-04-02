<template>
  <div class="">
    <div class="py-24 sm:py-32" orientation="horizontal">
      <dashborad-hero />
    </div>

    <div
      class="py-24 sm:py-32 mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl gap-16 sm:gap-y-24 flex flex-col"
    >
      <dashborad-hero2 />
      <dashborad-cards />
    </div>

    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 gap-16 max-w-7xl sm:gap-y-24 flex flex-col py-24 sm:py-32 !pt-0"
    >
      <dashborad-supporter />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
