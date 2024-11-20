<template>
  <form class="forms-sample">
    <div class="mb-3">
      <InputField id="name" label="Name" type="text" placeholder="Enter name"/>
    </div>
    <div class="mb-3">
      <InputField id="email" label="Email" type="email" placeholder="Enter email"/>
    </div>
    <div class="mb-3">
      <InputField id="password" label="Password" type="password" placeholder="Enter password"/>
    </div>
    <div class="mb-3">
      <InputField id="password_confirmation" label="Confirm Password" type="password" placeholder="Confirm your password"
      />
    </div>
    <div class="row mt-4 mb-3">
      <div class="col-6">
        <SubmitButton label="Submit"/>
      </div>
    </div>
  </form>
</template>

<script>
import InputField from '../InputField.vue';
import SubmitButton from '../SubmitButton.vue';

export default {
  name: 'RegistrationForm',
  components: {
    InputField,
    SubmitButton,
  }
}
</script>