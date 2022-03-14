<script setup lang="ts">
import Player from './components/Player.vue';
import Play from './components/Play.vue';
import Title from './components/Title.vue';
import Scores from './components/Scores.vue';
import { ref } from 'vue';

const playerName = ref(null);
const wins = ref(0);
const losses = ref(0);

function startGame(value: string) {
  playerName.value = value;
}

function gameFinished(isWinner: boolean) {
  isWinner ? wins.value++ : losses.value++;
}
</script>

<template>
  <div
    class="
      bg-gray-100
      min-h-full
      flex flex-col
      items-center
      py-12
      px-4
      space-y-16
    "
  >
    <Player @play="startGame" />
    <Title> Rock / Paper / Scissors </Title>
    <Play v-if="playerName" :playerName="playerName" @finish="gameFinished" />
    <Scores :wins="wins" :losses="losses" />
  </div>
</template>
