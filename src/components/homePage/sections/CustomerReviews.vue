<template>
  <div class="bg-cyan-200 bg-cover bg-centre max-xl:padding-x mt-28">
    <div class="max-container">
      <h3 class="font-palanquin text-center text-4xl font-bold">
        What Our
        <span class="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div class="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        <ReviewCard
          v-for="(review, index) in reviews"
          :key="index"
          :img-u-r-l="review.imgURL"
          :customer-name="review.customerName"
          :rating="review.rating"
          :feedback="review.feedback"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ReviewCard from '@/components/homePage/card/ReviewCard.vue'
import {customer1, customer2} from '@/assets/images'
export default {
  name: 'CustomerReviews',
  components:{
    ReviewCard
  },
  data() {
    return {
      reviews : [
        {
            imgURL: customer1,
            customerName: 'John',
            rating: 4.5,
            feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
        },
        {
            imgURL: customer2,
            customerName: 'Alia',
            rating: 4.1,
            feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
        }
      ]
    }
  },
}
</script>
