export const useUserStore = defineStore(
  "user",
  () => {
    const username = ref<string | null>(null);
    const vote = ref<number | null>(null);

    return { username, vote };
  },
  {
    persist: {
      omit: ["vote", "roomUuid"],
    },
  },
);
