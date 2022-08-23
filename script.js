let next = document.querySelector('.next') 
let back = document.querySelector('.back') 
let galery = document.querySelector('.galery ul') 
let left = 0;

let i = 1;
for(let li of document.querySelectorAll('li')) {
	li.style.position = 'relative';
	li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
	i++;
}

function clickNext() {
	
	if (left != -1170) {
		left = left - 390;
		galery.style.left = left + 'px';
		} else { 
		left = 0
		galery.style.left = left + 'px';
	}
	
}

function clickBack(){
	if (left != 0) {
		left = left + 390;
		galery.style.left = left + 'px';
		} else { 
		left = -1170
		galery.style.left = left + 'px';
		
	}
}

next.addEventListener('click', clickNext );
back.addEventListener('click', clickBack );