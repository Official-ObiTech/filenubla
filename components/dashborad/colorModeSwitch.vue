<template>
    <div>
        <ClientOnly >
            <template #failback>
                <div class="h-6 w-6"></div>
            </template>

            <UButton 
               :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid' "
               color="gray" 
               variant="ghost"
               aria-label="Theme"
               @click="isDark =  !isDark"
            />

        </ClientOnly>

    </div>
</template>

<script setup lang="ts">
    const colorMode = useColorMode();
    const isDark = computed({
        get() {
            return colorMode.value === 'dark';
        },

        set() {
            colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
        }
    })

</script>

