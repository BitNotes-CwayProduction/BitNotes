function addListeners() {
	listenToSearchIcon();
	showQuickStats();
	likeHit();
}

function listenToSearchIcon() {
	document.getElementById('searchicon').addEventListener('click',function () {
		document.getElementById('searchbox').getElementsByTagName('input')[0].focus();
		// console.log('calling from houston');
		// console.log(document.activeElement);
	});
}

function showQuickStats() {
	document.getElementById('quickstats-toggler').addEventListener('click', function() {
		var cond = document.getElementById('quickstats-menu');
		// console.log('sob clicked');
		if (parseInt(cond.style.marginLeft) < 0) {
			this.getElementsByTagName('span')[0].style.color = "blue";
			cond.style.marginLeft = 10;
		} else {
			this.getElementsByTagName('span')[0].style.color = "black";
			cond.style.marginLeft = -1000;
		}
		// console.log('function complete');
	});
}

function likeHit() {
	var buttonList = document.getElementsByClassName('content-likes');
	for (var i = 0; i < buttonList.length; i++) {
		buttonList[i].style.opacity = '0.2';
		 buttonList[i].parentElement.addEventListener('click', function() {
			 var curbutton = this.getElementsByClassName('content-likes')[0];
			//  curbutton.classList.add('content-likes-animate');
			 if (curbutton.style.animation == '') {
				 curbutton.style.animation = 'pound .5s';
			 } else {
				 curbutton.style.animation = '';
			 }
			 var likes = parseInt(this.getElementsByClassName('content-likes-number')[0].innerHTML);
			 if (curbutton.style.opacity == '0.2') {
				 curbutton.style.opacity = '1';
				 this.getElementsByClassName('content-likes-number')[0].innerHTML = (likes+1);
			 } else {
				 curbutton.style.opacity = '.2';
				 this.getElementsByClassName('content-likes-number')[0].innerHTML = (likes-1);
			 }
			 curbutton.blur();
		 });
	}
}
addListeners();

document.getElementsByClassName('content-stats')[0].addEventListener('click', function() {
	// console.log('sob clicked');
});
