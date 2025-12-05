<template>
  <div
    v-if="!username"
    class="min-h-[calc(100vh-var(--ui-header-height))] flex items-center justify-center"
  >
    <FormUsername></FormUsername>
  </div>
  <div class="flex flex-wrap gap-5 items-center justify-center h-40">
    RESULT BUTTON
  </div>
  <div class="flex flex-wrap gap-5 items-center justify-center">
    <div v-for="player in players" :key="player" class="w-1/2 sm:w-1/5">
      <Card :player="player" :result="5"></Card>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "room",
});
const route = useRoute();
const router = useRouter();
const { isUuid } = useUuid();
const { username } = storeToRefs(useUserStore());

const players = ref([
  {
    name: "Jabert",
    vote: 5,
    voteStatus: VoteStatus.NOT_VOTED,
  },
  {
    name: "Adam",
    vote: 5,
    voteStatus: VoteStatus.NOT_VOTED,
  },
  {
    name: "Eric",
    vote: 2,
    voteStatus: VoteStatus.NOT_VOTED,
  },
]);

async function initRoom() {
  if (!isUuid(route.params.id)) {
    await navigateTo({ path: "/" });
  }
}

await initRoom();
// TODO: valider le format de l'uuid !
</script>
