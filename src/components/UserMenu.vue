<template>
    <span v-if="nickname" class="fw-bold align-self-center me-2">{{ nickname }}</span>
    <div class="dropdown">
      <a class="nav-link" href="#" id="userMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <UserAvatar/>
      </a>
      <ul class="dropdown-menu dropdown" aria-labelledby="userMenu">
        <li><a class="dropdown-item" href="#">Действие</a></li>
        <li><a class="dropdown-item" href="#">Другое действие</a></li>
        <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" @click.prevent="handleLogout">Выйти</a></li>
      </ul>
    </div>
</template>

<script>
import UserAvatar from "./UserAvatar.vue";
import {logoutUser} from '../api/users'
import {useToast} from "vue-toastification";

export default {
  name: 'UserMenu',
  components: {
    UserAvatar
  },
  data() {
    return {
      nickname: null,
    };
  },
  created() {
    this.nickname = localStorage.getItem('nickname');
  },
  methods: {
    async handleLogout() {
      const toast = useToast();
      try {
        const response = await logoutUser();

        localStorage.removeItem('authToken');
        localStorage.removeItem('nickname');
        console.log(response);
        toast.success('Logout successful!');
        this.$router.push('/auth/login');
      } catch (error) {
        console.log(error);
        toast.error('Logout failed. Please try again.');
      }
    }
  }
}
</script>