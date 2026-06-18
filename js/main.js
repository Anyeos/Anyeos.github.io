const observerLeft = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated');
      entry.target.classList.add('animate__slideInLeft');
      //observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.01 });
const targetElementsLeft = document.querySelectorAll('.to-animate-left');
targetElementsLeft.forEach(Element => observerLeft.observe(Element));


const observerRight = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated');
      entry.target.classList.add('animate__slideInRight');
      //observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.01 });
const targetElementsRight = document.querySelectorAll('.to-animate-right');
targetElementsRight.forEach(Element => observerRight.observe(Element));


const observerUp = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated');
      entry.target.classList.add('animate__slideInUp');
      //observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.01 });
const targetElementsUp = document.querySelectorAll('.to-animate-up');
targetElementsUp.forEach(Element => observerUp.observe(Element));


const observerZoom = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated');
      entry.target.classList.add('animate__zoomIn');
      //observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.01 });
const targetElementsZoom = document.querySelectorAll('.to-animate-zoom');
targetElementsZoom.forEach(Element => observerZoom.observe(Element));


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

