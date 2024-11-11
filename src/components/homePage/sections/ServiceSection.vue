<template>
  <div class="max-container flex justify-center flex-wrap gap-9 max-xl:padding-x mt-40">
    <ServiceCard
      v-for="service in services"
      :key="service.label"
      :img-u-r-l="service.imgURL"
      :label="service.label"
      :subtext="service.subtext"
      class="transform transition duration-600 hover:scale-110 hover:bg-black hover:text-white"
    />
  </div>
</template>
<script>
import ServiceCard from '../card/ServiceCard.vue';
import {shieldTick, support, truckFast, } from '@/assets/icons';
export default {
  name: 'ServiceSection',
  components: {
    ServiceCard
  },
  data() {
    return {
      services : [
        {
            imgURL: truckFast,
            label: "Free shipping",
            subtext: "Shop with confidence our fast, free shipping ensures your purchases arrive swiftly, right to your doorstep, every time."
        },
        {
            imgURL: shieldTick,
            label: "Protected Payments",
            subtext: "Shop confidently our advanced payment security safeguards every transaction, ensuring your data is always safe."

        },
        {
            imgURL: support,
            label: "We're Here for You",
            subtext: "Our friendly support team is always ready to provide expert assistance, making sure you have a smooth and enjoyable experience."

        },
      ]
    }
  },
}
</script>
