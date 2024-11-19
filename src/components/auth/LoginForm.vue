<template>
  <div class="card col-4">
    <div class="card-body">
      <!--      <div>-->
      <!--        <img src="../assets/symfony.svg" class="logo" alt="logo" />-->
      <!--      </div>-->
      <h2 class="card-title mb-3 text-center">Login</h2>
      <form class="forms-sample">
        <div class="mb-3">
          <InputField id="email" label="Email" type="email" placeholder="Enter email" />
        </div>
        <div class="mb-3">
          <InputField id="password" label="Password" type="password" placeholder="Enter password" />
        </div>
        <div class="row justify-content-center mt-2 ">
          <SubmitButton label="Submit" />
        </div>
      </form>
    </div>
  </div>
  <div class="col-4 d-flex align-items-center justify-content-center bg-primary text-white p-3 rounded">
    <p class="text-center mb-0">
      Welcome! Please login to continue.
    </p>
  </div>
</template>

<script>
import InputField from '../InputField.vue';
import SubmitButton from '../SubmitButton.vue';
export default {
  name: 'LoginForm',
  components: {
    InputField,
    SubmitButton,
  }
}
</script>