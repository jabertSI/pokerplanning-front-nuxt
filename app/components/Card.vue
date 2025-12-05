<template>
  <div @click="setWin">CLICK ICI POUR WIN</div>
  <div
    v-if="player"
    class="card"
    :class="{ votedCard: playerVoted, winCard: playerWin }"
    @click="setToto"
  >
    <div
      class="card2 flex flex-col items-center"
      :class="{ votedCard2: playerVoted, winCard2: playerWin }"
    >
      <div class="text-2xl w-full text-center">{{ player.name }}</div>
      <div class="text-5xl w-full text-center">{{ player.vote }}</div>
      <img
        class="w-full max-w-[150px] mt-2"
        src="https://api.dicebear.com/9.x/notionists/svg?seed=Jocelyn"
        alt="avatar"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  player: {
    name: string;
    vote?: string;
    voteStatus: string;
  };
  result?: number;
}>();

const { username } = storeToRefs(useUserStore());

const playerVoted = computed(() => {
  return props.player.voteStatus === VoteStatus.VOTED;
});

const playerWin = computed(() => {
  return props.player.vote === props.result;
});
</script>

<style scoped>
.card {
  border-radius: 20px;
  transition: all 0.3s;
}

.card2 {
  background-color: #1a1a1a;
  border-radius: 10px;
  transition: all 0.2s;
}

.winCard2 {
  transform: scale(0.98);
  border-radius: 20px;
}

.winCard {
  background-image: linear-gradient(163deg, #fcad03 0%, #f1cd80 100%);
  box-shadow: 0px 0px 30px 1px #cca349;
}

.votedCard {
  background-image: linear-gradient(163deg, white 0%, white 100%);
  border-radius: 20px;
  transition: all 0.3s;
}

.votedCard2 {
  transform: scale(0.98);
  border-radius: 20px;
  box-shadow: 0px 0px 30px 1px white;
}
</style>
