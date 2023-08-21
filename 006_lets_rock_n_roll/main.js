// #################################### CAROUSEL CODE

const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const content = document.querySelector('.carousel-content');

let logosOnScreen = 4; // Default value for larger screens

window.addEventListener('resize', () => {
    // Update the number of logos displayed based on the screen size.
    if (window.innerWidth <= 600) {
        logosOnScreen = 2;
    } else if (window.innerWidth <= 900) {
        logosOnScreen = 3;
    } else {
        logosOnScreen = 4;
    }
    checkButtons();
});

prevBtn.addEventListener('click', () => {
    content.scrollLeft -= content.clientWidth; // Move by the visible width of the carousel.
    checkButtons();
});

nextBtn.addEventListener('click', () => {
    content.scrollLeft += content.clientWidth; // Move by the visible width of the carousel.
    checkButtons();
});

// Disable/enable the buttons based on the scroll position.
function checkButtons() {
    const maxScroll = content.scrollWidth - content.clientWidth;

    if (content.scrollLeft <= 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (content.scrollLeft >= maxScroll - (content.clientWidth * 0.1)) { // added a buffer
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

// Initialize with the current setting.
window.dispatchEvent(new Event('resize'));



// #################################### ARTICLE CAROUSEL CONTENT

document.addEventListener('DOMContentLoaded', function() {

    const prevButton = document.querySelector('.article-carousel-prev');
    const nextButton = document.querySelector('.article-carousel-next');
    const carouselContent = document.querySelector('.article-carousel-content');
    
    let cardWidth = document.querySelector('.article-card').offsetWidth;
    const cardStyle = getComputedStyle(document.querySelector('.article-card'));
    const cardMargin = parseFloat(cardStyle.marginRight) + parseFloat(cardStyle.marginLeft);
    
    function updateCardWidth() {
        cardWidth = document.querySelector('.article-card').offsetWidth + cardMargin;
    }

    function getVisibleCards() {
        const visibleWidth = carouselContent.offsetWidth;
        const numOfVisibleCards = Math.round(visibleWidth / cardWidth);
        return (numOfVisibleCards > 1) ? numOfVisibleCards - 1 : numOfVisibleCards;
    }

    prevButton.addEventListener('click', function() {
        const visibleCards = getVisibleCards();
        carouselContent.scrollLeft -= cardWidth * visibleCards;
    });

    nextButton.addEventListener('click', function() {
        const visibleCards = getVisibleCards();
        carouselContent.scrollLeft += cardWidth * visibleCards;
    });

    window.addEventListener('resize', updateCardWidth);

    carouselContent.addEventListener('scroll', function() {
        if (carouselContent.scrollLeft < 0) {
            carouselContent.scrollLeft = 0;
        }
        
        if (carouselContent.scrollLeft + carouselContent.offsetWidth > carouselContent.scrollWidth) {
            carouselContent.scrollLeft = carouselContent.scrollWidth - carouselContent.offsetWidth;
        }
    });
});






// #################################### HIGHLIGHTING MENU ITEM


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
