<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
    <div class="bg-white p-8 rounded-lg shadow-2xl lg:w-full max-w-lg bg-gradient-to-r from-cyan-500 to-blue-500 sm:w-[400px] sm:mt-32 sm:mb-5">
      <h2 class="text-2xl font-bold mb-8 text-center sm:text-3xl">
        Sign Up
      </h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label
            for="username"
            class="block mb-3 text-sm sm:text-base"
          >Username</label>
          <input
            v-model="form.username"
            type="text"
            class="border p-2 w-full rounded"
            placeholder="Enter your username"
            :class="{ 'border-red-500': errors.username }"
          >
          <p
            v-if="errors.username"
            class="text-white text-sm mt-3 mb-3"
          >
            {{ errors.username }}
          </p>
        </div>

        <div class="mb-4">
          <label
            for="email"
            class="block mb-3 text-sm sm:text-base"
          >Email</label>
          <input
            v-model="form.email"
            type="email"
            class="border p-2 w-full rounded"
            placeholder="Enter your email"
            :class="{ 'border-red-500': errors.email }"
          >
          <p
            v-if="errors.email"
            class="text-white text-sm mt-3 mb-3"
          >
            {{ errors.email }}
          </p>
        </div>

        <div class="mb-4">
          <label
            for="password"
            class="block mb-3 text-sm sm:text-base"
          >Password</label>
          <input
            v-model="form.password"
            type="password"
            class="border p-2 w-full rounded"
            placeholder="Enter your password"
            :class="{ 'border-red-500': errors.password }"
          >
          <p
            v-if="errors.password"
            class="text-white text-sm mt-3 mb-3"
          >
            {{ errors.password }}
          </p>
        </div>

        <ButtonCom
          type="submit"
          class="w-full sm:w-3/4 m-auto mt-10 hover:bg-black text-cyan-500 font-bold transition duration-300"
          label="Sign Up"
          background-color="bg-white"
          border-color="border-black"
        />
      </form>
    </div>
  </div>
</template>

<script>
import ButtonCom from '@/components/ButtonCom.vue';
import Swal from 'sweetalert2';  // Import SweetAlert2

export default {
  name: 'SignUp',
  components: {
    ButtonCom
  },
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
      },
      errors: {},
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {}; // Reset errors

      // Basic validation
      if (!this.form.username) {
        this.errors.username = 'Username is required.';
      }
      if (!this.form.email) {
        this.errors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
        this.errors.email = 'Email is invalid.';
      }
      if (!this.form.password) {
        this.errors.password = 'Password is required.';
      } else if (this.form.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters.';
      }

      // If there are no errors, proceed (e.g., submit the form)
      if (Object.keys(this.errors).length === 0) {
        // Show SweetAlert success message
        Swal.fire({
          title: 'Sign up successful!',
          text: 'Welcome to the platform.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Simulate user sign up by setting a flag in localStorage
          localStorage.setItem('isAuthenticated', 'true');

          // Redirect to home page
          this.$router.push('/');
        });

        // Clear the form after successful submission
        this.form.username = '';
        this.form.email = '';
        this.form.password = '';
      }
    },
  },
};
</script>
