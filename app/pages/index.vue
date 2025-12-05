<template>
  <div
    class="min-h-[calc(100vh-var(--ui-header-height))] flex items-center justify-center"
  >
    <div class="flex gap-8 flex-col md:flex-row">
      <div class="flex-3">
        <h1 class="text-6xl font-black">Scrum Poker for agile teams</h1>
        <span class="mt-4 block"
          >100% free until the end of time.<br />
          ...Yes, even during the zombie apocalypse.<span class="text-4xl"
            >🧟</span
          ></span
        >
        <div class="flex mt-6">
          <CreateRoom></CreateRoom>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
