import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'


// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';
// Import Font Awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Import menu icons
import { faBars, faStar, faArrowRight, faAnglesDown,  faAnglesUp, faEnvelope, faPhone, faX} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
// Add the faBars icon to the library
library.add(faBars, faFacebook, faInstagram, faXTwitter, faTiktok, faEnvelope, faStar, faArrowRight, faAnglesDown, faAnglesUp, faPhone, faX);



createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
