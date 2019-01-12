Vue.component("rs-collection-item", function(resolve, reject) {
	template(resolve, reject, "collection-item", {
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
