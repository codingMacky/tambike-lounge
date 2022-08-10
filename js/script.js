//Menu function to transform
function handleMenuClick(x) {
  x.classList.toggle("change");

  var menuListContainer = document.querySelector(
    ".content-menu-list-container"
  );
  menuListContainer.classList.toggle("show");

  var contentContainer = document.querySelector(".content-container");
  contentContainer.classList.toggle("padding");

  var imageAndDorContainer = document.querySelector(
    ".carousel-and-dot-container"
  );
  imageAndDorContainer.classList.toggle("active-menu");
}

//Carousel functions
let slideIndex = 1;
showSlides(slideIndex);

function handleCarouselArrowClick(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image-container");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Content menu functions
function handleMenuTextClick(type) {
  var suzukiType = document.querySelector(`${type}`);
  suzukiType.classList.toggle("show");

  var menuPlusIcon = document.querySelector(".plus-icon");
  var menuMinusIcon = document.querySelector(".minus-icon");
  menuPlusIcon.classList.toggle("hide");
  menuMinusIcon.classList.toggle("show");
}

function handleMenuSubTextClick(type) {
  var suzukiType = document.querySelector(`${type}`);
  suzukiType.classList.toggle("show");
}

function handleGoToNextPageClick(item) {
  location.href = "/menuList.html";
  if (typeof Storage !== "undefined") {
    localStorage.setItem("selectedItem", item);
  }
}
