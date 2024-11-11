<template>
  <button
    :class="[
      'flex justify-center items-center gap-2 px-7 py-4 border-4 font-montserrat text-lg leading-none rounded-full',
      backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red',
      fullWidth ? 'w-full' : ''
    ]"
  >
    {{ label }}

    <font-awesome-icon
      v-if="showIcon"
      :icon="['fas', 'arrow-right']"
      class="ml-2 bg-white text-cyan-500 rounded-full p-1"
    />
  </button>
</template>

<script>
export default {
  name: 'ButtonCom',
  props: {
    label: {
      type: String,
      required: true
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: null
    },
    textColor: {
      type: String,
      default: null
    },
    borderColor: {
      type: String,
      default: null
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  }
}
</script>
