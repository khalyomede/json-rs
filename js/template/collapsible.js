Vue.component("rs-collapsible", function(resolve, reject) {
	template(resolve, reject, "collapsible", {
		mounted: function() {
			M.AutoInit();
		}
	});
});
