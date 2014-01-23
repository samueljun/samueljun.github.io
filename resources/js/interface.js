function loadTab() {
	var hash = window.location.hash;
	if (hash != "") {
		$("a[href='" + hash + "']").tab("show");
	}
}

$(document).ready(function() {
	loadTab();
	$(window).on("hashchange", loadTab);
});
