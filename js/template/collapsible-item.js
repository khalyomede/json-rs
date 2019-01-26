Vue.component("rs-collapsible-item", function(resolve, reject) {
	template(resolve, reject, "collapsible-item", {
		props: {
			title: {
				type: String,
				required: true
			},
			active: {
				type: Boolean,
				default: false
			}
		}
	});
});
