<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <h2 class="text-lg font-bold mt-4 p-5">Navegación</h2>

  <ul class="menu bg-base-400 rounded-box w-56 p-5">
    <li class="py-2">
      <RouterLink to="/" class="text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Data Table
      </RouterLink>
    </li>
    <li class="py-2">
      <details open>
        <summary class="text-lg">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
                data-darkreader-inline-stroke=""
                style="--darkreader-inline-stroke: #d8f4ff"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="2"
                stroke="#1C274C"
                stroke-width="1.5"
                data-darkreader-inline-stroke=""
                style="--darkreader-inline-stroke: #d8f4ff"
              ></circle>
              <path
                d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
                data-darkreader-inline-stroke=""
                style="--darkreader-inline-stroke: #d8f4ff"
              ></path>
            </g>
          </svg>
          Catálogos
        </summary>
        <ul>
          <li>
            <RouterLink to="/users" class="text-lg">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-darkreader-inline-stroke=""
                    style="--darkreader-inline-stroke: #ffffff"
                  ></path>
                </g>
              </svg>
              Usuarios
            </RouterLink>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</template>
