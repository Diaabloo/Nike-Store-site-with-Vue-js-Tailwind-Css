<template>
  <div
    id="contact"
  >
    <ContactUs />
    <SubscribeSec />
  </div>
</template>
<script>
import { ContactUs, SubscribeSec } from '../components/index'

export default {
name:'ContactView',
components:{
  ContactUs,
  SubscribeSec
}
}
</script>
