<template>
  <div class="flex justify-center items-center flex-col">
    <img
      :src="imgURL"
      alt="customer"
      class="rounded-full object-cover w-[120px] h-[120px]"
    >      <p className="mt-6 max-w-sm text-center info-text">
      {{ feedback }}
    </p>
    <div className="mt-3 flex justify-center items-center gap-2.5">
      <font-awesome-icon
        icon="star"
        class="text-coral-red text-2xl"
      />
      <p className="text-xl font-montserrat text-slate-gray">
        {{ rating }}
      </p>
    </div>
    <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
      {{ customerName }}
    </h3>
  </div>
</template>
<script>
export default {
  name: 'ReviewCard',
  props:{
    imgURL: {
      type: Object,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    feedback:{
      type: String,
      required: true
    }
  },
}
</script>
