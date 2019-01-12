Vue.component("rs-edit-proposal-fab", function(resolve, reject) {
	template(resolve, reject, "edit-proposal-fab", {
		props: {
			href: {
				type: String,
				required: true
			}
		}
	});
});
