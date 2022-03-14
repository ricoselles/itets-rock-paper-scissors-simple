<template>
  <input
    v-model="playerName"
    class="
      focus:ring-indigo-500 focus:border-indigo-500
      block
      w-full
      shadow-sm
      border border-gray-300
      rounded-md
      px-4
      py-2
      max-w-xs
      text-center
    "
  />

  <template v-if="playerName">
    <div class="grid grid-cols-3 gap-8" v-if="!gameResult">
      <button
        v-for="{ icon, shape } of [
          { icon: '🧗', shape: 'rock' },
          { icon: '🧻', shape: 'paper' },
          { icon: '✂️', shape: 'scissors' },
        ]"
        type="button"
        class="
          px-2
          py-8
          flex
          justify-center
          align-center
          rounded-md
          text-9xl
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
          disabled:opacity-50 disabled:cursor-not-allowed
        "
        @click="play(shape)"
      >
        {{ icon }}
      </button>
    </div>
    <template v-else>
      <pre class="mb-4">{{ gameResult }}</pre>
      <Button type="button" @click="reset">Try again</Button>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useClient } from '../composables/client';
import Button from './Button.vue';

const playerName = ref('Player 1');
const gameResult = ref(null);

const play = async (shape) => {
  gameResult.value = await useClient().play(playerName.value, shape);
};

const reset = () => {
  gameResult.value = null;
};
</script>
