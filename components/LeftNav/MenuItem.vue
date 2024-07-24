<script lang="ts" setup>
import { useLayoutsStore } from "~/stores/layout";
const props = defineProps<{
  icon?: string;
  label?: string;
  to?: string;
}>();

const layoutStore = useLayoutsStore();
const { toggleNavShow } = layoutStore;
</script>

<template>
  <u-link
    class=" w-full block text-left transition py mb-1 opacity-70 hover:opacity-100 px-4  text-xs"
    active-class="[&&]:opacity-100 bg-primary text-white"
    exact
    :to="to"
    @click="toggleNavShow(false)"
  >
    <div class="flex items-center gap-2">
      <u-icon class="text-xl" :name="icon ?? ''"></u-icon>
      {{ label }}
    </div>
  </u-link>
</template>
