<template>
  <UPageCard>
    <template #body>
      <div class="flex">
        <UFormField label="Username" size="xl" class="">
          <UInput
            v-model="usernameInput"
            :maxlength="maxLength"
            placeholder="Enter your username"
            class="w-full"
            color="neutral"
            :ui="{ trailing: 'pointer-events-none' }"
          >
            <template #trailing>
              <div
                id="character-count"
                class="text-xs text-muted tabular-nums"
                aria-live="polite"
                role="status"
              >
                {{ usernameInput?.length }}/{{ maxLength }}
              </div>
            </template>
          </UInput>
        </UFormField>
      </div>
      <div class="pt-3 flex justify-end">
        <UButton
          @click="setUsername"
          :disabled="!formValid"
          color="neutral"
          type="text"
          >Join room</UButton
        >
      </div>
    </template>
  </UPageCard>
</template>

<script setup lang="ts">
const maxLength = ref<number>(10);
const usernameInput = ref<string>("");

const { username } = storeToRefs(useUserStore());

const emit = defineEmits(["usernameSet"]);

function setUsername() {
  username.value = usernameInput.value;
  emit("usernameSet");
}

const formValid = computed(() => {
  return usernameInput.value.length >= 2 && usernameInput.value.length <= 10;
});
</script>

<style></style>
