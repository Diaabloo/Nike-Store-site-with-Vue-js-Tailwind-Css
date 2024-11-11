<template>
  <div>
    <!-- NavBar -->
    <NavBar />

    <!-- This is where the routed content (Login, Signup, Home) will be displayed -->
    <router-view />

    <!-- Footer (display only on the home page) -->
    <FooterSec v-if="!noFooter" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterSec from './components/FooterSec.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterSec
  },
  setup() {
    const route = useRoute();

    // Use a computed property to check if the current route is the home page
    const noFooter = computed(() => route.path === '/Login' || route.path === '/Signup');

    return {
      noFooter
    };
  }
};
</script>
