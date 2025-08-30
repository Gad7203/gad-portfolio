
let slideIndex = 0;
let slideTimer;

function initDots() {
  const slides = document.getElementsByClassName("mySlides");
  const dotsContainer = document.getElementById("dots-container");
  dotsContainer.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";
    dot.setAttribute("onclick", `currentSlide(${i+1})`);
    dotsContainer.appendChild(dot);
  }
}

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    let caption = slides[i].querySelector(".caption");
    if (caption) caption.classList.remove("show");
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  let caption = slides[slideIndex-1].querySelector(".caption");
  if (caption) caption.classList.add("show");
  slideTimer = setTimeout(showSlides, 3000);
}

function plusSlides(n) {
  clearTimeout(slideTimer);
  slideIndex += n - 1;
  showSlides();
}

function currentSlide(n) {
  clearTimeout(slideTimer);
  slideIndex = n - 1;
  showSlides();
}

initDots();
showSlides();
