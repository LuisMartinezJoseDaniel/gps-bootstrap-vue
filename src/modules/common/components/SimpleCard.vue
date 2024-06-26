<template>
  <div class="card bg-base-100 w-full shadow-xl">
    <div class="card-body">
      <h2 class="card-title flex justify-between items-center">
        <slot name="title"></slot>
      </h2>
      <slot></slot>
    </div>
  </div>
</template>
