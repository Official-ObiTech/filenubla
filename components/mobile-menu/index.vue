<script setup lang="ts">
const isOpen = ref(false);
    
</script>

<template>
      <div class="lg:hidden block">
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
   
        <div > 
          <div class="no-scrollbar overflow-y-auto h-80 ">
            <dashborad-side-bar />
          </div>
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
</template>
