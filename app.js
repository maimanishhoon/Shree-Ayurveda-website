document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMobileMenuButton = document.getElementById('close-mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenu.classList.add('hidden');

  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.remove('hidden');
  });

  closeMobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.add('hidden');
  });
});

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

let slideInterval = setInterval(nextSlide, 9000);

document.getElementById('nextBtn').addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 8000);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
    slideInterval = setInterval(nextSlide, 8000);
});


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
          svg.offsetHeight; 
          svg.style.animation = null;
          
        
        }
      });
    }, observerOptions);
  
    animatedSVGs.forEach(svg => {
      observer.observe(svg);
    });
  });
 
document.addEventListener("DOMContentLoaded", () => {
   
    setTimeout(() => {
      document.getElementById("popupForm").classList.remove("hidden");
      document.getElementById("popupForm").classList.add("flex");
    }, 7000);

   
    document.getElementById("closePopup").addEventListener("click", () => {
      document.getElementById("popupForm").classList.add("hidden");
    });
  });


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
 
  document.addEventListener('scroll', function handleScroll() {
    const counter = document.getElementById('counter');
    const targetValue = 500;
    const scrollPosition = window.scrollY + window.innerHeight;
    const triggerPosition = counter.offsetTop;

    if (scrollPosition >= triggerPosition) {
        let start = 0;
        let duration = 2000;
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

        requestAnimationFrame(countUp);

     
        document.removeEventListener('scroll', handleScroll);
    }
});

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
      }, 100); 
    }
  
    function showSlide(index) {
      const offset = index * -100;
      carousel.style.transform = `translateX(${offset}%)`;
      
      
      typingTexts.forEach(el => el.textContent = '');
      
      
      typeText(typingTexts[index]);
  
      currentSlide = index;
    }
  
    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }
  
    function prevSlide() {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    }
  
    
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
  
  
    showSlide(0);
  
   
    setInterval(nextSlide, 8000);
  });


  