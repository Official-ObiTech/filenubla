<template>
   <div>
    <div class="top-0 left-0 right-0 sticky bg-background/75 backdrop-blur ">
      <DashboradNavTop />
    </div>

    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage /> 
    </NuxtLayout>

    <div class="border-t border-gray-200 dark:border-gray-800 left-0 right-0 bottom-0">
      <DashboradFooter />
    </div>
 
  </div>
</template>

<script lang="ts" setup></script>

