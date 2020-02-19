if (!global._babelPolyfill) {
	require('babel-polyfill');
}

const DOM = {
	rocket: document.querySelector('.rocket'),
	greenBall: document.querySelector('.green-ball'),
	bluePlanet: document.querySelector('.blue-planet'),
	redPlanet: document.querySelector('.red-planet'),
	saturn: document.querySelector('.saturn'),
	stars: document.querySelector('.stars'),
	navToggle: document.querySelector('.nav-button'),
	navList: document.querySelector('.nav-list'),
	btnarrow: document.querySelector('.btn-arrow'),
}


function moveAlone() {
	Array.from(document.querySelector('.planets').children).forEach(el => {
		el.classList.add(`transform-${el.id}`);
	});
}
if (window.scrollY <= 500)
	moveAlone();

// POSITION RELATED
window.addEventListener('resize', () => {
	if (window.innerWidth >= 992) {
		DOM.navList.classList.remove('nav-list-toggled');
		DOM.navToggle.classList.remove('change');
	}
});

window.addEventListener('scroll', () => {
	if (window.scrollY <= 500)
		moveAlone();
	if (window.scrollY > 450) {
		document.querySelector('.about-us').classList.add('fromRight');
		document.querySelector('.about-us-img').classList.add('fromLeft');
		document.querySelector('.about-social').classList.add('fromLeft');
	} else {
		document.querySelector('.about-us').classList.remove('fromRight');
		document.querySelector('.about-us-img').classList.remove('fromLeft');
		document.querySelector('.about-social').classList.remove('fromLeft');
	}



	if (window.scrollY >= 1095) {
		Array.from(document.querySelectorAll('.program')).forEach((e, index) => {
			if (index < 3)
				e.classList.add('fromBottom');
			else
				setTimeout(() => {
					e.classList.add('fromBottom');
				}, 500);
		});

	} else {
		Array.from(document.querySelectorAll('.program')).forEach(e => {
			e.classList.remove('fromBottom');
		});
	}

	if (window.scrollY >= 2650) {
		document.querySelector('.activity-1').classList.add('fromLeft');
		document.querySelector('.activity-2').classList.add('fromBottom');
		document.querySelector('.activity-3').classList.add('fromRight');
	} else {
		document.querySelector('.activity-1').classList.remove('fromLeft');
		document.querySelector('.activity-2').classList.remove('fromBottom');
		document.querySelector('.activity-3').classList.remove('fromRight');
	}
});



DOM.navToggle.addEventListener('click', (e) => {

	DOM.navToggle.classList.toggle('change');
	DOM.navList.classList.toggle('nav-list-toggled');
	if (DOM.navList.classList.contains('change'))
		DOM.navList.classList.add('nav-list-toggled');

});

DOM.btnarrow.addEventListener('click', () => {
	window.scrollBy(0, window.innerHeight);
});

let activityCard1Counter = 2;
let activityCard2Counter = 2;
let activityCard3Counter = 2;



function changeBackground()
// body
{
	// since this is static we're not using ..
	// if hosted => use ..
	setInterval(() => {
		document.querySelector('.activity-1 .activity-img').style.opacity = 0;
		document.querySelector('.activity-1 .activity-img').style.background = `url("img/hult-prize/final-event-${activityCard1Counter}.jpg") center center no-repeat`;
		setTimeout(() => {
			document.querySelector('.activity-1 .activity-img').style.opacity = 1;
		}, 50);
		activityCard1Counter = activityCard1Counter === 7 ? 1 : ++activityCard1Counter;
	}, 2500);

}
setInterval(() => {
	document.querySelector('.activity-2 .activity-img').style.opacity = 0;
	document.querySelector('.activity-2 .activity-img').style.background = `url("img/total/total-${activityCard2Counter}.jpg") center center no-repeat`;
	setTimeout(() => {
		document.querySelector('.activity-2 .activity-img').style.opacity = 1;
	}, 60);
	activityCard2Counter = activityCard2Counter === 5 ? 1 : ++activityCard2Counter;
}, 2500);

setInterval(() => {
	document.querySelector('.activity-3 .activity-img').style.opacity = 0;
	document.querySelector('.activity-3 .activity-img').style.background = `url("img/sprint/sprint-${activityCard3Counter}.jpg") center center no-repeat`;
	setTimeout(() => {
		document.querySelector('.activity-3 .activity-img').style.opacity = 1;
	}, 70);
	activityCard3Counter = activityCard3Counter === 5 ? 1 : ++activityCard3Counter;
}, 2500);


changeBackground();
