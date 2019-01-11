const router = new VueRouter({
	mode: "history",
	routes: [
		{
			name: "index",
			path: "/",
			component: function(resolve, reject) {
				template(resolve, reject, "index", {
					mounted: function() {
						Prism.highlightAll();
					}
				});
			}
		}
	]
});
