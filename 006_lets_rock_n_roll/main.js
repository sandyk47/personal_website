let span = document.getElementsByTagName('span');
	let company = document.getElementsByClassName('company')
	let company_page = Math.ceil(company.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 410;
	
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 30;
	 	maxMove = 900;
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