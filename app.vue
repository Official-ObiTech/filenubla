<template>
   <div>
    <DashboradNavTop />
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage /> 
    </NuxtLayout>

    <div class="border-t border-gray-200 dark:border-gray-800">
      <DashboradFooter />
    </div>
 
  </div>
</template>

<script lang="ts" setup></script>

