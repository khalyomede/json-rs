Vue.component("rs-menu", function(resolve, reject) {
	template(resolve, reject, "menu", {
		mounted: function() {
			M.AutoInit();
		}
	});
});
