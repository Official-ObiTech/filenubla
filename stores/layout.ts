import { defineStore } from "pinia";

export const useLayoutsStore = defineStore("LayoutsStore", () => {
  const navShow = ref(false);

  function toggleNavShow(value: any = null) {
    navShow.value = value == null ? !navShow.value : value;
  }
  return { toggleNavShow, navShow };
});
