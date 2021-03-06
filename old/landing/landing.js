function addListeners() {
	listenToSearchIcon();
	showQuickStats();
	likeHit();
}

function listenToSearchIcon() {
	var sbox = document.getElementById('searchbox');
	var sicon = document.getElementById('searchicon');
	var sinput = sbox.getElementsByTagName('input')[0];

	sicon.addEventListener('click', function() {
		if (sinput.value.length == 0) {
			sbox.getElementsByTagName('input')[0].focus();
		} else {
			sbox.getElementsByTagName('form')[0].submit();
		}
	})
}

function showQuickStats() {
	document.getElementById('quickstats-toggler').addEventListener('click', function() {
		var cond = document.getElementById('quickstats-menu');
		if (parseInt(cond.style.marginLeft) < 0) {
			this.getElementsByTagName('span')[0].style.color = "blue";
			cond.style.marginLeft = 10;
		} else {
			this.getElementsByTagName('span')[0].style.color = "black";
			cond.style.marginLeft = -1000;
		}
	});
}

function likeHit() {
	var buttonList = document.getElementsByClassName('content-likes');
	for (var i = 0; i < buttonList.length; i++) {
		buttonList[i].style.opacity = '0.2';
		 buttonList[i].parentElement.addEventListener('click', function() {
			 var curbutton = this.getElementsByClassName('content-likes')[0];
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
