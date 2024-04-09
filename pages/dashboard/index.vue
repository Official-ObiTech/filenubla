<template>
    <div>
        <UContainer :ui="{body:'white'}">
        
            <div id="Header" class="flex items-center mx-auto px-4 justify-between gap-4 h-[4rem] lg:px-8 max-w-7xl sm:px-8 bg-slate-50 ">
                <div class="flex items-center lg:flex-1 gap-1.5">

                <NuxtLink class="flex font-bold text-xl items-end dark:text-white text-gray-900 cursor-pointer" to="/" >
                    <span>
                        <span class="text-primary">File</span>Nubla
                    </span>
                </NuxtLink>
            </div>

        </div>
        <div class="">
            <UButton
                icon="i-heroicons-solid-plus-sm"
                size="sm"
                color=""
                variant="solid"
                label="Button"
                :trailing="false"
            />
        </div>
            <div class="flex grid-rows-2 grid-flow-col gap-4  bg-slate-50">
            
                <div class="w-1/6">
                    <UVerticalNavigation :links="links" />

                </div>

                <div class="bg-white shadow rounded w-4/5 h-screen scroll-y gap-y-4">
                    <div class="text-bold text-xl text-center">Welcome to Arsenal</div>
                    <div class="items-center justify-center flex text-center">
                        <UInput
                            icon="i-heroicons-magnifying-glass-20-solid"
                            size="md"
                            color="gray"
                            :trailing="false"
                            placeholder="Search..."
                            class="w-3/5 "
                            :ui="{ rounded: 'rounded-full' }"
                        />
                    </div>

                </div>
           

            </div>
       
        </UContainer>
    </div>
</template>

<script setup lang="ts">

    const route = useRoute()

    const links = [{
        label: 'Home',
        icon: 'i-heroicons-home',
        to: ''
        },
        {
        label: 'My Storage',
        icon: 'i-heroicons-chart-bar',
        to: ``
        },
        {
        label: 'Computers',
        icon: 'i-heroicons-command-line',
        to: ''
        }
    ]

</script>


