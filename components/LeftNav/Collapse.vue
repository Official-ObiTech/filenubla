r<script lang="ts" setup>
const props = defineProps<{
  label: string;
  icon?: string;
  modelValue: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [];
}>();
const isOpen = useModel(props, "modelValue", emit);

const content = ref<HTMLDivElement>();

watchEffect(() => {
  const scrollHeight = content.value?.scrollHeight;

  if (isOpen.value && !!scrollHeight) {
    content.value?.style.setProperty("--collapse-height", `${scrollHeight}px`);
    return;
  }
  content.value?.style.removeProperty("--collapse-height");
});

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>
<template>
  <div >
    <button
      class="w-full flex items-center transition opacity-70 hover:opacity-100 pt-2 pb-1.5 px-4 rounded-lg text-xs "
      @click="toggle"
    >
     <u-icon
        class="transition"
        :class="{ 'rotate-180': isOpen }"
        name="i-material-symbols-arrow-drop-down"
      />
      <div class="w-full flex items-center gap-2">
        <u-icon class="text-xl" :name="icon ?? ''" ></u-icon>
        {{ label }}
      </div>
     
    </button>
    <!-- <client-only> -->
    <div
      ref="content"
      class="mt-2 transition-[max-height] overflow-hidden collapse__content pl-6"
    >
      <slot> This is the content </slot>
    </div>
  </div>
  <!-- </client-only> -->
</template>

<style  scoped>
.collapse__content {
  max-height: var(--collapse-height, 0);
}
</style>
