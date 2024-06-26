<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import { useTitleStore } from '@/stores/titleStore';
import SideMenu from '../components/SideMenu.vue';

const titleStore = useTitleStore();
</script>

<template>
  <div class="flex flex-col">
    <!-- Top Menu -->
    <top-menu></top-menu>

    <main class="grid md:grid-cols-12 gap-4">
      <!-- Side Menu -->
      <side-menu class="md:col-span-2"></side-menu>
      <!-- Router View -->
      <main class="p-5 md:p-10 md:col-span-10">
        <div class="mb-5">
          <h3 class="text-2xl font-bold py-4">{{ titleStore.$state.title }}</h3>
          <hr />
          <div class="breadcrumbs text-sm">
            <ul>
              <li><a>Home</a></li>
              <li><a>Operaciones</a></li>
              <li>Api Gee</li>
            </ul>
          </div>
        </div>

        <router-view></router-view>
      </main>
    </main>
  </div>
</template>
