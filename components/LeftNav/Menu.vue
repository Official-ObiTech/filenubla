<script lang="ts" setup>
import type { NavLink } from "~/types";

const props = defineProps<{
  links: NavLink[];
}>();
</script>
<template>
  <template v-for="(link, i) in links" :key="i">
    <left-nav-menu-item-group
      v-if="link.links"
      :label="link.label"
      :icon="link.icon"
      :to="link.to"
      :links="link.links"
    ></left-nav-menu-item-group>

    <left-nav-menu-item
      v-else
      class="py-2.5"
      :label="link.label"
      :icon="link.icon"
      :to="link.to"
    ></left-nav-menu-item>
  </template>
</template>
