<script setup lang="ts">
import Player from './components/Player.vue';
import Play from './components/Play.vue';
import Title from './components/Title.vue';
import { ref } from 'vue';

const playerName = ref(null);

function startGame(value: string) {
  playerName.value = value;
}
</script>

<template>
  <div class="min-h-full flex flex-col items-center py-12 px-4 space-y-16">
    <Player @play="startGame" />
    <Title> Rock / Paper / Scissors </Title>
    <Play v-if="playerName" :playerName="playerName" />
  </div>
</template>
