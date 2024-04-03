<template>
    <div>
        <header class="top-0 z-50 border-b border-gray-200 dark:border-gray-800 -mb-px">
            <div id="Header" class="flex items-center mx-auto px-4 justify-between gap-4 h-[4rem] lg:px-8 max-w-7xl sm:px-8">
                <div class="flex items-center lg:flex-1 gap-1.5">

                    <NuxtLink class="flex font-bold text-xl items-end dark:text-white text-gray-900 cursor-pointer" to="/" >
                        <span>
                            <span class="text-blue-500">File</span>Nubla
                        </span>
                    </NuxtLink>
                </div>

                <ul class="lg:flex hidden gap-x-8 items-center cursor-pointer">
                    <li class="relative">
                        <NuxtLink to="" class="flex font-semibold items-center gap-1 text-sm hover:text-blue-500">
                            Documentation
                        </NuxtLink>
                    </li>

                    <li class="relative">
                        <NuxtLink to="" class="flex font-semibold items-center gap-1 text-sm hover:text-blue-500">
                            Releases
                        </NuxtLink>
                    </li>

                    <li class="relative">
                        <NuxtLink to="" class="flex font-semibold items-center gap-1 text-sm hover:text-blue-500">
                            Sponsors
                        </NuxtLink>
                    </li>

                </ul>

                <div class="flex items-center justify-end lg:flex-1 gap-1">
               
                    <div class="relative inline-flex">
                        <UButton
                            icon="i-heroicons-magnifying-glass"
                            size="sm"
                            class="text-gray-700 dark:text-gray-200 font-medium gap-x-1 hover:bg-gray-50"
                            variant="ghost"
                        />
                    </div>

                    <div class="relative inline-flex">
                      <DashboradColorModeSwitch />
                    </div>


                    <div class="relative inline-flex">
                        <UButton
                            icon="i-heroicons-user-group"
                            size="sm"
                            class="text-gray-700 dark:text-gray-200 font-medium gap-x-1 hover:bg-gray-50"  
                            variant="ghost"
                        />
                    </div>

                    <div class="relative inline-flex lg:hidden">
                        <DashboradNavSide />
                    </div>
                    
                </div>
            </div>
        </header>

    </div>
</template>

<script setup lang="ts">

</script>

