<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
    <div class="bg-white p-8 rounded-lg shadow-2xl lg:w-full max-w-md bg-gradient-to-r from-cyan-500 to-blue-500 sm:w-[400px] sm:mt-32 sm:mb-5">
      <h2 class="text-2xl font-bold mb-8">
        Login
      </h2>

      <form @submit.prevent="userSubmit">
        <!-- Email Input -->
        <div class="mb-4">
          <label
            for="email"
            class="block mb-4"
          >Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          >
        </div>

        <!-- Password Input -->
        <div class="mb-4">
          <label
            for="password"
            class="block mb-4"
          >Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          >
        </div>

        <!-- Error Message -->
        <div
          v-if="errorMessage"
          class="text-white text-lg mt-3 mb-3"
        >
          {{ errorMessage }}
        </div>

        <!-- Login Button -->
        <ButtonCom
          type="submit"
          class="w-[50%] m-auto hover:bg-black text-cyan-500 font-bold transition duration-300"
          label="Login"
          background-color="bg-white"
          border-color="border-black"
        />
      </form>
    </div>
  </div>
</template>

<script>
import ButtonCom from '@/components/ButtonCom.vue';
import Swal from 'sweetalert2'; // Import SweetAlert2

export default {
  name: 'LogIn',
  components: {
    ButtonCom
  },
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    userSubmit() {
      // Simulate login validation
      const validEmail = "user@example.com";
      const validPassword = "password123";

      console.log(`Email: ${this.email}, Password: ${this.password}`); // Debugging

      if (this.email === validEmail && this.password === validPassword) {
        // Clear error message if login is successful
        this.errorMessage = '';

        // Store authentication status in localStorage
        localStorage.setItem('isAuthenticated', 'true');

        // Show success alert
        Swal.fire({
          title: 'Login Successful!',
          text: 'You are now logged in.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Redirect to home page after closing the alert
          this.$router.push('/');
        });
      } else {
        // Show error message if login fails
        this.errorMessage = "Incorrect email or password.";
        console.log('Login failed'); // Debugging for failed login
      }
    }
  }
};
</script>
