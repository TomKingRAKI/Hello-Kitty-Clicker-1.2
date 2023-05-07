let punkty = 0;
let bakeryCena = 100;
let wiecejPunktowCena = 50;
let bakeryLiczba = 0;
let wiecejPunktowLiczba = 1;

// Hellokittyblock elementy
const obrazek = document.getElementById('obrazek');
const punktyElement = document.getElementById('punkty');
const bakeryButton = document.getElementById('bakeryupgrade');
const wiecejPunktowButton = document.getElementById('wiecejPunktow');
const resetButton = document.getElementById('resetButton');
const resetyes = document.getElementById('resetyes');
const resetno = document.getElementById('resetno');
const acceptresetblock = document.getElementById('acceptresetblock');
const acceptresetbackground = document.getElementById('acceptresetbackground');

// Elementy Piekarnia
const tlobakery = document.getElementById('bakerytlo')
const firstbuybakery = document.getElementById('firstbuybakery')
const secondbuybakery = document.getElementById('secondbuybakery')
const thirdbuybakery = document.getElementById('thirdbuybakery')
const fourbuybakery = document.getElementById('fourbuybakery')
const fivebuybakery = document.getElementById('fivebuybakery')
const sixbuybakery = document.getElementById('sixbuybakery')
const sevenbuybakery = document.getElementById('sevenbuybakery')
const eightbuybakery = document.getElementById('eightbuybakery')
const ninebuybakery = document.getElementById('ninebuybakery')
const tenbuybakery = document.getElementById('tenbuybakery')
const elevenbuybakery = document.getElementById('elevenbuybakery')
const twelwbuybakery = document.getElementById('twelwbuybakery')
const trzynasciebuybakery = document.getElementById('trzynasciebuybakery')
const czternasciebuybakery = document.getElementById('czternasciebuybakery')
const pietnasciebuybakery = document.getElementById('pietnasciebuybakery')
const szesnasciebuybakery = document.getElementById('szesnasciebuybakery')
const siedemnasciebuybakery = document.getElementById('siedemnasciebuybakery')
const osiemnasciebuybakery = document.getElementById('osiemnasciebuybakery')
const dziewietnasciebuybakery = document.getElementById('dziewietnasciebuybakery')
const dwadziesciabuybakery = document.getElementById('dwadziesciabuybakery')
const twentyonebuybakery = document.getElementById('twentyonebuybakery')
const twentytwobuybakery = document.getElementById('twentytwobuybakery')
const twentythreebuybakery = document.getElementById('twentythreebuybakery')
const twentyfourbuybakery = document.getElementById('twentyfourbuybakery')
const twentyfivebuybakery = document.getElementById('twentyfivebuybakery')
const twentysixbuybakery = document.getElementById('twentysixbuybakery')
const twentysevenbuybakery = document.getElementById('twentysevenbuybakery')
const twentyeightbuybakery = document.getElementById('twentyeightbuybakery')
const twentyninebuybakery = document.getElementById('twentyninebuybakery')
const thirtybuybakery = document.getElementById('thirtybuybakery')
const bakeryhr = document.getElementById('bakeryhr')




// Funkcja obsługująca przycisk RESET ALL
resetButton.addEventListener('click', function() {
	acceptresetblock.style.visibility = 'visible'
	acceptresetbackground.style.visibility = 'visible'
});

resetno.addEventListener('click', function() {
	acceptresetblock.style.visibility = 'hidden'
	acceptresetbackground.style.visibility = 'hidden'
});

