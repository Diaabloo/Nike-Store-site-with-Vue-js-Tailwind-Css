<template>
  <div
    id="products"
    class="max-container max-sm:mt-12 max-xl:padding-x"
  >
    <div class="flex flex-col justify-start gap-5 mt-40">
      <h2 class="text-4xl font-palanquin font-bold">
        <span class="text-coral-red">Popular</span> Products
      </h2>
      <p class="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
        Indulge in exceptional quality and style with our most popular picks.
        Step into a world where comfort, stunning design, and unbeatable value come together for you.
      </p>
    </div>

    <div class="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 ">
      <PopularProductCard
        v-for="(product, index) in products"
        :key="index"
        v-bind="product"
      />
    </div>
    <router-link to="/products">
      <ButtonCom
        label="More Products"
        :show-icon="true"
        class="hover:bg-black mt-7"
      />
    </router-link>
  </div>
</template>
<script>
import { nike4, nike5, nike6, nike7 } from '@/assets/images';
import PopularProductCard from '@/components/homePage/card/PopularProductCard.vue';
import ButtonCom from '@/components/ButtonCom.vue'

export default {
name:'PopularProducts',
components:{
  PopularProductCard,
  ButtonCom
},
data() {
  return {
    products :[
      {
          imgURL: nike4,
          name: "Nike Run",
          price: "$199.00",
          rate: 4.3
      },
      {
          imgURL: nike5,
          name: "Nike Zoom Alphafly",
          price: "$210.20",
          rate:"4.1"
      },
      {
          imgURL: nike6,
          name: "Nike Zoom Fly",
          price: "$220.20",
          rate:"3.9"
      },
      {
          imgURL: nike7,
          name: "Nike React Run",
          price: "$230.20",
          rate:"4.9"
      },
    ]
  }
}

}
</script>
