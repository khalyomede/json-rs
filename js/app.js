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
			name: "documentation-native-guards",
			path: "/rs-json/documentation/native-guards",
			component: function(resolve, reject) {
				template(resolve, reject, "documentation/native-guards", {
					data: function() {
						return {
							guards: [
								{
									id: 1,
									title: "Filled",
									applyTo: ["string"],
									code: "filled",
									description:
										"Fails if the string only contains spaces or line return."
								},
								{
									id: 2,
									title: "Minimum",
									applyTo: [
										"string",
										"integer",
										"float",
										"date",
										"time",
										"datetime"
									],
									code: "min:5",
									description:
										"Fails if the data is lower than the parameter."
								},
								{
									id: 3,
									title: "Maximum",
									applyTo: [
										"string",
										"integer",
										"float",
										"date",
										"time",
										"datetime"
									],
									code: "max:5",
									description:
										"Fails if the data is greater than the parameter."
								},
								{
									id: 4,
									title: "Name",
									applyTo: ["string"],
									code: "name",
									description:
										"Fails if the string is not a human name."
								},
								{
									id: 5,
									title: "Same as a property",
									applyTo: [
										"string",
										"integer",
										"float",
										"date",
										"time",
										"datetime"
									],
									code: "same-as:password",
									description:
										"Fails if the property is not equal to another property."
								},
								{
									id: 6,
									title: "Email",
									applyTo: ["string"],
									code: "email",
									description:
										"Fails if the string is not an email."
								},
								{
									id: 7,
									title: "URL",
									applyTo: ["string"],
									code: "url",
									description:
										"Fails if the string is not a valid URL."
								},
								{
									id: 8,
									title: "domain",
									applyTo: ["string"],
									code: "domain",
									description:
										"Fails if the string is not a valid internet domain."
								},
								{
									id: 9,
									title: "ip",
									applyTo: ["string"],
									code: "ip",
									description:
										"Fails if the string is not a valid IP."
								},
								{
									id: 10,
									title: "Regular expression",
									applyTo: ["string"],
									code: "regexp:[a-z]",
									description:
										"Fails if the string does not match the regular expression."
								},
								{
									id: 11,
									title: "Starts with",
									applyTo: ["string", "integer", "float"],
									code: "start:test@",
									description:
										"Fails if the property does not starts with the parameter."
								},
								{
									id: 12,
									title: "Ends with",
									applyTo: ["string", "integer", "float"],
									code: "end:@gmail.com",
									description:
										"Fails if the property does not ends with the parameter"
								},
								{
									id: 13,
									title: "Contains",
									applyTo: ["string"],
									code: "contain:gmail",
									description:
										"Fails if the string does not contain the parameter."
								}
							]
						};
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
