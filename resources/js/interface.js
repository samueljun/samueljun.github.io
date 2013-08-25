$(document).ready(function() {
	var hash = window.location.hash;
	if (hash != undefined)
		$(hash).tab("show");

	$(".navbar a").click(function (e) {
		$(this).tab("show");
	});
});
