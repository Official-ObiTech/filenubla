<template>
  <div>
 <div>
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
 </div>

  <div>
      <UButton icon="i-heroicons-magnifying-glass-20-solid" @click="isOpen = true" />

      <UModal v-model="isOpen" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                Modal
              </h3>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
            </div>

          <Placeholder class="h-32" />
        </UCard>
      </UModal>
    </div>
    
  </div>
  </template>
  
  <script setup lang="ts">
  const q = ref('')
  const isOpen = ref(false)
  </script>
  
  