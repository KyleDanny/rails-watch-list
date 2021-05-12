import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#typed-text', {
    strings: ["Create your unique database"],
    typeSpeed: 75,
    loop: true
  });
}

export { loadDynamicBannerText };
