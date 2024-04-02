<template>
  <div
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid md:grid-cols-2 lg:grid-cols-2 lg:items-center"
  >
    <div class="">
      <h2
        class="text-3xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter"
      >
        <div class="">
          <p>
            The Next Generation of <br />
            <span class="text-blue-500">File</span>Nubla
          </p>
        </div>
      </h2>

      <p class="mt-6 text-lg text-gray-600 dark:text-gray-300">
        A collection of high-quality, unstyled components for creating <br />
        beautiful file using Vue and TypeScript
      </p>
      <div class="flex flex-wrap gap-x-3 gap-y-1.5 mt-8">
        <UButton
          icon="i-heroicons-rocket-launch"
          class="disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 inline-flex items-center"
        >
          <NuxtLink to="/auth">Get Started </NuxtLink>
        </UButton>

        <UButton
          icon="i-heroicons-hand-thumb-up"
          label="Support us"
          class="disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800/50 inline-flex items-center"
        />
      </div>
    </div>

    <div class="items-center justify-between mt-32">
      <img src="../../assets/cloud.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
