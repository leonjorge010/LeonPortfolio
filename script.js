// ===========================
// Mobile Navigation Toggle
// ===========================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// ===========================
// Smooth Scrolling
// ===========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const navHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = target.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ===========================
// Navbar Scroll Effect & Nav Brand Visibility
// ===========================
let lastScroll = 0;
const navbar = document.querySelector(".navbar");
const navBrand = document.querySelector(".nav-brand");
const aboutSection = document.getElementById("about");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Add shadow on scroll
  if (currentScroll > 50) {
    navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
  }

  // Show/hide nav brand when reaching about section
  if (aboutSection) {
    const aboutTop = aboutSection.offsetTop;
    const aboutHeight = aboutSection.offsetHeight;
    const navHeight = navbar.offsetHeight;

    // Show when user reaches the about section
    if (currentScroll + navHeight >= aboutTop) {
      navBrand.classList.add("visible");
    } else {
      navBrand.classList.remove("visible");
    }
  }

  lastScroll = currentScroll;
});

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll(
  ".timeline-item, .project-card, .skill-category, .stat"
);
animatedElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// ===========================
// Active Navigation Link
// ===========================
const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.style.color = "var(--primary-color)";
      } else {
        navLink.style.color = "var(--text-primary)";
      }
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

// ===========================
// Typing Effect for Hero Title (Optional Enhancement)
// ===========================
const heroSubtitle = document.querySelector(".hero-subtitle");
const originalText = heroSubtitle.textContent;
let charIndex = 0;

function typeWriter() {
  if (charIndex < originalText.length) {
    heroSubtitle.textContent = originalText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeWriter, 50);
  }
}

// Uncomment to enable typing effect
heroSubtitle.textContent = "";
typeWriter();

// ===========================
// Dynamic Year in Footer
// ===========================
const footer = document.querySelector(".footer p");
if (footer) {
  const currentYear = new Date().getFullYear();
  footer.textContent = `© ${currentYear} Jorge Leon. All rights reserved.`;
}

// ===========================
// Preloader (Optional)
// ===========================
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// ===========================
// Email Protection (Basic)
// ===========================
// This helps prevent simple email scrapers
document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    // Optional: Add analytics tracking here
    console.log("Email link clicked");
  });
});

// ===========================
// Photo Carousel
// ===========================
const carouselTrack = document.querySelector(".carousel-track");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
const indicators = document.querySelectorAll(".indicator");

let currentSlide = 0;
const totalSlides = carouselSlides.length;

// Update carousel position
const updateCarousel = () => {
  const slideWidth = carouselSlides[0].offsetWidth;
  carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  // Update indicators
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });

  // Update slide active class
  carouselSlides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
};

// Next slide
const nextSlide = () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
};

// Previous slide
const prevSlide = () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
};

// Go to specific slide
const goToSlide = (slideIndex) => {
  currentSlide = slideIndex;
  updateCarousel();
};

// Event listeners
if (prevBtn) {
  prevBtn.addEventListener("click", prevSlide);
}

if (nextBtn) {
  nextBtn.addEventListener("click", nextSlide);
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => goToSlide(index));
});

// Auto-play carousel (optional - uncomment to enable)
// let autoplayInterval = setInterval(nextSlide, 5000);

// Pause autoplay on hover (if autoplay is enabled)
// const carouselContainer = document.querySelector('.carousel-container');
// if (carouselContainer) {
//     carouselContainer.addEventListener('mouseenter', () => {
//         clearInterval(autoplayInterval);
//     });
//     carouselContainer.addEventListener('mouseleave', () => {
//         autoplayInterval = setInterval(nextSlide, 5000);
//     });
// }

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  }
});

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

if (carouselTrack) {
  carouselTrack.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carouselTrack.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
}

const handleSwipe = () => {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
};

// Update carousel on window resize
window.addEventListener("resize", updateCarousel);

// ===========================
// Back to Top Button (Optional)
// ===========================
const createBackToTop = () => {
  const button = document.createElement("button");
  button.innerHTML = "↑";
  button.className = "back-to-top";
  button.setAttribute("aria-label", "Back to top");

  button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      button.style.opacity = "1";
      button.style.visibility = "visible";
    } else {
      button.style.opacity = "0";
      button.style.visibility = "hidden";
    }
  });

  document.body.appendChild(button);
};

// Uncomment to enable back to top button
createBackToTop();

// ===========================
// Console Message
// ===========================
console.log(
  "%cJorge Leon Portfolio",
  "color: #2563eb; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cInterested in the code? Check out the repository!",
  "color: #6b7280; font-size: 12px;"
);
