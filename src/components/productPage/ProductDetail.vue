<template>
  <div
    id="product"
    class="w-full flex flex-col justify-center min-h-screen max-container max-xl:padding-x"
  >
    <!-- Selected product detail section or message if not selected -->
    <div
      class="bg-pro bg-cover bg-center w-full lg:w-[60%] mx-auto rounded-3xl mb-10 shadow-2xl p-5 lg:p-10"
    >
      <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 justify-around">
        <!-- Product Image -->
        <img
          :src="selectedProduct.imageUrl"
          alt="Product Image"
          class="md:w-60 md:h-60 lg:w-60 lg:h-65 object-cover rounded-lg my-5 lg:my-10 transform transition duration-700 hover:scale-110"
        >
        <!-- Product Details -->
        <div class="flex flex-1 flex-col items-center lg:items-start text-center lg:text-left">
          <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">
            {{ selectedProduct.name }}
          </h2>
          <p class="text-gray-400 text-sm md:text-md font-bold mb-4 lg:mr-5 text-justify">
            {{ selectedProduct.description }}
          </p>
          <div class="flex items-center space-x-4">
            <!-- Original Price with Strikethrough -->
            <p
              v-if="selectedProduct.originalPrice !== null"
              class="text-sm md:text-md text-gray-400 line-through"
            >
              ${{ selectedProduct.originalPrice }}
            </p>
            <!-- Discounted Price -->
            <p class="text-xl md:text-2xl lg:text-3xl font-bold text-coral-red">
              ${{ selectedProduct.price }}
            </p>
          </div>
          <div>
            <button class="bg-cyan-500 cursor-pointer font-bold w-full md:w-auto mt-4 md:mt-5 p-2 rounded-xl hover:bg-blue-500">
              Shop now
            </button>
          </div>
          <router-link to="/products">
            <button class="bg-red-500 cursor-pointer font-bold w-full md:w-auto mt-4 md:mt-5 px-5 py-2 rounded-xl hover:bg-blue-500">
              Return
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  computed: {
    // Parse the product data from route query
    selectedProduct() {
      const product = this.$route.query.product;
      return product ? JSON.parse(product) : null;
    }
  }
}
</script>
