<template>
    <UInput
      v-model="q"
      name="q"
      placeholder="Search..."
      icon="i-heroicons-magnifying-glass-20-solid"
      autocomplete="off"
       :ui="{ icon: { trailing: { pointer: ' '}}, rounded: 'rounded-full' , base: 'lg:w-[40em]' }"
    >
      <template #trailing>
        <UButton
          v-show="q !== ''"
          color="gray"
          variant="link"
          icon="i-heroicons-x-mark-20-solid"
          :padded="false"
          @click="q = ''"
        />
      </template>
    </UInput>
  </template>
  
  <script setup lang="ts">
  const q = ref('')
  </script>
  
  