Vue.component("rs-code", function(resolve, reject) {
	template(resolve, reject, "code", {
		props: {
			lang: {
				type: String,
				required: true
			}
		},
		mounted: function() {
			Prism.highlightAll();
		}
	});
});
