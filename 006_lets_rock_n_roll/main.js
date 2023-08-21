// #################################### CLIENTS CAROUSEL CODE

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



// #################################### ARTICLE CAROUSEL CODE

document.querySelector('.article-carousel').scrollLeft = 0;

const articlePrevBtn = document.querySelector('.article-carousel-prev');
const articleNextBtn = document.querySelector('.article-carousel-next');
const articleContent = document.querySelector('.article-carousel');

let articlesOnScreen = 3; // Default value for larger screens

window.addEventListener('resize', () => {
    // Update the number of articles displayed based on the screen size.
    if (window.innerWidth <= 600) {
        articlesOnScreen = 1;
    } else if (window.innerWidth <= 900) {
        articlesOnScreen = 2;
    } else {
        articlesOnScreen = 3;
    }
    checkArticleButtons();
});

articlePrevBtn.addEventListener('click', () => {
    articleContent.scrollLeft -= articleContent.clientWidth / articlesOnScreen; 
    checkArticleButtons();
});

articleNextBtn.addEventListener('click', () => {
    articleContent.scrollLeft += articleContent.clientWidth / articlesOnScreen; 
    checkArticleButtons();
});

// Disable/enable the buttons based on the scroll position.
function checkArticleButtons() {
    const maxScroll = articleContent.scrollWidth - articleContent.clientWidth;

    if (articleContent.scrollLeft <= 0) {
        articlePrevBtn.disabled = true;
    } else {
        articlePrevBtn.disabled = false;
    }

    if (articleContent.scrollLeft >= maxScroll - (articleContent.clientWidth * 0.1)) { 
        articleNextBtn.disabled = true;
    } else {
        articleNextBtn.disabled = false;
    }
}

// Initialize with the current setting.
window.dispatchEvent(new Event('resize'));


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
