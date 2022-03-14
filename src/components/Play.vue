<template>
  <div class="grid grid-cols-3 gap-8 py-7" v-if="!gameResult">
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
        outline-none
        hover:ring-4 hover:ring-slate-500 hover:bg-slate-100
        focus:ring-4 focus:ring-indigo-500
        disabled:opacity-50 disabled:cursor-not-allowed
      "
      @click="play(shape)"
    >
      {{ icon }}
    </button>
  </div>
  <template v-else>
    <div class="max-w-7xl mx-auto px-4 py-2">
      <div class="text-center">
        <p
          class="
            mt-1
            text-4xl
            font-extrabold
            text-gray-900
            sm:text-5xl sm:tracking-tight
            lg:text-6xl
          "
        >
          {{ gameResult.isWinner ? 'You won' : 'You lost' }}
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          {{ gameResult.message }}
        </p>
      </div>
    </div>
    <Button class="max-w-xs" type="button" @click="reset"
      >Start New Game</Button
    >
  </template>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import { useClient } from '../composables/client';
import Button from './Button.vue';

const props = defineProps<{ playerName: string }>();
const emit = defineEmits<{ (e: 'finish', isWinner: boolean): void }>();

const { playerName } = toRefs(props);
const gameResult = ref(null);

async function play(shape) {
  const result = await useClient().play(playerName.value, shape);
  gameResult.value = result;
  emit('finish', result.isWinner);
}

function reset() {
  gameResult.value = null;
}
</script>
