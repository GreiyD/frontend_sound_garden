<template>
  <form class="forms-sample" @submit.prevent="handleRegistration">
    <div class="mb-3">
      <InputField
          id="name"
          v-model="formData.name"
          label="Name"
          type="text"
          placeholder="Enter name"
          :error="errors?.name?.[0] || ''"
      />
    </div>
    <div class="mb-3">
      <InputField
          id="email"
          v-model="formData.email"
          label="Email"
          type="email"
          placeholder="Enter email"
          :error="errors?.email?.[0] || ''"
      />
    </div>
    <div class="mb-3">
      <InputField
          id="password"
          v-model="formData.password"
          label="Password"
          type="password"
          placeholder="Enter password"
          :error="errors?.password?.[0] || ''"
      />
    </div>
    <div class="mb-3">
      <InputField
          id="confirmPassword"
          v-model="formData.confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          :error="errors?.confirmPassword?.[0] || ''"
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

export default {
  name: "RegistrationForm",
  components: {
    InputField,
    SubmitButton,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {},
    };
  },
  methods: {
    parseErrors(errorArray) {
      const parsed = {};
      errorArray.forEach((error) => {
        if (!parsed[error.field]) {
          parsed[error.field] = [];
        }
        parsed[error.field].push(error.message);
      });
      return parsed;
    },
    async handleRegistration() {
      const toast = useToast();

      try {
        const response = await registerUser(this.formData);
        toast.success("Registration successful!");

        this.$router.push("/auth/login");
      } catch (error) {
        if (error.response && error.response.status === 400) {
          this.errors = error.response.data.errors || {};
          this.errors = this.parseErrors(error.response.data.errors);

          toast.error(error.response.data.message);
        } else {
          toast.error("Registration failed. Please try again.");
        }
      }
    },
  },
};
</script>