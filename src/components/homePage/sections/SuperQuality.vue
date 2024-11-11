<template>
  <div
    id="about-us"
    class="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container max-xl:padding-x"
  >
    <!-- About Product -->
    <div class="flex flex-1 flex-col mt-24">
      <h2 class="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
        We Provide You
        <span class="text-coral-red">Super</span>
        <span class="text-coral-red">Quality</span> Shoes
      </h2>
      <p class="mt-4 lg:max-w-lg info-text">
        Ensuring premium comfort and style, our meticulously crafted footwear
        is designed to elevate your experience, providing you with unmatched
        quality, innovation, and a touch of elegance.
      </p>
      <p class="mt-6 lg:max-w-lg info-text">
        Our dedication to detail and excellence ensures your satisfaction
      </p>
      <router-link to="/about-us">
        <div class="mt-11">
          <ButtonComp
            label="View details"
            class="hover:bg-black"
          />
        </div>
      </router-link>
    </div>

    <!-- Image Swiper -->
    <div class="flex-1 flex justify-center items-center mt-36 bg-hero bg-cover bg-center rounded-xl w-[570px] h-[522px]">
      <Swiper
        :space-between="30"
        :centered-slides="true"
        loop="true"
        :autoplay="{
          delay: 1000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <SwiperSlide>
          <img
            :src="nike8"
            alt="product detail"
            class="object-contain mt-24"
          >
        </SwiperSlide>
        <SwiperSlide>
          <img
            :src="nike7"
            alt="product detail"
            class="object-contain mt-24 ml-12 w-[530px]"
          >
        </SwiperSlide>
        <SwiperSlide>
          <img
            :src="nike11"
            alt="product detail"
            class="object-contain mt-32"
          >
        </SwiperSlide>
        <SwiperSlide>
          <img
            :src="nike12"
            alt="product detail"
            class="object-contain w-[530px] mt-40 ml-16"
          >
        </SwiperSlide>
        <SwiperSlide>
          <img
            :src="nike13"
            alt="product detail"
            class="object-contain mt-24"
          >
        </SwiperSlide>
        <SwiperSlide>
          <img
            :src="nike14"
            alt="product detail"
            class="object-contain w-[400px] mt-24 ml-24"
          >
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import ButtonComp from '@/components/ButtonCom.vue'

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay} from 'swiper/modules';


export default {
  name: 'SuperQuality',
  components: {
    ButtonComp,
    Swiper,
    SwiperSlide
  },
  setup() {
      return {
        modules: [Autoplay],
      };
    },
  data() {
    return {
      nike8: require('@/assets/images/nike8.png'),
      nike7: require('@/assets/images/nike7.png'),
      nike11: require('@/assets/images/nike11.png'),
      nike12: require('@/assets/images/nike12.png'),
      nike13: require('@/assets/images/nike13.png'),
      nike14: require('@/assets/images/nike14.png'),
    }
  },
}
</script>

