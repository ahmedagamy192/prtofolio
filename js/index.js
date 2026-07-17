//dark light mood
const togglerBtn = document.getElementById("theme-toggle-button");
const htmlElem =document.documentElement;

const currentTheme = localStorage.getItem("theme");
if(currentTheme === "dark"){
    htmlElem.classList.add("dark-mode");
    togglerBtn.setAttribute("aria-pressed","true");
}

togglerBtn.addEventListener("click",function(){
    htmlElem.classList.toggle("dark-mode");
    let theme ="light";
    if(htmlElem.classList.contains("dark-mode")){
        theme="dark";
        togglerBtn.setAttribute("aria-pressed", "true");
    }
    else{togglerBtn.setAttribute("aria-pressed", "false");}
   localStorage.setItem("theme",theme)
})


// SCROLL TO TOP
document.addEventListener('DOMContentLoaded', function() {
  const scrollBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
 
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
     
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false"); 
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      const filterValue = button.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        if (filterValue === "all" || filterValue === itemCategory) {
          
          item.style.display = "block";

          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 50);
        } else {
     
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";

          setTimeout(() => {
            item.style.display = "none";
          }, 300); 
        }
      });
    });
  });
});


//testmonials

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("testimonials-carousel");
  const slides = document.querySelectorAll(".testimonial-slide");
  const nextBtn = document.getElementById("next-testimonial");
  const prevBtn = document.getElementById("prev-testimonial");
  const indicators = document.querySelectorAll(".carousel-indicator");

  let currentIndex = 0;
  let cardsToShow = 3; 

  // display by responsive screen
  function updateCardsToShow() {
    const width = window.innerWidth;
    if (width < 576) {
      cardsToShow = 1; 
    } else if (width < 992) {
      cardsToShow = 2;
    } else {
      cardsToShow = 3; 
    }
   
    const maxIndex = slides.length - cardsToShow;
    if (currentIndex > maxIndex) {
      currentIndex = Math.max(0, maxIndex);
    }
    moveCarousel();
    updateIndicators();
  }

  function moveCarousel() {
   
    const slideWidth = 100 / cardsToShow;
    const offset = currentIndex * slideWidth;

    carousel.style.transform = `translateX(${offset}%)`;
  }

  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active");
        indicator.setAttribute("aria-selected", "true");
      } else {
        indicator.classList.remove("active");
        indicator.setAttribute("aria-selected", "false");
      }
    });
  }

  function showNext() {
    const maxIndex = slides.length - cardsToShow;
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    moveCarousel();
    updateIndicators();
  }

  function showPrev() {
    const maxIndex = slides.length - cardsToShow;
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex; 
    }
    moveCarousel();
    updateIndicators();
  }

  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  indicators.forEach((indicator) => {
    indicator.addEventListener("click", (e) => {
      const index = parseInt(e.target.getAttribute("data-index"));
      const maxIndex = slides.length - cardsToShow;

      if (index <= maxIndex) {
        currentIndex = index;
        moveCarousel();
        updateIndicators();
      }
    });
  });

  window.addEventListener("resize", updateCardsToShow);


  updateCardsToShow();
});


