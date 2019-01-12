Vue.component("rs-loader", function(resolve, reject) {
	template(resolve, reject, "loader", {
		props: {
			active: {
				type: Boolean,
				default: false
			}
		}
	});
});
