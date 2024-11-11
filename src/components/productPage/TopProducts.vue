<template>
  <div
    id="product"
    class="w-full flex flex-col justify-center min-h-screen max-container max-xl:padding-x"
  >
    <h1 class="text-4xl text-center font-palanquin font-bold mb-12 mt-60 max-sm:text-2xl">
      <span class="text-coral-red">Popular</span> Products
    </h1>
    <!-- Filter Select Box -->
    <div class="text-start mt-10 mb-8">
      <label
        for="filter"
        class="text-lg font-semibold text-gray-700"
      >
        Filter by:
      </label>
      <select
        id="filter"
        v-model="selectedFilter"
        class="ml-4 p-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent transition ease-in-out duration-200 bg-white text-gray-700 hover:border-gray-400"
        @change="filterProducts"
      >
        <option
          value=""
          class="text-gray-500"
        >
          All
        </option>
        <option
          value="discount"
          class="text-gray-700"
        >
          Discount
        </option>
        <option
          value="best"
          class="text-gray-700"
        >
          Best Seller
        </option>
        <option
          value="new"
          class="text-gray-700"
        >
          New
        </option>
      </select>
    </div>
    <!-- Product listing section -->
    <div class="p-10">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <!-- Loop through filtered products -->
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="relative p-12 shadow-md rounded-lg border border-gray-200 overflow-hidden bg-white group hover:bg-black transition-all duration-300"
        >
          <!-- Background Image with black opacity overlay -->
          <div
            class="absolute w-[70%] inset-0 bg-cover bg-center opacity-30"
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
          />
          <!-- Discount Badge -->
          <p
            v-if="product.discount"
            class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-full z-20"
          >
            - {{ product.discount }} %
          </p>
          <!-- Best Seller Badge -->
          <p
            v-if="product.best"
            class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-sm font-semibold rounded-full z-20"
          >
            {{ product.best }}
          </p>
          <!-- New Badge -->
          <p
            v-if="product.new"
            class="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 text-sm font-semibold rounded-full z-20"
          >
            {{ product.new }}
          </p>

          <!-- Overlay content to ensure clarity -->
          <div class="relative text-white opacity-0 cursor-pointer group-hover:opacity-100 transition-all duration-300">
            <h2 class="text-xl font-bold text-white mb-2">
              {{ product.name }}
            </h2>
            <p class="text-gray-400">
              {{ product.shortDescription }}
            </p>

            <!-- Detail button with bg black and text visible only on hover -->
            <router-link :to="{ name: 'product-details', params: { id: product.id }, query: { product: JSON.stringify(product) } }">
              <button
                class="mt-4 px-4 py-2 bg-cyan-500 text-white rounded opacity-0 hover:bg-blue-500 group-hover:opacity-100 z-20 relative transition-all duration-300"
              >
                Detail
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from './productsData';

export default {
  name: 'TopProduct',
  data() {
    return {
      products: products,
      selectedFilter: '', // Store the filter value
      filteredProducts: products, // Initially show all products
    };
  },
  methods: {
    filterProducts() {
      if (this.selectedFilter === 'discount') {
        this.filteredProducts = this.products.filter(product => product.discount);
      } else if (this.selectedFilter === 'best') {
        this.filteredProducts = this.products.filter(product => product.best);
      } else if (this.selectedFilter === 'new') {
        this.filteredProducts = this.products.filter(product => product.new);
      } else {
        this.filteredProducts = this.products;
      }
    }
  }
};
</script>
