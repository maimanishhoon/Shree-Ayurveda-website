const carouselImages = document.querySelector('.carousel-images');
const slides = document.querySelectorAll('.carousel-images > div');
const totalSlides = slides.length;
let currentSlide = 0;

function goToSlide(slideIndex) {
    const offset = -slideIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
}

let slideInterval = setInterval(nextSlide, 6000);

document.getElementById('nextBtn').addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 6000);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
    slideInterval = setInterval(nextSlide, 6000);
});

// svg animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedSVGs = document.querySelectorAll('.animate-draw');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const svg = entry.target;
          svg.style.animation = 'none';
          svg.offsetHeight; // Trigger reflow
          svg.style.animation = null;
          
          // Optional: Unobserve after animation to prevent unnecessary re-animations
          // observer.unobserve(svg);
        }
      });
    }, observerOptions);
  
    animatedSVGs.forEach(svg => {
      observer.observe(svg);
    });
  });
// pop up 
document.addEventListener("DOMContentLoaded", () => {
    // Show popup after 7 seconds
    setTimeout(() => {
      document.getElementById("popupForm").classList.remove("hidden");
      document.getElementById("popupForm").classList.add("flex");
    }, 7000);

    // Close popup on close icon click
    document.getElementById("closePopup").addEventListener("click", () => {
      document.getElementById("popupForm").classList.add("hidden");
    });
  });

//   card flip 
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.flip-card');
  
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)';
      });
  
      card.addEventListener('mouseleave', () => {
        card.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)';
      });
    });
  });
 
  document.addEventListener('scroll', () => {
    const counter = document.getElementById('counter');
    const targetValue = 500;
    const scrollPosition = window.scrollY + window.innerHeight;
    const triggerPosition = counter.offsetTop;

    // Check if the counter is in view
    if (scrollPosition >= triggerPosition) {
        let start = 0;
        let duration = 2000; // 4 seconds for the full animation
        let startTime = null;

        const countUp = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * targetValue);
            counter.innerText = value;

            if (progress < 1) {
                requestAnimationFrame(countUp);
            }
        };

        // Trigger the animation
        requestAnimationFrame(countUp);
    }
});
//  typing text document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-images');
    const slides = Array.from(carousel.children);
    const typingTexts = document.querySelectorAll('.typing-text');
    let currentSlide = 0;
    let typingInterval;
  
    function typeText(element) {
      const text = element.getAttribute('data-text');
      let index = element.textContent.length;
  
      clearInterval(typingInterval);
  
      typingInterval = setInterval(() => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust typing speed here
    }
  
    function showSlide(index) {
      const offset = index * -100;
      carousel.style.transform = `translateX(${offset}%)`;
      
      // Clear all typing texts
      typingTexts.forEach(el => el.textContent = '');
      
      // Start typing for the current slide
      typeText(typingTexts[index]);
  
      currentSlide = index;
    }
  
    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }
  
    function prevSlide() {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    }
  
    // Event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
  
    // Start with the first slide
    showSlide(0);
  
    // Optional: Auto-advance slides
    setInterval(nextSlide, 8000); // Change slide every 7 seconds
  });
  // nav bar 
  document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');
  
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('hidden');
    });
  
    closeMobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  });
  