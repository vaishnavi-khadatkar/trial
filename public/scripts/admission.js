// <!-- Page2 js -->

document.addEventListener('DOMContentLoaded', function () {
   const admissionInfo = document.querySelector('.admission-info');
   const formBackground = document.querySelector('.form-background');
   const admissionImage = document.querySelector('.admission-info img');

   // Function to add animation class
   function animateElement(element, delay) {
       setTimeout(() => {
           element.classList.add('fade-in');
           // Remove the animation class after the animation completes
           element.addEventListener('animationend', () => {
               element.classList.remove('fade-in');
           }, { once: true }); // Ensure the event listener is removed after the first call
       }, delay);
   }

   // Sequentially animate elements
   animateElement(admissionInfo, 500); // 0.5 second delay
   animateElement(formBackground, 1500); // 1 second delay after the first animation
   animateElement(admissionImage, 2500); // 1 second delay after the second animation
});


// <!-- Page3 js -->

document.addEventListener('DOMContentLoaded', function () {
   const programCards = document.querySelector('.program-cards');

   // Function to add animation class
   function animateElement(element, delay) {
       setTimeout(() => {
           element.classList.add('fade-in');
           // Remove the animation class after the animation completes
           element.addEventListener('animationend', () => {
               element.classList.remove('fade-in');
           }, { once: true }); // Ensure the event listener is removed after the first call
       }, delay);
   }

   // Sequentially animate elements
   animateElement(programCards, 2500); // 1 second delay after the second animation
});


// <!-- Page4 js -->

document.addEventListener('DOMContentLoaded', function () {
   const reasonCard = document.querySelector('.program-cards');
   // Function to add animation class
   function animateElement(element, delay) {
       setTimeout(() => {
           element.classList.add('fade-in');
           // Remove the animation class after the animation completes
           element.addEventListener('animationend', () => {
               element.classList.remove('fade-in');
           }, { once: true }); // Ensure the event listener is removed after the first call
       }, delay);
   }
   // Sequentially animate elements
   animateElement(reasonCard, 2500); // 1 second delay after the second animation
});


// <!-- faq page js -->

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');

        question.addEventListener('mouseover', () => {
            answer.classList.add('answer-visible');
        });

        question.addEventListener('mouseout', () => {
            answer.classList.remove('answer-visible');
        });
    });
});

  
// <!-- page award js -->
    
const certificates = document.querySelectorAll(".certificate");
let currentIndex = 0;

function showNextCertificate() {
  certificates[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % certificates.length;
  certificates[currentIndex].classList.add("active");
}

setInterval(showNextCertificate, 3000); // Change the certificate every 3 seconds
// <!-- page footer js -->

   document
     .getElementById("phone-number")
     .addEventListener("input", function (e) {
       var value = e.target.value;
       e.target.value = value.replace(/[^\d]/g, "");
     });
