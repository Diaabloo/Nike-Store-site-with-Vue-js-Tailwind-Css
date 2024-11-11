<template>
  <div
    id="home"
    class="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
  >
    <!-- info section -->
    <div class="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 mt-6">
      <p class="text-xl font-montserrat text-coral-red">
        Summer collections
      </p>

      <h1 class="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span class="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          The New Arrival
        </span>
        <br>
        <span class="text-coral-red inline-block mt-3">Nike</span> Shoes
      </h1>
      <p class="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
      </p>

      <!-- Button for Shop -->
      <router-link to="/products">
        <ButtonCom
          label="Shop now"
          :show-icon="true"
          class="hover:bg-black"
        />
      </router-link>

      <!-- infos -->
      <div class="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        <div
          v-for="(stat, index) in statistics"
          :key="index"
        >
          <p class="text-4xl font-palanquin font-bold">
            {{ stat.value }}
          </p>
          <p class="leading-7 font-montserrat text-slate-gray">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>

    <!-- images section -->
    <div class="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-card bg-cover bg-center">
      <img
        :src="bigShoeImg"
        alt="shoe collection"
        width="610"
        height="502"
        class="object-contain relative z-10"
      >
      <div class="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        <div
          v-for="(shoe, index) in shoes"
          :key="index"
        >
          <ShoeCard
            :index="index"
            :img-u-r-l="shoe"
            :change-big-shoe-image="changeBigShoeImage"
            :big-shoe-img="bigShoeImg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCom from '@/components/ButtonCom.vue';
import ShoeCard from '../card/ShoeCard.vue';
import { nike1, nike2, nike3, miniCard1, miniCard2, miniCard3 } from "@/assets/images";

export default {
  name: 'HeroSection',
  components: {
    ButtonCom,
    ShoeCard
  },
  data() {
    return {
      // images
      bigShoeImg: require('@/assets/images/nike1.png'),
      // static info
      statistics: [
        { value: '+6k', label: 'Brands' },
        { value: '+800', label: 'Shops' },
        { value: '+500k', label: 'Customers' },
      ],
      // shoes
      shoes: [
        {
          thumbnail: miniCard1,
          bigShoe: nike1,
        },
        {
          thumbnail: miniCard2,
          bigShoe: nike2,
        },
        {
          thumbnail: miniCard3,
          bigShoe: nike3,
        },
      ]
    }
  },
  methods: {
    changeBigShoeImage(shoe) {
      this.bigShoeImg = shoe; // Update big shoe image
    }
  }
}
</script>
