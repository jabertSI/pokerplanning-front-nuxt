<template>
  <div
    v-if="player"
    class="card"
    :class="{
      votedCard: playerVoted && restultNotRetrieve,
      winCard: playerWin,
    }"
  >
    <div
      class="card2 flex flex-col items-center"
      :class="{
        votedCard2: playerVoted && restultNotRetrieve,
        winCard2: playerWin,
      }"
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
  if (!props.player.vote || !props.result) {
    return false;
  }
  return props.result.includes(props.player.vote);
});

const restultNotRetrieve = computed(() => {
  return !props.result;
});
</script>

<style scoped>
.card {
  background-image: linear-gradient(163deg, white 0%, white 100%);
  border-radius: 20px;
  transition:
    border-radius 0.3s,
    box-shadow 0.3s;
  box-shadow: 0 0 0 0 transparent; /* valeur initiale */
}

.card2 {
  background-color: #1a1a1a;
  border-radius: 10px;
  transition:
    transform 0.2s,
    border-radius 0.2s,
    box-shadow 0.2s;
  transform: scale(1); /* valeur initiale */
  box-shadow: 0 0 0 0 transparent; /* valeur initiale */
}

.winCard2 {
  transform: scale(0.98);
  border-radius: 20px;
  transition: all 0.3s;
}

.winCard {
  background-image: linear-gradient(163deg, #fcad03 0%, #f1cd80 100%);
  box-shadow: 0px 0px 30px 1px #cca349;
  transition: all 0.3s;
}

.votedCard {
  border-radius: 20px;
  transition: all 0.3s;
}

.votedCard2 {
  transform: scale(0.98);
  border-radius: 20px;
  box-shadow: 0px 0px 30px 1px white;
  transition: all 0.3s;
}
</style>
