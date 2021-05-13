// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import 'bootstrap';
import 'select2/dist/css/select2.min.css'
import Swal from 'sweetalert2'
// import 'jquery-bar-rating/dist/themes/css-stars';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

import { initSelect2 } from '../components/init_select2';
import { loadDynamicBannerText } from '../components/banner';
import { AddSweetAlertToElement } from '../components/init_alert';
// import { initUpdateNavbarOnScroll } from '../components/navbar';
// import { initStarRating } from '../components/init_star_rating';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  initSelect2();
  loadDynamicBannerText();

  // AddSweetAlertToElement(element);
  // initStarRating();
  // initUpdateNavbarOnScroll();
});

  let element = document.querySelector('#home-l');
   element.addEventListener('click', () => {
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your review has been saved!',
          showConfirmButton: true,
          timer: 5000
        })
      setTimeout(() => console.log("Hello"), 3000);
    })