resetyes.addEventListener('click', function() {
    punkty = 0;
    bakeryCena = 100;
    wiecejPunktowCena = 50;
    bakeryLiczba = 0;
    wiecejPunktowLiczba = 1;
	tlobakery.style.visibility = 'hidden';
	firstbuybakery.style.visibility = 'hidden';
	bakeryhr.style.visibility = 'hidden';
	secondbuybakery.style.visibility = 'hidden';
	thirdbuybakery.style.visibility = 'hidden';
	fourbuybakery.style.visibility = 'hidden';
	fivebuybakery.style.visibility = 'hidden';
	sixbuybakery.style.visibility = 'hidden';
	sevenbuybakery.style.visibility = 'hidden';
	eightbuybakery.style.visibility = 'hidden';
	ninebuybakery.style.visibility = 'hidden';
	tenbuybakery.style.visibility = 'hidden';
	elevenbuybakery.style.visibility = 'hidden';
	twelwbuybakery.style.visibility = 'hidden';
	trzynasciebuybakery.style.visibility = 'hidden';
	czternasciebuybakery.style.visibility = 'hidden';
	pietnasciebuybakery.style.visibility = 'hidden';
	szesnasciebuybakery.style.visibility = 'hidden';
	siedemnasciebuybakery.style.visibility = 'hidden';
	osiemnasciebuybakery.style.visibility = 'hidden';
	dziewietnasciebuybakery.style.visibility = 'hidden';
	dwadziesciabuybakery.style.visibility = 'hidden';
	twentyonebuybakery.style.visibility = 'hidden';
	twentytwobuybakery.style.visibility = 'hidden';
	twentythreebuybakery.style.visibility = 'hidden';
	twentyfourbuybakery.style.visibility = 'hidden';
	twentyfivebuybakery.style.visibility = 'hidden';
	twentysixbuybakery.style.visibility = 'hidden';
	twentysevenbuybakery.style.visibility = 'hidden';
	twentyeightbuybakery.style.visibility = 'hidden';
	twentyninebuybakery.style.visibility = 'hidden';
	secondbuybakery.style.visibility = 'hidden';

	acceptresetblock.style.visibility = 'hidden'
	acceptresetbackground.style.visibility = 'hidden'
	
	localStorage.setItem('punkty', punkty);
	localStorage.setItem('bakeryLiczba', bakeryLiczba);
	localStorage.setItem('bakeryCena', bakeryCena);
	localStorage.setItem('punkty', punkty);
	localStorage.setItem('wiecejPunktowLiczba', wiecejPunktowLiczba);
	localStorage.setItem('wiecejPunktowCena', wiecejPunktowCena);
	
	bakeryButton.innerHTML = `Cook Hello Kitty (cena: ${bakeryCena})`;
    wiecejPunktowButton.innerHTML = `+1 per click (cena: ${wiecejPunktowCena})`;
    punktyElement.innerHTML = punkty.toString();
});


// FUNKCJA AUTO SAVE
window.onload = function() {
	// Pobierz wartości zmiennych z Local Storage
	punkty = parseInt(localStorage.getItem('punkty')) || 0;
	bakeryLiczba = parseInt(localStorage.getItem('bakeryLiczba')) || 0;
	bakeryCena = parseInt(localStorage.getItem('bakeryCena')) || 100;
	wiecejPunktowCena = parseInt(localStorage.getItem('wiecejPunktowCena')) || 50;
	wiecejPunktowLiczba = parseInt(localStorage.getItem('wiecejPunktowLiczba')) || 1;
	
	// Uaktualnij wyświetlane wartości
	punktyElement.innerHTML = punkty.toString();
	bakeryButton.innerHTML = `Cook Hello Kitty (cena: ${bakeryCena})`;
	wiecejPunktowButton.innerHTML = `+1 per click (cena: ${wiecejPunktowCena})`

	// AUTO SAVE PIEKARNIA
	if (bakeryLiczba >= 1) {
		tlobakery.style.visibility = 'visible';
		firstbuybakery.style.visibility = 'visible';
		bakeryhr.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 2) {
		secondbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 3) {
		thirdbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 4) {
		fourbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 5) {
		fivebuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 6) {
		sixbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 7) {
		sevenbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 8) {
		eightbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 9) {
		ninebuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 10) {
		tenbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 11) {
		elevenbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 12) {
		twelwbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 13) {
		trzynasciebuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 14) {
		czternasciebuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 15) {
		pietnasciebuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 16) {
		szesnasciebuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 17) {
		siedemnasciebuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 18) {
		osiemnasciebuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 19) {
		dziewietnasciebuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 20) {
		dwadziesciabuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 21) {
		twentyonebuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 22) {
		twentytwobuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 23) {
		twentythreebuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 24) {
		twentyfourbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 25) {
		twentyfivebuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 26) {
		twentysixbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 27) {
		twentysevenbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 28) {
		twentyeightbuybakery.style.visibility = 'visible';
	}
	if (bakeryLiczba >= 29) {
		twentyninebuybakery.style.visibility = 'visible';
	}
	if (thirtybuybakery >= 30) {
		secondbuybakery.style.visibility = 'visible';
	}
};


