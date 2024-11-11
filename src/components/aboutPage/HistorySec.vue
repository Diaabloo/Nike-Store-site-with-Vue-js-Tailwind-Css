<template>
  <div
    id="about"
    class="w-full flex flex-col justify-center min-h-screen max-container max-xl:padding-x"
  >
    <div class="flex flex-col md:flex-row justify-center items-center md:mt-30 mt-40 space-y-4 md:space-y-0 md:space-x-2 max-lg:mt-36">
      <h1 class="font-palanquin capitalize text-center text-4xl font-bold pt-12 max-lg:pt-5">
        History Of
      </h1>
      <img
        src="@/assets/images/nike-logo.png"
        alt="nike-logo"
        class="w-[15%] max-sm:w-[40%] md:w-[30%] ml-2"
      >
    </div>

    <div class="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ">
      <div class="flex flex-1 flex-col mt-24">
        <h2 class="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Nike
          <span class="text-coral-red">Creation</span>
        </h2>
        <p class="mt-4 lg:max-w-lg info-text">
          Nike, founded in 1964 as Blue Ribbon Sports by Bill Bowerman and Phil Knight, officially became Nike, Inc. in 1971.
        </p>
        <p class="mt-6 lg:max-w-lg info-text">
          Over the decades, it transformed from a small athletic shoe distributor into one of the world's largest and most iconic sports brands. Here's a look at some key successes and challenges in Nike's journey
        </p>
      </div>

      <div class="flex-1 flex justify-center items-center mt-16">
        <img
          src="@/assets/images/creation-nike.webp"
          alt=""
          class="w-[60%]"
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'HistorySec'
}
</script>
