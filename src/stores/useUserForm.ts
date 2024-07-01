import type { User } from '@/modules/projects/interfaces/user';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserForm = defineStore('userForm', () => {
  const formUser = ref<User>({
    role: '',
    username: '',
    name: '',
    phone: '',
    email: '',
    idCatProvider: '',
    idCatMvno: '',
  });

  const saveUser = () => {
    console.log(formUser.value);

    const data = {
      role: formUser.value.role,
      username: formUser.value.username,
      name: formUser.value.name,
      phone: formUser.value.phone,
      email: formUser.value.email,
      idCatProvider: !formUser.value.idCatProvider ? null : formUser.value.idCatProvider,
      idCatMVNO: !formUser.value.idCatMvno ? null : formUser.value.idCatMvno,
    };
    console.log(data);
    //axios.post('http://localhost:8080/users/add/', data);
    //TODO call api to save user
  };

  return { formUser, saveUser };
});
