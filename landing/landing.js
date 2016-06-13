function addListeners() {
	listenToSearchIcon();
	showQuickStats();
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
			cond.style.marginLeft = 10;
		} else {
			cond.style.marginLeft = -1000;
		}
		// console.log('function complete');
	});
}

addListeners();


// Jquery

jQuery(document).ready(function() {
	$("#top-header").on("click","#profilepic-container",function(){
		$("#top-header").find(".dropdown-list").slideToggle();
	});
});
