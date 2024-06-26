<script setup lang="ts">
const props = defineProps<{
  open: boolean;
}>();
</script>

<template>
  <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle" :open="props.open">
    <div class="modal-box">
      <div class="">
        <slot></slot>
      </div>
    </div>
  </dialog>

  <div
    v-if="props.open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"
  ></div>
</template>
