

// <!-- page award js -->
    
const certificates = document.querySelectorAll(".certificate");
let currentIndex = 0;

function showNextCertificate() {
  certificates[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % certificates.length;
  certificates[currentIndex].classList.add("active");
}

setInterval(showNextCertificate, 3000); // Change the certificate every 3 seconds

//   <!-- page footer js -->
document
.getElementById("phone-number")
.addEventListener("input", function (e) {
var value = e.target.value;
e.target.value = value.replace(/[^\d]/g, "");
});