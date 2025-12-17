<template>
  <div
    v-if="!username"
    class="min-h-[calc(100vh-var(--ui-header-height))] flex items-center justify-center"
  >
    <FormUsername @usernameSet="initRoom"></FormUsername>
  </div>
  <div class="flex flex-wrap gap-5 items-center justify-center mt-4">
    <UButton
      @click="sendVote(1)"
      class="text-2xl text-center"
      color="neutral"
      size="sm"
      variant="solid"
      >1</UButton
    >
    <UButton
      @click="sendVote(2)"
      class="text-2xl text-center"
      color="neutral"
      size="sm"
      variant="solid"
      >2</UButton
    >
    <UButton
      @click="sendVote(3)"
      class="text-2xl text-center"
      color="neutral"
      size="sm"
      variant="solid"
      >3</UButton
    >
  </div>
  <div class="flex flex-wrap gap-5 items-center justify-center mt-4">
    <UButton
      @click="retrieveVote"
      class="text-2xl text-center"
      color="success"
      size="sm"
      variant="solid"
      >Reveal</UButton
    >
    <UButton
      @click="newVote"
      class="text-2xl text-center"
      color="warning"
      size="sm"
      variant="solid"
      >New vote</UButton
    >
  </div>
  <div class="flex flex-wrap gap-5 items-center justify-center mt-8">
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

function sendVote(vote) {
  room.sendVote(vote, route.params.id);
}

function retrieveVote() {
  room.retrieveVote(route.params.id);
}

function newVote() {
  room.newVote(route.params.id);
}

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
