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

import { initSelect2 } from '../components/init_select2';
import { loadDynamicBannerText } from '../components/banner';
import { initSweetalert } from '../components/init_alert';


document.addEventListener('turbolinks:load', () => {
  // call functions here
  initSelect2();
  loadDynamicBannerText();
});



initSweetalert('#test-button', {
  title: "Review Accepted",
  text: "Thank you for the review",
  icon: "success",
  timer: 10000
});



