<template>
  <div class="w-full flex flex-col justify-center max-container max-xl:padding-x max-lg:mt-28 max-lg:w-[90%] mt-40">
    <div class="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <!-- Success -->
      <div class="flex flex-1 flex-col ">
        <h2 class="font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-center">
          road to <span class="text-cyan-500">success</span>
        </h2>

        <ul class="text-justify mt-8 ">
          <li class="bg-gray-200 p-10 rounded-xl">
            <span class=" text-[25px] underline">Innovative Products</span><br>  Nike's success has often come from product innovation. The Nike Cortez, introduced in 1972, was one of the company's first big hits. Later, the creation of Nike Air technology in 1979 brought cushioning technology that set Nike apart.<br><br>
            <span class="text-cyan-500 text-[25px] underline">Michael Jordan Partnership</span><br>  In 1984, Nike signed a deal with basketball player Michael Jordan, which resulted in the Air Jordan line. This partnership became a massive cultural phenomenon, pushing Nike into a new realm and establishing a blueprint for athlete endorsements. The Air Jordan brand continues to be one of Nike's biggest revenue drivers.
          </li>
          <!-- Second item with icon click  -->
          <transition
            enter-active-class="animate-fadeIn"
            leave-active-class="animate-fadeOut"
          >
            <li
              v-if="showSecondSuccess"
              class="mt-8 bg-gray-200 p-10 rounded-xl"
            >
              <span class=" text-[25px] underline">Global Marketing</span><br>
              Nike's slogan, “Just Do It,” introduced in 1988, is one of the most successful marketing campaigns of all time. It helped make the brand universally recognizable, extending its appeal beyond just athletes to everyday people seeking motivation and empowerment.<br><br>
              <span class="text-cyan-500 text-[25px] underline">Expansion into Apparel and Equipment</span><br>
              Initially known for its shoes, Nike expanded into athletic apparel and equipment, significantly increasing its market share. Apparel now makes up a substantial portion of its revenue.
            </li>
          </transition>
          <font-awesome-icon
            :icon="['fas', showSecondSuccess ? 'angles-up' : 'angles-down']"
            class="text-3xl text-white bg-gradient-to-r from-cyan-300  to-cyan-500 cursor-pointer my-5 mx-[50%] p-4 rounded-full shadow-3xl hover:bg-gradient-to-br  focus:ring-cyan-500 dark:focus:ring-cyan-800 max-sm:mx-[40%]"
            @click="showSecondSuccess = !showSecondSuccess"
          />
        </ul>
      </div>
      <!-- Challenge -->
      <div class="flex flex-1 flex-col">
        <h2 class="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span class="text-cyan-500">challenges</span> in the road
        </h2>

        <ul class="text-justify mt-8">
          <li class="bg-gray-500 p-10 rounded-xl">
            <span class=" text-[25px] underline">Financial Setbacks</span><br> The company has faced financial challenges, particularly during economic downturns. In 2020, for example, Nike's sales took a hit due to the COVID-19 pandemic.the creation of Nike Air technology in 1979 brought cushioning technology that set Nike apart.<br><br>
            <span class="text-cyan-500 text-[25px] underline">Failed Products and Marketing Missteps</span><br>  Not all of Nike's product launches have been successful. For instance, the FuelBand, a fitness tracker, was ultimately discontinued due to poor sales and competition from tech giants like Apple. Nike has also faced backlash over certain ad campaigns and sponsorships, including its decision to feature controversial athletes.
          </li>
          <!-- Second item with icon click  -->
          <transition
            enter-active-class="animate-fadeIn"
            leave-active-class="animate-fadeOut"
          >
            <li
              v-if="showSecondChallenge"
              class="mt-8 bg-gray-500 p-10 rounded-xl"
            >
              <span class=" text-[25px] underline">Stiff Competition</span><br>  Nike consistently faces competition from brands like Adidas, Under Armour, and Puma. In certain international markets, like China, local brands such as Li-Ning and Anta have also challenged Nike's dominance.<br><br>
              <span class="text-cyan-500 text-[25px] underline">Environmental Impact</span><br>  Although Nike has made strides in sustainability, it still faces criticism for its environmental impact, particularly in terms of waste generation and carbon footprint. The brand has responded by launching recycling programs.
            </li>
          </transition>
          <font-awesome-icon
            :icon="['fas', showSecondChallenge ? 'angles-up' : 'angles-down']"
            class="text-3xl text-black cursor-pointer my-5 mx-[50%] bg-gradient-to-r from-cyan-600 to-cyan-800 p-4 rounded-full shadow-3xl hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-500 dark:focus:ring-cyan-300 max-sm:mx-[40%]"
            @click="showSecondChallenge = !showSecondChallenge"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'ChallengesRoute',
  data() {
    return {
      showSecondSuccess: false,
      showSecondChallenge: false,
    };
  },
}
</script>

