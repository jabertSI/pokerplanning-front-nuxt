<template>
  Poker Planning
  <br>
  Hi {{username}} !
  <FormUsername v-if="!username"></FormUsername>
</template>

<script setup lang="ts">
const { username } = storeToRefs(useUserStore());
</script>

<style></style>
