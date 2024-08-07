<script lang="ts" setup>
import type { NavLink } from "~/types";

const props = defineProps<{
  label: string;
  icon?: string;
  to?: string;
  links: NavLink[];
}>();
const route = useRoute();
const isOpen = ref(false);
watchEffect(() => {
  if (!props.to) return;
  isOpen.value = route.path.includes(props.to);
});
</script>
<template>
  <left-nav-collapse :label="label" :icon="icon" v-model="isOpen">
    <div class="ml-3">
      <template v-for="link in links" :key="link.label">
        <left-nav-menu-item
          class="text-sm py-2"
          :icon="link.icon"
          :label="link.label"
          :to="link.to"
        ></left-nav-menu-item>
      </template>
    </div>
  </left-nav-collapse>
</template>
