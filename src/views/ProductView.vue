<template>
  <div
    id="product"
  >
    <TopProducts />
  </div>
</template>
<script>
import {TopProducts} from '@/components/index'
export default {
  name:'ProductView',
  components:{
    TopProducts,
  }
}
</script>
