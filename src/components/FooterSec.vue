<template>
  <footer class=" bg-black max-xl:padding-x mt-20">
    <div class="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col max-container">
      <div class="flex flex-col items-start mt-12">
        <a href="/">
          <img
            :src="footerLogo"
            alt="logo"
            width="150"
            height="46"
            class="m-0"
          >
        </a>
        <p class="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find
          Your perfect Size In Store. Get Rewards
        </p>

        <!-- icons -->
        <div class="flex items-center gap-5 mt-8">
          <!-- Facebook Icon -->
          <a
            href="https://www.facebook.com/nike"
            class="flex justify-center items-center w-12 h-12 bg-white rounded-full transform transition duration-600 hover:scale-110"
          >
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              class="w-[24px] h-[24px] text-blue-600 hover:text-blue-800"
            />
          </a>

          <!-- Instagram Icon -->
          <a
            href="https://www.instagram.com/nike/"
            class="flex justify-center items-center w-12 h-12 bg-white rounded-full transform transition duration-600 hover:scale-110"
          >
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="w-[24px] h-[24px] text-pink-500 hover:text-pink-700"
            />
          </a>

          <!-- Twitter Icon -->
          <a
            href="https://twitter.com/Nike"
            class="flex justify-center items-center w-12 h-12 bg-white rounded-full transform transition duration-600 hover:scale-110"
          >
            <font-awesome-icon
              :icon="['fab', 'x-twitter']"
              class="w-[24px] h-[24px]"
            />
          </a>
        </div>
      </div>

      <div class="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-12">
        <div
          v-for="section in footerLinks"
          :key="section.title"
        >
          <h4 class="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
            {{ section.title }}
          </h4>
          <ul>
            <li
              v-for="link in section.links"
              :key="link.name"
              class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
            >
              <a :href="link.link">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="max-container flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
      <div class="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
        <img
          :src="copyrightSign"
          alt="copyright sign"
          width="20"
          height="20"
          class="rounded-full m-0"
        >
        <p>Copyright. All rights reserved.</p>
      </div>
      <p class="font-montserrat cursor-pointer">
        Terms & Conditions
      </p>
    </div>
  </footer>
</template>
<script>
import footerLogo from '@/assets/images/footer-logo.svg'
export default {
  name:'FooterSec',
  data() {
    return {
      footerLogo,
      copyrightSign: require('@/assets/icons/copyright-sign.svg') ,
      footerLinks : [
          {
              title: "Products",
              links: [
                  { name: "Nike Run", link: "/" },
                  { name: "Nike Zoom Alphafly", link: "/" },
                  { name: "Nike Zoom Fly", link: "/" },
                  { name: "Nike React Run", link: "/" },
                  { name: "Nike Waffle Racer", link: "/" },
                  { name: "Nike Jordan", link: "/" },
              ],
          },
          {
              title: "Help",
              links: [
                  { name: "About us", link: "/" },
                  { name: "FAQs", link: "/" },
                  { name: "How it works", link: "/" },
                  { name: "Privacy policy", link: "/" },
                  { name: "Payment policy", link: "/" },
              ],
          },
          {
              title: "Get in touch",
              links: [
                  { name: "store@nike.com", link: "nike |Store.com" },
                  { name: "+212-611111111", link: "tel:+212-611111111" },
              ],
          },
      ],
    }
  },

}
</script>
