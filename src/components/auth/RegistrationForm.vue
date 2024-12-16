<template>
  <form class="forms-sample" @submit.prevent="handleRegistration">
    <div class="mb-3">
      <InputField
          id="nickname"
          v-model="formData.nickname"
          label="Nickname"
          type="text"
          placeholder="Enter nickname"
          :error="errors.nickname"
      />
    </div>
    <div class="mb-3">
      <InputField
          id="email"
          v-model="formData.email"
          label="Email"
          type="email"
          placeholder="Enter email"
          :error="errors.email"
      />
    </div>
    <div class="mb-3">
      <InputField
          id="password"
          v-model="formData.password"
          label="Password"
          type="password"
          placeholder="Enter password"
          :error="errors.password"
      />
    </div>
    <div class="mb-3">
      <InputField
          id="confirmPassword"
          v-model="formData.confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          :error="errors.confirmPassword"
      />
    </div>
    <div class="row mt-4 mb-3">
      <div class="col-6">
        <SubmitButton @click="handleRegistration" label="Submit" />
      </div>
    </div>
  </form>
</template>

<script>
import InputField from '../InputField.vue';
import SubmitButton from '../SubmitButton.vue';
import {useToast} from "vue-toastification";
import { registerUser } from '../../api/users'
import {parseErrors} from '../../utils/validationErrorParser.js';

export default {
  name: "RegistrationForm",
  components: {
    InputField,
    SubmitButton,
  },
  data() {
    return {
      formData: {
        nickname: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {},
    };
  },
  methods: {
    async handleRegistration() {
      const toast = useToast();

      try {
        const response = await registerUser(this.formData);
        toast.success("Registration successful!");

        this.$router.push("/auth/login");
      } catch (error) {
        if (error.response && error.response.status === 400) {
          this.errors = parseErrors(error.response.data.errors);
          toast.error(error.response.data.message);
        } else {
          toast.error("Registration failed. Please try again.");
        }
      }
    },
  },
};
</script>