// Funkcja obsługująca kliknięce w iobrazek oraz jego animacja
obrazek.addEventListener('click', function() {
	this.style.transform = 'scale(0.92)';
	let obrazekSrc = this.src; // zapisz oryginalny src obrazka
  	this.src = 'hellokittymachajaca.png';
			setTimeout(() => {
				this.src = obrazekSrc;
				this.style.transform = 'scale(1)';
			}, 70);
    punkty = punkty + wiecejPunktowLiczba;
	punktyElement.innerHTML = punkty.toString();
	localStorage.setItem('punkty', punkty);
});

// Funkcja obsługująca zakup bakery
bakeryButton.addEventListener('click', function() {
	if (punkty >= bakeryCena) {
		punkty -= bakeryCena;
		bakeryLiczba++;
		if (bakeryLiczba >= 1) {
			tlobakery.style.visibility = 'visible';
			firstbuybakery.style.visibility = 'visible';
			bakeryhr.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 2) {
			secondbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 3) {
			thirdbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 4) {
			fourbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 5) {
			fivebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 6) {
			sixbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 7) {
			sevenbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 8) {
			eightbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 9) {
			ninebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 10) {
			tenbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 11) {
			elevenbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 12) {
			twelwbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 13) {
			trzynasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 14) {
			czternasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 15) {
			pietnasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 16) {
			szesnasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 17) {
			siedemnasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 18) {
			osiemnasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 19) {
			dziewietnasciebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 20) {
			dwadziesciabuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 21) {
			twentyonebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 22) {
			twentytwobuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 23) {
			twentythreebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 24) {
			twentyfourbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 25) {
			twentyfivebuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 26) {
			twentysixbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 27) {
			twentysevenbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 28) {
			twentyeightbuybakery.style.visibility = 'visible';
		}
		if (bakeryLiczba >= 29) {
			twentyninebuybakery.style.visibility = 'visible';
		}
		if (thirtybuybakery >= 30) {
			secondbuybakery.style.visibility = 'visible';
		}

		bakeryCena = Math.floor(bakeryCena * 1.5);
		bakeryButton.innerHTML = `Cook Hello Kitty (cena: ${bakeryCena})`;
	localStorage.setItem('punkty', punkty);
	localStorage.setItem('bakeryLiczba', bakeryLiczba);
	localStorage.setItem('bakeryCena', bakeryCena);
	localStorage.setItem('bakerytlo', tlobakery.style.visibility)
	localStorage.setItem('firstbuybakery', firstbuybakery.style.visibility)
	localStorage.setItem('bakeryhr', bakeryhr.style.visibility)
}
	
});

// Funkcja obsługująca zakup ulepszenia zwiększającego liczbę punktów za kliknięcie
wiecejPunktowButton.addEventListener('click', function() {
	if (punkty >= wiecejPunktowCena) {
	  punkty -= wiecejPunktowCena;
	  punktyElement.innerHTML = punkty.toString();
	  wiecejPunktowLiczba++;
	  wiecejPunktowCena = wiecejPunktowCena * 2;
	  wiecejPunktowButton.innerHTML = `+1 per click (cena: ${wiecejPunktowCena})`;
	  localStorage.setItem('punkty', punkty);
	  localStorage.setItem('wiecejPunktowLiczba', wiecejPunktowLiczba);
	  localStorage.setItem('wiecejPunktowCena', wiecejPunktowCena);
	}
  });

  
// Funkcja obsługująca bakery
setInterval(function() {
punkty += bakeryLiczba;
punktyElement.innerHTML = punkty.toString();
localStorage.setItem('punkty', punkty);
}, 1000);
czy
