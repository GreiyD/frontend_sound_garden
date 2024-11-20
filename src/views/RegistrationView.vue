<template>
  <div class="row d-flex justify-content-center align-items-center min-vh-100">
    <div class="row justify-content-center">
      <!-- Карточка с формой -->
      <div class="card col-4 rounded-0 rounded-start">
        <div class="card-body">
          <Logo />
          <h2 class="card-title mb-3 text-center">Registration</h2>
          <RegistrationForm />
        </div>
      </div>

      <!--    Боковой элемент-->
      <div class="col-3 d-flex flex-column justify-content-center align-items-center gradient-bg text-white p-3 rounded-0 rounded-end">
        <h1 class="text-center mb-3">Welcome back!</h1>
        <p class="text-center mb-1">
          If you already have an account please log in from
          <router-link to="/login" class="link">
            here
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationForm from "../components/auth/RegistrationForm.vue";
import Logo from "../components/Logo.vue";

export default {
  name: 'RegistrationView',
  components: {
    RegistrationForm,
    Logo,
  },
};
</script>