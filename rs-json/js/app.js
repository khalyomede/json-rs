const router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/",
			beforeEnter: (to, from, next) => {
				next({ name: "index" });
			}
		},
		{
			name: "index",
			path: "/rs-json",
			component: function(resolve, reject) {
				template(resolve, reject, "index", {
					mounted: function() {
						Prism.highlightAll();
					}
				});
			}
		},
		{
			name: "documentation",
			path: "/rs-json/documentation",
			component: function(resolve, reject) {
				template(resolve, reject, "documentation");
			}
		},
		{
			name: "documentation-guards",
			path: "/rs-json/documentation/guards",
			component: function(resolve, reject) {
				template(resolve, reject, "documentation/guards", {
					mounted: function() {
						Prism.highlightAll();
					}
				});
			}
		},
		{
			name: "example",
			path: "/rs-json/example",
			component: function(resolve, reject) {
				template(resolve, reject, "example", {
					mounted: function() {
						M.AutoInit();
						Prism.highlightAll();
					}
				});
			}
		},
		{
			name: "404",
			path: "/rs-json/*",
			component: function(resolve, reject) {
				template(resolve, reject, "404");
			}
		}
	]
});

const vue = new Vue({
	el: "#app",
	router: router,
	mounted: function() {
		M.AutoInit();
	},
	data: {
		loading: false
	}
});

router.beforeEach(function(to, from, next) {
	console.log("to", to);

	vue.loading = true;

	next();
});

router.afterEach(function(to, from) {
	vue.loading = false;
});
