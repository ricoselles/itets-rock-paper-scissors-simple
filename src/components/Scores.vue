<template>
  <div v-if="sortedPlayers?.length > 2" class="max-w-xl2 mt-5 mx-auto">
    <div class="text-center">
      <p class="mt-2 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
        You won {{ wins }} games and lost {{ losses }} games
      </p>
    </div>

    <div class="mt-16 pb-12 lg:mt-20 lg:pb-20">
      <div class="relative z-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative lg:grid lg:grid-cols-7">
            <div
              class="
                mx-auto
                max-w-md
                lg:mx-0
                lg:max-w-none
                lg:col-start-1
                lg:col-end-3
                lg:row-start-2
                lg:row-end-3
              "
            >
              <div
                class="
                  h-full
                  flex flex-col
                  rounded-lg
                  shadow-lg
                  lg:rounded-none lg:rounded-l-lg
                  relative
                "
              >
                <div
                  class="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-lg
                    border-2 border-slate-300
                  "
                  aria-hidden="true"
                />
                <div class="absolute inset-x-0 top-0 transform translate-y-px">
                  <div class="flex justify-center transform -translate-y-1/2">
                    <span
                      class="
                        inline-flex
                        rounded-full
                        bg-slate-300
                        px-4
                        py-1
                        text-sm
                        font-semibold
                        tracking-wider
                        uppercase
                        text-white
                      "
                    >
                      Second
                    </span>
                  </div>
                </div>
                <div class="flex-1 flex flex-col">
                  <div class="bg-white rounded-lg px-6 py-10">
                    <div>
                      <h3
                        class="text-center text-2xl font-medium text-gray-900"
                      >
                        {{ sortedPlayers[1].name }}
                      </h3>
                      <div class="mt-4 flex items-center justify-center">
                        <span
                          class="
                            px-3
                            flex
                            items-start
                            text-6xl
                            tracking-tight
                            text-gray-900
                          "
                        >
                          <span class="font-extrabold">
                            {{ sortedPlayers[1].score }}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                mt-10
                max-w-lg
                mx-auto
                lg:mt-0
                lg:max-w-none
                lg:mx-0
                lg:col-start-3
                lg:col-end-6
                lg:row-start-1
                lg:row-end-4
              "
            >
              <div class="relative z-10 rounded-lg shadow-xl">
                <div
                  class="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-lg
                    border-2 border-amber-300
                  "
                  aria-hidden="true"
                />
                <div class="absolute inset-x-0 top-0 transform translate-y-px">
                  <div class="flex justify-center transform -translate-y-1/2">
                    <span
                      class="
                        inline-flex
                        rounded-full
                        bg-amber-300
                        px-4
                        py-1
                        text-sm
                        font-semibold
                        tracking-wider
                        uppercase
                        text-white
                      "
                    >
                      First
                    </span>
                  </div>
                </div>
                <div class="bg-white rounded-lg rounded-t-lg px-6 pt-12 pb-10">
                  <div>
                    <h3
                      class="
                        text-center text-3xl
                        font-semibold
                        text-gray-900
                        sm:-mx-6
                      "
                    >
                      {{ sortedPlayers[0].name }}
                    </h3>
                    <div class="mt-4 flex items-center justify-center">
                      <span
                        class="
                          px-3
                          flex
                          items-start
                          text-6xl
                          tracking-tight
                          text-gray-900
                          sm:text-6xl
                        "
                      >
                        <span class="font-extrabold">
                          {{ sortedPlayers[0].score }}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                mt-10
                mx-auto
                max-w-md
                lg:m-0
                lg:max-w-none
                lg:col-start-6
                lg:col-end-8
                lg:row-start-2
                lg:row-end-3
              "
            >
              <div
                class="
                  h-full
                  flex flex-col
                  rounded-lg
                  shadow-lg
                  lg:rounded-none lg:rounded-r-lg
                  relative
                "
              >
                <div
                  class="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-lg
                    border-2 border-amber-900
                  "
                  aria-hidden="true"
                />
                <div class="absolute inset-x-0 top-0 transform translate-y-px">
                  <div class="flex justify-center transform -translate-y-1/2">
                    <span
                      class="
                        inline-flex
                        rounded-full
                        bg-amber-900
                        px-4
                        py-1
                        text-sm
                        font-semibold
                        tracking-wider
                        uppercase
                        text-white
                      "
                    >
                      Third
                    </span>
                  </div>
                </div>
                <div class="flex-1 flex flex-col">
                  <div class="bg-white rounded-lg px-6 py-10">
                    <div>
                      <h3
                        class="text-center text-2xl font-medium text-gray-900"
                      >
                        {{ sortedPlayers[2].name }}
                      </h3>
                      <div class="mt-4 flex items-center justify-center">
                        <span
                          class="
                            px-3
                            flex
                            items-start
                            text-6xl
                            tracking-tight
                            text-gray-900
                          "
                        >
                          <span class="font-extrabold">
                            {{ sortedPlayers[2].score }}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div
        v-for="{ name, score } in sortedPlayers.slice(3)"
        :key="name"
        class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
      >
        <dt class="text-sm font-medium text-gray-500 truncate">
          {{ name }}
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{ score }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { toRefs, watch, ref, computed } from 'vue';
import { useClient } from '../composables/client';
import Title from './Title.vue';

const props = defineProps<{ wins: number; losses: number }>();
const { wins, losses } = toRefs(props);
const players = ref(null);

const sortedPlayers = computed(() => {
  return players.value
    ?.filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);
});

watch(
  [wins, losses],
  async () => {
    players.value = await useClient().getPlayers();
  },
  { immediate: true }
);
</script>
