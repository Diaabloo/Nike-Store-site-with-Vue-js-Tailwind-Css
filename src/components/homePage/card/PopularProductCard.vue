<template>
  <div class="flex flex-1 flex-col w-full max-sm:w-full">
    <img
      :src="imgURL"
      :alt="name"
      class="w-[282px] h-[282px] rounded-xl bg-card bg-center bg-cover transform transition duration-600 hover:scale-110"
    >
    <div class="mt-8 flex justify-start gap-2.5">
      <font-awesome-icon
        icon="star"
        class="text-coral-red text-2xl w-[24px] h-[24px]"
      />
      <p class="font-montserrat text-xl leading-normal text-slate-gray">
        {{ rate }}
      </p>
    </div>
    <h3 class="mt-2 text-2xl leading-normal font-semibold font-palanquin">
      {{ name }}
    </h3>
    <p class="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
      {{ price }}
    </p>
  </div>
</template>

<script>

export default {
  name:"PopularProductCard",
  props: {
    imgURL: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    }
  },
};
</script>
