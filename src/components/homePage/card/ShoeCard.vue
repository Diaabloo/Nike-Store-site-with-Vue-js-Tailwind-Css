<template>
  <div
    :class="[
      'relative border-2 rounded-xl cursor-pointer max-sm:flex-1',
      bigShoeImg === imgURL?.bigShoe ? 'border-coral-red' : 'border-transparent'
    ]"
    @click="handleClick"
  >
    <div class="flex justify-center items-center bg-cyan-100 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
      <img
        :src="imgURL?.thumbnail"
        alt="shoes collection"
        width="127"
        height="103.34"
        class="object-contain opacity-85"
      >
      <!-- Show product button -->
      <button
        v-if="bigShoeImg !== imgURL?.bigShoe"
        type="button"
        class="absolute font-bold inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg hover:bg-opacity-75"
      >
        Show product
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoeCard',
  props: {
    imgURL: {
      type: Object,
      required: true,
    },
    changeBigShoeImage: {
      type: Function,
      required: true,
    },
    bigShoeImg: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      if (this.imgURL && this.bigShoeImg !== this.imgURL.bigShoe) {
        this.changeBigShoeImage(this.imgURL.bigShoe);
      }
    },
  },
};
</script>
