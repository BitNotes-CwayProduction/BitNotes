
document.onreadystatechange = function() {
	if (document.readyState == 'complete') {
		addListeners();
		return;
	}
}

function addListeners() {
	quickstats_display_toggle();
	searchbar_width_change();
	show_dropdown();
}

function show_dropdown() {
	var elem = document.getElementsByClassName('profilepic_container')[0];
	elem.addEventListener('click', function() {
	this.getElementsByClassName('dropdown')[0].classList.toggle('elem-hidden');
	document.getElementsByClassName('sidebar')[0].classList.toggle('elem-hidden');
	document.getElementById('dropdown-arrow').classList.toggle('uparrow');
	});
}

function searchbar_width_change() {
	document.forms.rawsearch.getElementsByTagName('input')[0].addEventListener('input', function (e) {
		if (this.value == "") {
			this.parentElement.style.width = "150px";
			this.parentElement.style.boxShadow = "none";
			this.style.fontStyle = "oblique";
		} else {
			this.parentElement.style.width = "300px";
			this.parentElement.style.boxShadow = "0px 0px 5px 3px #87cefa";
			this.fontStyle = "normal";
		}
	});
}

function quickstats_display_toggle() {
	var quickstats = document.getElementsByClassName('quickstats')[0];
	var sidebar = document.getElementsByClassName('sidebar')[0];
	sidebar.addEventListener('click', function() {
		if (quickstats.style.display == "none") {
			quickstats.style.display = "block";
		} else {
			quickstats.style.display = "none";
		}
	});
}

function blank_submit_validate () {
	console.log(this);
}

