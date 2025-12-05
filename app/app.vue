<template>
  <UApp>
    <UHeader title="Poker Planning">
      <template #right>
        {{ username }}
      </template>
    </UHeader>

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
