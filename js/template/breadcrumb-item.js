Vue.component("rs-breadcrumb-item", function(resolve, reject) {
	template(resolve, reject, "breadcrumb-item", {
		props: {
			to: {
				type: String,
				required: true
			},
			text: {
				type: String,
				required: true
			}
		}
	});
});
