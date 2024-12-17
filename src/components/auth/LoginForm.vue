<template>
  <form class="forms-sample" @submit.prevent="handleLogin">
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
import {parseErrors} from '../../utils/validationErrorParser.js';
import {jwtDecode} from 'jwt-decode';

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
    saveTokenData(token) {
      try {
        localStorage.setItem('jwtToken', token);

        const decodedUserData = jwtDecode(token);
        localStorage.setItem('nickname', decodedUserData.nickname);

        return decodedUserData;
      } catch (error) {
        console.error('Error decoding token:', error);
        throw new Error('Invalid token');
      }
    },
    async handleLogin() {
      const toast = useToast();
      try {
        const response = await loginUser(this.formData);
        const { token } = response.data.user;

        this.saveTokenData(token);
        toast.success('Login successful!');
        this.$router.push('/');
      } catch (error) {
        if (error.response && error.response.status === 400) {
          this.errors = parseErrors(error.response.data.errors || []);
          toast.error(error.response.data.message);
        } else {
          toast.error(error.response?.data?.message || 'Login failed. Please try again.');
        }
      }
    },
  },
};
</script>