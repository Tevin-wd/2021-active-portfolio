const slides = document.querySelectorAll('.project-card');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; //set to true for auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
   const current = document.querySelector('.current');
   current.classList.remove('current');

   if (current.nextElementSibling) {
      current.nextElementSibling.classList.add('current');
   } else {
      slides[0].classList.add('current');
   }

   setTimeout(() => {
      current.classList.remove('current');
   });
}

const prevSlide = () => {
   const current = document.querySelector('.current');
   current.classList.remove('current');

   if (current.previousElementSibling) {
      current.previousElementSibling.classList.add('current');
   } else {
      slides[slides.length - 1].classList.add('current');
   }

   setTimeout(() => {
      current.classList.remove('current');
   });
}

next.addEventListener('click', e => {
   nextSlide();
});

prev.addEventListener('click', e => {
   prevSlide();
});