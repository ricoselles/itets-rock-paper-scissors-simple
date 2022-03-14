<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="open = false"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block sm:p-0
        "
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <form
            @submit.prevent="doSave"
            class="
              relative
              inline-block
              align-bottom
              bg-white
              rounded-lg
              px-4
              pt-5
              pb-4
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6
            "
          >
            <div class="mt-3 mb-8 text-center sm:mt-5">
              <DialogTitle
                as="h3"
                class="text-lg leading-6 font-medium text-gray-900"
              >
                Please enter your name
              </DialogTitle>
            </div>

            <div class="mt-1">
              <input
                placeholder="Your name"
                required=""
                v-model="input"
                class="
                  appearance-none
                  block
                  w-full
                  px-8
                  py-4
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                  text-center
                "
              />
            </div>

            <div class="mt-5 sm:mt-6">
              <Button type="submit" :disabled="!input"> Start New Game </Button>
            </div>
          </form>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <div
    v-if="playerName"
    class="
      max-w-3xl
      mx-auto
      px-4
      sm:px-6
      md:flex md:items-center md:justify-between md:space-x-5
      lg:max-w-7xl lg:px-8
    "
  >
    <div class="flex items-center space-x-5">
      <div class="flex-shrink-0">
        <div class="relative">
          <span
            class="
              inline-block
              h-14
              w-14
              rounded-full
              overflow-hidden
              bg-gray-100
            "
          >
            <svg
              class="h-full w-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>
          <span
            class="absolute inset-0 shadow-inner rounded-full"
            aria-hidden="true"
          />
        </div>
      </div>
      <div>
        <h1 class="text-2xl font-bold text-gray-900">{{ playerName }}</h1>
      </div>
    </div>
    <div
      class="
        mt-6
        flex flex-col-reverse
        justify-stretch
        space-y-4 space-y-reverse
        sm:flex-row-reverse
        sm:justify-end
        sm:space-x-reverse
        sm:space-y-0
        sm:space-x-3
        md:mt-0 md:flex-row md:space-x-3
      "
    >
      <Button
        type="button"
        @click="open = true"
        class="
          inline-flex
          items-center
          justify-center
          px-4
          py-2
          border border-gray-300
          shadow-sm
          text-sm
          font-medium
          rounded-md
          text-gray-700
          bg-white
          hover:bg-gray-50
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-offset-gray-100
          focus:ring-blue-500
        "
      >
        Edit
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { CheckIcon } from '@heroicons/vue/outline';
import { useStorage } from '@vueuse/core';
import Button from './Button.vue';

const emit = defineEmits<{ (e: 'play', playerName: string): void }>();

const input = useStorage('playerName', null);
const open = ref(false);
const playerName = ref(null);

function doSave() {
  playerName.value = input.value;
  emit('play', playerName.value);
  open.value = false;
}

onMounted(() => {
  if (input.value) {
    playerName.value = input.value;
    emit('play', playerName.value);
  } else {
    open.value = true;
  }
});
</script>
