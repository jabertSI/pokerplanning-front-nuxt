<template>
  <UButton
    class="text-2xl text-center"
    @click="createRoom"
    color="neutral"
    type="text"
    size="xl"
    variant="solid"
    >New poker room</UButton
  >
</template>

<script setup lang="ts">
const router = useRouter();
const { generateUuid } = useUuid();

async function createRoom() {
  const roomUuid = generateUuid();
  await navigateTo({ name: "room", params: { id: generateUuid() } });
}
</script>

<style></style>
