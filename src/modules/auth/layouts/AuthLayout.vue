<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
