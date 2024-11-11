<template>
  <div
    id="product"
    class="w-full flex flex-col justify-center min-h-screen max-container max-xl:padding-x"
  >
    <h1 class="text-4xl text-center font-palanquin font-bold mb-12 mt-40 max-sm:text-2xl">
      <span class="text-coral-red">Popular</span> Products
    </h1>

    <!-- Selected product detail section or message if not selected -->
    <div
      v-if="selectedProduct"
      class="bg-pro bg-cover bg-center w-full lg:w-[60%] mx-auto rounded-3xl mb-10 shadow-2xl p-5 lg:p-10"
    >
      <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 justify-around">
        <!-- Product Image -->
        <img
          :src="selectedProduct.imageUrl"
          alt="Product Image"
          class="w-48 h-48 md:w-60 md:h-60 lg:w-80 lg:h-65 object-cover rounded-lg my-5 lg:my-10 transform transition duration-500 hover:scale-110"
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
            <button class="bg-cyan-500 cursor-pointer font-bold mx-auto mt-4 md:mt-5 p-2 rounded-xl hover:bg-blue-500">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- message when no product is selected -->
    <div
      v-else
      class="bg-gray-200 w-[60%] mx-auto rounded-3xl mb-10 shadow-2xl flex items-center justify-center h-60"
    >
      <div class="flex flex-col">
        <p class="text-xl font-bold text-gray-700 max-sm:text-sm">
          Select the product to view its details.
        </p>
      </div>
    </div>

    <!-- Filter Select Box -->
    <div class="text-center mt-5 mb-8">
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
            <button
              class="mt-4 px-4 py-2 bg-cyan-500 text-white rounded opacity-0 hover:bg-blue-500 group-hover:opacity-100 z-20 relative transition-all duration-300"
              @click="selectProduct(product.id)"
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from './productsData';

export default {
  name:'TopProduct',
  data() {
    return {
      products: products,
      selectedProductId: null,
      selectedFilter: '', // Store the filter value
      filteredProducts: products, // Initially show all products
    };
  },
  computed: {
    selectedProduct() {
      return this.products.find(product => product.id === this.selectedProductId);
    }
  },
  methods: {
    selectProduct(productId) {
      this.selectedProductId = this.selectedProductId === productId ? null : productId;
    },
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
