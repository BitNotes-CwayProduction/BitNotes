
document.onreadystatechange = function() {
	if (document.readyState == 'complete') {
		addListeners();
		return;
	}
}

function addListeners() {
	document.forms.rawsearch.getElementsByTagName('input')[0].addEventListener('input', function (e) {
		if (this.value == "") {
			this.parentElement.style.width = "150px";
		} else {
			this.parentElement.style.width = "300px";
		}
	});
}

function blank_submit_validate () {
	console.log(this);
}

