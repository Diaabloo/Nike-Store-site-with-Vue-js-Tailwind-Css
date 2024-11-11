<template>
  <div id="home">
    <HeroSection />
    <PopularProducts />
    <SuperQuality />
    <ServiceSection />
    <SpecialOffer />
    <CustomerReviews />
    <SubscribeSec />
  </div>
</template>

<script>
import {HeroSection, PopularProducts, SuperQuality, ServiceSection, SpecialOffer, CustomerReviews, SubscribeSec} from '@/components/index';
export default {
  name: 'HomeView',
  components : {
    HeroSection,
    PopularProducts,
    SuperQuality,
    ServiceSection,
    SpecialOffer,
    CustomerReviews,
    SubscribeSec
  }
}
</script>
