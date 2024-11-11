<template>
  <div class="w-full flex flex-col items-center justify-center min-h-screen gap-10 max-container mb-20 max-xl:padding-x">
    <!-- Image and Title Section -->
    <div class="flex flex-col items-center mb-16 relative w-full justify-center space-y-8 mt-40">
      <!-- Image Section -->
      <img
        src="@/assets/images/nike-team.png"
        alt="Nike Team Logo"
        class="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
      >

      <!-- Title Section -->
      <h1 class="text-3xl md:text-4xl lg:text-5xl uppercase font-bold text-gray-800 text-center">
        Contact Us
      </h1>

      <!-- Underline Section directly under the title -->
      <div class="w-3/4 md:w-2/3 lg:w-1/2 h-1 bg-gray-300 mt-4 mb-12" />
    </div>

    <!-- Card Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 padding-x mb-10">
      <!-- Social Cards -->
      <div
        v-for="(social, index) in socials"
        :key="index"
        class="p-6 rounded-2xl shadow-card transition-transform duration-card transform hover:scale-105 hover:shadow-card-hover"
        :class="[social.bgGradient]"
      >
        <div
          class="text-[2.5rem] mb-4"
          :class="[social.iconColor]"
        >
          <font-awesome-icon
            :icon="['fab', social.icon]"
            class="text-white transition-transform duration-500 hover:rotate-12 hover:scale-125"
          />
        </div>
        <h2 class="font-bold text-white mb-2 text-2xl">
          {{ social.name }}
        </h2>
        <p class="text-white text-center font-bold mb-6">
          {{ social.description }}
        </p>
        <a :href="social.link">
          <ButtonCom
            label="Visit Now"
            background-color="bg-white"
            text-color="text-slate-gray"
            class="hover:bg-opacity-80 mt-4 font-bold transition-colors duration-300"
          />
        </a>
      </div>
      <!-- Email Card -->
      <div class="flex flex-col items-center p-6 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 rounded-2xl shadow-card transition-transform duration-card transform hover:scale-105 hover:shadow-card-hover ">
        <div class="text-4xl mb-4">
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            class="text-black"
          />
        </div>
        <h2 class="text-xl font-semibold mb-2 text-black">
          Email
        </h2>
        <p class="flex flex-col text-center font-bold text-xl text-black my-10">
          <span class="mb-4">Chat with us</span>
          <span>Support-Nike-Store@gmail.com</span>
        </p>
      </div>
      <!-- Support Card -->
      <div class="flex flex-col items-center p-6 bg-gray-400 rounded-2xl shadow-card transition-transform duration-card transform hover:scale-105 hover:shadow-card-hover">
        <div class="text-4xl mb-4">
          <font-awesome-icon
            :icon="['fas', 'phone']"
            class="text-black"
          />
        </div>
        <h2 class="text-xl font-semibold mb-2 text-black">
          Support
        </h2>
        <p class="flex flex-col text-center font-bold text-xl text-black my-10">
          <span class="mb-4">1-800-806-6453</span>
          <span class="mb-4">6j/12h</span>
        </p>
      </div>
    </div>
    <div class="w-full py-8 text-center">
      <p class="text-[40px] font-bold text-gray-600">
        Thank you for visiting!
      </p>
    </div>
  </div>
</template>

<script>
import ButtonCom from "@/components/ButtonCom.vue";
export default {
  name: "ContactUs",
  components: {
    ButtonCom,
  },
  data() {
    return {
      socials: [
        {
          name: "Facebook",
          description: "Connect with us on Facebook for updates, community events, and exclusive offers.",
          icon: "facebook",
          link: "https://www.facebook.com/nike",
          bgGradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
          iconColor: "text-blue-600",
        },
        {
          name: "Instagram",
          description: "Follow our Instagram for stunning visuals, product showcases, and behind-the-scenes content.",
          icon: "instagram",
          link: "https://www.instagram.com/nike/",
          bgGradient: "bg-gradient-to-r from-pink-300 to-pink-600",
          iconColor: "text-pink-600",
        },
        {
          name: "Twitter",
          description: "Stay updated with real-time news, announcements, and quick tips by following us on Twitter.",
          icon: "x-twitter",
          link: "https://twitter.com/Nike",
          bgGradient: "bg-gradient-to-r from-gray-900 to-gray-500",
          iconColor: "text-gray-500",
        },
        {
          name: "TikTok",
          description: "Discover our creative side on TikTok with fun and engaging short videos that entertain and inform.",
          icon: "tiktok",
          link: "https://www.tiktok.com/nike/",
          bgGradient: "bg-gradient-to-r from-black to-gray-800",
          iconColor: "text-white",
        },
      ],
    };
  },
};
</script>

