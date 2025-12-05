<template>
  <UApp>
    <UHeader title="Poker Planning" />

    <UContainer>
      <UMain>
        <NuxtPage />
      </UMain>
    </UContainer>
  </UApp>
</template>

<script setup lang="ts">
const { username } = storeToRefs(useUserStore());
</script>
