<template>
  <div id="about">
    <HistorySec />
    <ChallengesRoute />
    <HightQuality />
    <CustomerReviews />
    <SubscribeSec />
  </div>
</template>

<script>
import {HistorySec, ChallengesRoute, HightQuality, CustomerReviews, SubscribeSec} from '@/components/index'
export default {
  name:'AboutView',
  components:{
    HistorySec,
    ChallengesRoute,
    HightQuality,
    CustomerReviews,
    SubscribeSec
  }
}
</script>
