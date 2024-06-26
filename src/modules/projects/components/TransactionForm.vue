<script setup lang="ts">
import SimpleCard from '@/modules/common/components/SimpleCard.vue';
</script>
<template>
  <simple-card class="grid-cols-1">
    <template v-slot:title
      >Filtrar Transacciones
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text uppercase font-bold me-3">Buscar Transacciones Duplicadas</span>
          <input type="checkbox" class="toggle" checked="checked" />
        </label>
      </div>
    </template>
    <div class="grid md:grid-cols-2 gap-2">
      <label class="input input-bordered flex items-center gap-2">
        <input type="checkbox" checked class="checkbox checkbox-info" />
        Fecha inicial
        <input type="date" class="grow text-center" value="2024-06-18" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <input type="checkbox" checked class="checkbox checkbox-info" />
        Fecha final
        <input type="date" class="grow text-center" value="2024-06-25" />
      </label>
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text uppercase font-bold">Proveedor</span>
        </div>
        <select class="select select-bordered">
          <option disabled selected>Seleccionar</option>
          <option>Todos</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </label>
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text uppercase font-bold">MVNO</span>
        </div>
        <select class="select select-bordered">
          <option disabled selected>Seleccionar</option>
          <option>Todos</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </label>
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text uppercase font-bold">Grupo de Conciliación</span>
        </div>
        <select class="select select-bordered">
          <option disabled selected>Seleccionar</option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </label>
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text uppercase font-bold">Estatus Conciliación Del Proveedor</span>
        </div>
        <select class="select select-bordered">
          <option disabled selected>Seleccionar</option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </label>
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text uppercase font-bold">Corte Proveedor</span>
        </div>
        <select class="select select-bordered">
          <option disabled selected>Seleccionar</option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </label>
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text uppercase font-bold">Corte MVNO</span>
        </div>
        <select class="select select-bordered">
          <option disabled selected>Seleccionar</option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </label>
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text uppercase font-bold">Subscriber Id</span>
        </div>
        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
      </label>
      <label class="form-control">
        <div class="label">
          <span class="label-text uppercase font-bold">Order Id('s)</span>
        </div>
        <textarea class="textarea textarea-bordered h-24"></textarea>
      </label>
    </div>
    <div class="grid gap-2">
      <button class="btn btn-block btn-info text-white">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              data-darkreader-inline-stroke=""
              style="--darkreader-inline-stroke: #ffffff"
            ></path>
          </g>
        </svg>
        Buscar
      </button>
      <button class="btn btn-block">Reestablecer filtros</button>
    </div>
  </simple-card>
</template>
