Vue.component("rs-button-link", function(resolve, reject) {
	template(resolve, reject, "button-link", {
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
