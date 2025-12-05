<template>
    <div class="min-h-[calc(100vh-var(--ui-header-height))] flex items-center justify-center">
      <FormUsername v-if="!username"></FormUsername>
    </div>
</template>

<script setup lang="ts">
const { username } = storeToRefs(useUserStore());
</script>

<style></style>
