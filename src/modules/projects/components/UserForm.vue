<script setup lang="ts">
import { useUserForm } from '@/stores/useUserForm';
import { storeToRefs } from 'pinia';

const userStore = useUserForm();

const { formUser } = storeToRefs(userStore);
defineEmits([
  'update:role',
  'update:username',
  'update:name',
  'update:phone',
  'update:email',
  'close',
]);
/*
defineProps({
  role: { type: String, default: 'Star Wars' },
  username: { type: String, default: '' },
  name: { type: String, default: '' },
  phone: { type: String, default: '' },
  email: { type: String, default: '' },
});*/
</script>

<template>
  <form method="dialog" @submit.prevent="userStore.saveUser">
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Role</span>
      </div>
      <select v-model="formUser.role" class="select select-bordered">
        <option disabled selected>Seleccionar</option>

        <option value="1">Operativo</option>
        <option value="2">Provedor</option>
        <option value="3">MVNO</option>
        <option value="4">ALTAN</option>
      </select>
    </label>

    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Username</span>
      </div>
      <input
        v-model="formUser.username"
        type="text"
        placeholder="Escribe tu Username"
        class="input input-bordered w-full"
      />
    </label>
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Nombre</span>
      </div>
      <input
        v-model="formUser.name"
        type="text"
        placeholder="Escribe tu Nombre"
        class="input input-bordered w-full"
      />
    </label>
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Teléfono</span>
      </div>
      <input
        v-model="formUser.phone"
        type="text"
        placeholder="Escribe tu Teléfono"
        class="input input-bordered w-full"
      />
    </label>
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Correo</span>
      </div>
      <input
        v-model="formUser.email"
        type="text"
        placeholder="Escribe tu Correo"
        class="input input-bordered w-full"
      />
    </label>
    <!-- if there is a button in form, it will close the modal -->
    <div class="mt-4 flex justify-end">
      <button class="btn me-4" @click="$emit('close')">Cerrar</button>
      <button type="submit" class="btn btn-primary">Aceptar</button>
    </div>
  </form>
</template>
