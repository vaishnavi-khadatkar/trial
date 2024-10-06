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
 
  // page circle
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 800; // Adjust this value for speed of increment
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.replace("%", "");
      // Lower increment for smoother animation
      const increment = target / speed;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}%`;
        setTimeout(updateCount, 50); // Adjust this for smoother animation
      } else {
        counter.innerText = `${target}%`;
      }
    };
    // Start count from 0%
    counter.innerText = "0%";
    updateCount();
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