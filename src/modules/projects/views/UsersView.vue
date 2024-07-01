<script setup lang="ts">
import SimpleCard from '@/modules/common/components/SimpleCard.vue';
import SimpleModal from '@/modules/common/components/SimpleModal.vue';
import UserForm from '@/modules/projects/components/UserForm.vue';
import { useTitleStore } from '@/stores/titleStore';
import { ref } from 'vue';
import type { User, UserBackend } from '../interfaces/user';

const titleStore = useTitleStore();
titleStore.setTitle('Usuarios');

const formUser = ref<User>({
  role: '',
  username: '',
  name: '',
  phone: '',
  email: '',
});

const open = ref(false);
const close = () => (open.value = false);
const users = ref<UserBackend[]>([]);

//fetch users from api

try {
  fetch('http://localhost:8080/users/all/?rand' + new Date())
    .then((response) => response.json())
    .then((data) => {
      users.value = data;
    });
} catch (error) {
  console.log(error);
}
</script>

<template>
  <simple-card class="mt-4">
    <template v-slot:title> </template>
    <div>
      <button class="btn btn-primary" @click="open = true">Agregar usuario</button>
    </div>

    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Descripción</th>
            <th>Estatus</th>
            <th>Fecha de Creación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->

          <tr v-for="{ id, username, name, role, idCatStatus, createdAt } in users" :key="id">
            <th>{{ id }}</th>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ username }}</div>
                </div>
              </div>
            </td>
            <td>
              {{ name }}
              <br />
              <span class="badge badge-ghost badge-sm">
                {{
                  role == 1 ? 'Operative' : role == 2 ? 'Provider' : role == 3 ? 'MVNO' : 'Altan'
                }}</span
              >
            </td>
            <td>{{ role }}</td>
            <th>
              <button class="btn btn-ghost btn-xs">Partner Financiero</button>
            </th>
            <td>
              <!--  1 = Activo, 2 = Inactivo, 3 = Reset -->
              {{ idCatStatus == 1 ? 'Activo' : idCatStatus == 2 ? 'Inactivo' : 'Reset' }}
            </td>
            <td>{{ createdAt }}</td>
            <td>{{ createdAt }}</td>
            <td>
              <div class="flex gap-2">
                <button class="btn">Editar</button>
                <button class="btn btn-error">Eliminar</button>
              </div>
            </td>
          </tr>
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>
  </simple-card>

  <simple-modal :open="open">
    <user-form
      v-model:role="formUser.role"
      v-model:username="formUser.username"
      v-model:name="formUser.name"
      v-model:phone="formUser.phone"
      v-model:email="formUser.email"
      @close="close"
    ></user-form>
  </simple-modal>
</template>
