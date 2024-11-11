<template>
  <div class="padding-x py-8 absolute z-30 w-full">
    <nav class="flex justify-between items-center max-container">
      <!-- Logo -->
      <a href="/">
        <img
          :src="headerLogo"
          alt="logo"
          class="m-0 w-[129px] h-[70px]"
        >
      </a>

      <!-- Menu links for larger screens -->
      <ul class="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        <li
          v-for="item in navLinks"
          :key="item.label"
        >
          <a
            :href="item.href"
            class="font-montserrat leading-normal text-lg text-slate-gray hover:text-black hover:font-bold"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Sign up / Log in links -->
      <div class="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 text-cyan-500">
        <router-link
          to="/Signup"
          class="hover:text-black hover:scale-110"
        >
          Sign up
        </router-link>
        <span>|</span>
        <router-link
          to="/Login"
          class="hover:text-black hover:scale-110"
        >
          Log in
        </router-link>
      </div>

      <!-- Menu icon for smaller screens -->
      <div
        class="hidden max-lg:block cursor-pointer"
        @click="toggleMenu"
      >
        <!-- Conditionally show either the Menu or X icon -->
        <font-awesome-icon
          :icon="isMenuOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars'"
          class="text-3xl transform transition duration-1000 ease-in-out"
          :class="isMenuOpen ? 'rotate-90 scale-110 text-red-500' : 'rotate-0 text-cyan-500'"
        />
      </div>
    </nav>

    <!-- Mobile Menu -->
    <ul
      v-if="isMenuOpen"
      class="absolute left-0 top-[70px] bg-white w-full py-5 shadow-lg flex flex-col gap-4 items-center transform transition-transform duration-300 ease-in-out mt-6"
      :class="isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'"
    >
      <li
        v-for="item in navLinks"
        :key="item.label"
      >
        <a
          :href="item.href"
          class="font-montserrat text-lg text-slate-gray hover:text-cyan-500 hover:font-bold"
        >
          {{ item.label }}
        </a>
      </li>

      <div class="flex gap-2 text-lg leading-normal font-medium font-montserrat text-cyan-500">
        <router-link
          to="/Signup"
          class="hover:text-black hover:scale-110"
        >
          Sign up
        </router-link>
        <span>|</span>
        <router-link
          to="/Login"
          class="hover:text-black hover:scale-110"
        >
          Log in
        </router-link>
      </div>
      <!-- icons -->
      <div class="flex items-center gap-5">
        <!-- Facebook Icon -->
        <a
          href="https://www.facebook.com/nike"
          class="flex justify-center items-center w-12 h-12 bg-white rounded-full transform transition duration-600 hover:scale-110"
        >
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            class="w-[24px] h-[24px] text-blue-600 hover:text-blue-800"
          />
        </a>

        <!-- Instagram Icon -->
        <a
          href="https://www.instagram.com/nike/"
          class="flex justify-center items-center w-12 h-12 bg-white rounded-full transform transition duration-600 hover:scale-110"
        >
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            class="w-[24px] h-[24px] text-pink-500 hover:text-pink-700"
          />
        </a>

        <!-- Twitter Icon -->
        <a
          href="https://twitter.com/Nike"
          class="flex justify-center items-center w-12 h-12 bg-white rounded-full transform transition duration-600 hover:scale-110"
        >
          <font-awesome-icon
            :icon="['fab', 'x-twitter']"
            class="w-[24px] h-[24px] hover:text-gray-500"
          />
        </a>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false,
      headerLogo: require('../assets/images/nike-logo.png'),
      navLinks: [
        { href: "/", label: "Home" },
        { href: "/about-us", label: "About Us" },
        { href: "/products", label: "Products" },
        { href: "/contact-us", label: "Contact Us" }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
};
</script>
