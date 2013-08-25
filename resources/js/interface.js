function loadTab() {
	var hash = window.location.hash;
	if (hash != "")
		$("a[href=\"" + hash + "\"]").tab("show");
}

$(document).ready(function() {
	loadTab();

	$(window).on("hashchange", loadTab);

	$(".navbar a").click(function (e) {
		$(this).tab("show");
	});
});
