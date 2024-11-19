<template>
  <div>
    <h1>Registration</h1>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/auth/LoginForm.vue';

export default {
  name: 'RegistrationView',
  components: {
    LoginForm,
  },
};
</script>