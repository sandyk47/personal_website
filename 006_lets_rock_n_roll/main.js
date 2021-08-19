let span = document.getElementsByClassName('carousel-nav');
let company = document.getElementsByClassName('company')
let company_page = Math.ceil(company.length/4);
let l = 0;
let movePer = 51;
let maxMove = 450;

// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches)
	{
	movePer = 53;
	maxMove = 950;
	}

let right_mover = ()=>{
	l = l + movePer;
	if (company == 1){l = 0; }
	for(const i of company)
	{
		if (l > maxMove){l = l - movePer;}
		i.style.left = '-' + l + '%';
	}

}
let left_mover = ()=>{
	l = l - movePer;
	if (l<=0){l = 0;}
	for(const i of company){
		if (company_page>1){
			i.style.left = '-' + l + '%';
		}
	}
}

span[1].onclick = ()=>{right_mover();}
span[0].onclick = ()=>{left_mover();}


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
