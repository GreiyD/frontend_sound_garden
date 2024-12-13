<template>
  <form class="forms-sample" @submit.prevent="handleLogin">
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
    <div class="row mt-4 mb-3">
      <div class="col-6">
        <SubmitButton @click="handleLogin" label="Submit"/>
      </div>
      <div class="col-6 align-self-center text-secondary text-decoration-underline">
        Forgot your password?
      </div>
    </div>
  </form>
</template>

<script>
import InputField from '../InputField.vue';
import SubmitButton from '../SubmitButton.vue';
import {useToast} from "vue-toastification";
import {loginUser} from '../../api/users'

export default {
  name: 'LoginForm',
  components: {
    InputField,
    SubmitButton,
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
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
    async handleLogin() {
      const toast = useToast();

      try {
        const response = await loginUser(this.formData);
        const { name } = response.data.user;

        localStorage.setItem('nickname', name);

        toast.success('Login successful!');
        this.$router.push('/');
      } catch (error) {

        if (error.response && error.response.status === 400) {
          this.errors = error.response.data.errors || {};
          this.errors = this.parseErrors(error.response.data.errors);

          toast.error(error.response.data.message);
        } else {
          toast.error(error.response?.data?.message || 'Login failed. Please try again.');
        }
      }
    },
  },
};
</script>