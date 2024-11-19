<template>
  <div class="row justify-content-center d-flex align-items-center min-vh-100">
<!--    <div class="col-8">-->
<!--      <LoginForm />-->
<!--    </div>-->
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/auth/LoginForm.vue';
export default {
  name: 'LoginView',
  components: {
    LoginForm,
  },
};
</script>