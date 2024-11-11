<template>
  <div class="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container max-xl:padding-x  max-xl:mt-28">
    <div class="flex-1 mt-40">
      <img
        :src="offer"
        alt="Shoe Promotion"
        width="773"
        height="687"
        className="object-contain w-full"
      >
    </div>
    <div class="flex flex-1 flex-col">
      <h2 class="text-4xl font-palanquin font-bold">
        <span class="text-coral-red">Special </span>
        Offer
      </h2>
      <p class="mt-4 info-text">
        Embark on a shopping journey that redefines your experience with
        unbeatable deals. From premier selections to incredible savings, we
        offer unparalleled value that sets us apart.
      </p>
      <p class="mt-6 info-text">
        Navigate a realm of possibilities designed to fulfill your unique
        desires, surpassing the loftiest expectations. Your journey with us is
        nothing short of exceptional.
      </p>
      <div class="mt-11 flex flex-wrap gap-4">
        <router-link to="/products">
          <ButtonCom
            label="Shop now"
            :show-icon="true"
            class="hover:bg-black"
          />
        </router-link>
        <router-link to="/about-us">
          <ButtonCom
            label="Learn more"
            background-color="bg-white"
            border-color="border-slate-gray"
            text-color="text-slate-gray"
            class="hover:bg-black hover:text-white"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonCom from '@/components/ButtonCom.vue';


export default {
  name:'SpecialOffer',
  components:{
    ButtonCom
  },
  data() {
    return {
      offer: require('@/assets/images/offer.svg'),
    }
  },
}
</script>
