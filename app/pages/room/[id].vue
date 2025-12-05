<template>
  <div
    v-if="!username"
    class="min-h-[calc(100vh-var(--ui-header-height))] flex items-center justify-center"
  >
    <FormUsername @usernameSet="initRoom"></FormUsername>
  </div>
  <div class="flex flex-wrap gap-5 items-center justify-center h-40">
    RESULT BUTTON
  </div>
  <div class="flex flex-wrap gap-5 items-center justify-center">
    RES : {{ result }}
    <div v-for="player in players" :key="player" class="w-1/2 sm:w-1/5">
      <Card :player="player" :result="result"></Card>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "room",
});
const room = useRoom();
const route = useRoute();
const router = useRouter();
const { isUuid } = useUuid();
const { username } = storeToRefs(useUserStore());
const { players, result } = toRefs(room);

onUnmounted(() => {
  console.log("Le composant est démonté !");
  room.socket.value.disconnect();
});

async function initRoom() {
  if (!isUuid(route.params.id)) {
    navigateTo({ path: "/" });
  } else {
    if (username.value) {
      room.joinRoom(route.params.id, username.value);
    }
  }
}

initRoom();
</script>
