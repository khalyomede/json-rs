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
			path: "/rs-json/documentation/guards/native-guards",
			component: function(resolve, reject) {
				template(
					resolve,
					reject,
					"documentation/guards/native-guards",
					{
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
										title: "Different than",
										applyTo: [
											"string",
											"integer",
											"float",
											"date",
											"time",
											"datetime"
										],
										code: "different-than:label",
										description:
											"Fails if the property is equal to another property"
									},
									{
										id: 7,
										title: "Email",
										applyTo: ["string"],
										code: "email",
										description:
											"Fails if the string is not an email."
									},
									{
										id: 8,
										title: "URL",
										applyTo: ["string"],
										code: "url",
										description:
											"Fails if the string is not a valid URL."
									},
									{
										id: 9,
										title: "domain",
										applyTo: ["string"],
										code: "domain",
										description:
											"Fails if the string is not a valid internet domain."
									},
									{
										id: 10,
										title: "ip",
										applyTo: ["string"],
										code: "ip",
										description:
											"Fails if the string is not a valid IP."
									},
									{
										id: 11,
										title: "Regular expression",
										applyTo: ["string"],
										code: "regexp:[a-z]",
										description:
											"Fails if the string does not match the regular expression."
									},
									{
										id: 12,
										title: "Starts with",
										applyTo: ["string", "integer", "float"],
										code: "start:test@",
										description:
											"Fails if the property does not starts with the parameter."
									},
									{
										id: 13,
										title: "Ends with",
										applyTo: ["string", "integer", "float"],
										code: "end:@gmail.com",
										description:
											"Fails if the property does not ends with the parameter"
									},
									{
										id: 14,
										title: "Contains",
										applyTo: ["string"],
										code: "contain:gmail",
										description:
											"Fails if the string does not contain the parameter."
									},
									{
										id: 15,
										title: "Timezone",
										applyTo: ["string"],
										code: "timezone",
										description:
											"Fails if the string is not a valid timezone."
									}
								]
							};
						}
					}
				);
			}
		},
		{
			name: "documentation-custom-guards",
			path: "/rs-json/documentation/guards/custom-guards",
			component: function(resolve, reject) {
				template(
					resolve,
					reject,
					"documentation/guards/custom-guards",
					{
						mounted: function() {
							M.AutoInit();
							Prism.highlightAll();
						}
					}
				);
			}
		},
		{
			name: "documentation-types",
			path: "/rs-json/documentation/types",
			component: function(resolve, reject) {
				template(resolve, reject, "documentation/types", {
					mounted: function() {
						Prism.highlightAll();
					}
				});
			}
		},
		{
			name: "documentation-native-types",
			path: "/rs-json/documentation/types/native-types",
			component: function(resolve, reject) {
				template(resolve, reject, "documentation/types/native-types", {
					mounted: function() {
						M.AutoInit();
					}
				});
			}
		},
		{
			name: "documentation-custom-types",
			path: "/rs-json/documentation/types/custom-types",
			component: function(resolve, reject) {
				template(resolve, reject, "documentation/types/custom-types", {
					mounted: function() {
						M.AutoInit();
						Prism.highlightAll();
					}
				});
			}
		},
		{
			name: "documentation-charsets",
			path: "/rs-json/documentation/charsets",
			component: function(resolve, reject) {
				template(resolve, reject, "documentation/charsets");
			}
		},
		{
			name: "documentation-api",
			path: "/rs-json/documentation/api",
			component: function(resolve, reject) {
				template(resolve, reject, "documentation/api");
			}
		},
		{
			name: "documentation-version",
			path: "/rs-json/documentation/version",
			component: function(resolve, reject) {
				template(resolve, reject, "documentation/version");
			}
		},
		{
			name: "documentation-license",
			path: "/rs-json/documentation/license",
			component: function(resolve, reject) {
				template(resolve, reject, "documentation/license");
			}
		},
		{
			name: "documentation-uniqueness",
			path: "/rs-json/documentation/uniqueness",
			component: function(resolve, reject) {
				template(resolve, reject, "documentation/uniqueness");
			}
		},
		{
			name: "example",
			path: "/rs-json/example",
			component: function(resolve, reject) {
				template(resolve, reject, "example", {
					mounted: function() {
						M.AutoInit();
					}
				});
			}
		},
		{
			name: "try-it",
			path: "/rs-json/try-it",
			component: function(resolve, reject) {
				template(resolve, reject, "try-it", {
					data: function() {
						return {
							initialCode: `{
	"charset": "utf8",
	"schema": {
		"book": {
			"identifier": ["id"],
			"uniques": {
				"unique_book_name": ["name"]
			},
			"properties": {
				"id": {
					"type": "integer",
					"incremented": true
				},
				"name": {
					"type": "string"
				}
			}
		}
	}
}`,
							editor: "",
							mySql: "",
							laravel5: "",
							django2: "",
							supportedCharsets: ["utf8", "utf8mb4", "iso88591"],
							supportedTypes: [
								"integer",
								"float",
								"string",
								"datetime"
							]
						};
					},
					methods: {
						turnCodeToMySql: function() {
							let mySql = "";
							let rsjson = this.editor.getValue();

							try {
								rsjson = JSON.parse(rsjson);
							} catch (exception) {
								this.mySql = exception.toString();
								return;
							}

							if ("schema" in rsjson === false) {
								this.mySql = "No schema to interpret";
								return;
							}

							if (rsjson.schema.constructor !== Object) {
								this.mySql = 'key "schema" should be an object';
								return;
							}

							const supportedTypes = [
								"integer",
								"string",
								"float",
								"datetime"
							].join(", ");

							if ("charset" in rsjson === false) {
								this.mySql = `"charset" key is mandatory`;
								return;
							}

							if (rsjson.charset.constructor !== String) {
								this.mySql = `"charset" key should be a string`;
								return;
							}

							if (
								!this.supportedCharsets.includes(rsjson.charset)
							) {
								this.mySql = `unsupported charset "${
									rsjson.charset
								}" (supported: ${this.supportedCharsets.join(
									", "
								)})`;
								return;
							}

							let charset = "";
							let collation = "";

							switch (rsjson.charset) {
								case "utf8":
									charset = "utf8";
									collation = "utf8_general_ci";
									break;
								case "utf8mb4":
									charset = "utf8mb4";
									collation = "utf8mb4_general_ci";
									break;
								case "iso88591":
									charset = "latin1";
									collation = "latin1_general_ci";
									break;
							}

							mySql = `CREATE DATABASE \`example\`\nCHARACTER SET ${charset}\nCOLLATE ${collation};\n\nUSE \`example\`;\n\n`;

							for (const modelName in rsjson.schema) {
								const model = rsjson.schema[modelName];

								if (model.constructor !== Object) {
									this.mySql = `model "${modelName}" should be an object`;
									return;
								}

								const tableName =
									"name" in model ? model.name : modelName;

								let columns = [];

								if (
									"properties" in model &&
									model.properties.constructor !== Object
								) {
									this.mySql = `model "${modelName}" should have an object on its key "properties"`;
									return;
								}

								for (const propertyName in model.properties) {
									const property =
										model.properties[propertyName];

									if (property.constructor !== Object) {
										this.mySql = `property "${propertyName}" on the model "${modelName}" should be an object`;
										return;
									}

									if ("type" in property === false) {
										this.mySql = `key "type" missing on property "${propertyName}" of the model "${modelName}"`;
										return;
									}

									if (property.type.constructor !== String) {
										this.mySql = `key "type" should be a string on property "${propertyName}" of the model "${modelName}"`;
										return;
									}

									const type = property.type;

									let propertyType = "";
									let propertyLength = 0;

									switch (type) {
										case "integer":
											propertyLength =
												"maximum" in property
													? Math.round(
															property.maximum
													  )
													: 11;
											propertyType = `INT(${propertyLength})`;
											break;
										case "float":
											propertyLength =
												"maximum" in property
													? Math.round(
															property.maximum
													  )
													: 10;
											propertyType = `DECIMAL(${propertyLength},2)`;
											break;
										case "string":
											propertyLength =
												"maximum" in property
													? Math.round(
															property.maximum
													  )
													: 255;
											propertyType = `VARCHAR(${propertyLength})`;
											break;
										case "datetime":
											propertyType = `DATETIME`;
											break;
										default:
											this.mySql = `unsupported type "${type}" on property "${propertyName}" of the model "${modelName}" (supported: ${supportedTypes})`;
											return;
									}

									if (
										"incremented" in property &&
										property.incremented.constructor !==
											Boolean
									) {
										this.mySql = `key "incremented" should be a boolean on property "${propertyName}" of model "${modelName}"`;

										return;
									}

									const propertyIncremented =
										"incremented" in property &&
										property.incremented === true
											? "AUTO_INCREMENT"
											: "";

									columns.push(
										`\`${propertyName}\` ${propertyType} ${propertyIncremented}`.trim()
									);
								}

								columns = columns.join(",\n\t");

								if (
									"identifier" in model &&
									model.identifier.constructor !== Array
								) {
									this.mySql = `"identifier" key should be an array in the model "${modelName}"`;
									return;
								}

								let identifiers = [];

								if ("identifier" in model) {
									for (const identifier of model.identifier) {
										if (identifier.constructor !== String) {
											this.mySql = `"identifier" key should be an array of string in the model "${modelName}"`;
											return;
										}

										identifiers.push(identifier);
									}
								}

								let uniques = [];

								if ("uniques" in model) {
									if (model.uniques.constructor !== Object) {
										this.mySql = `key "unqiues" should be an object in model "${modelName}"`;

										return;
									}

									for (const uniqueName in model.uniques) {
										const unique =
											model.uniques[uniqueName];

										if (unique.constructor !== Array) {
											this.mySql = `unique constraint "${uniqueName}" should be an array in the model "${modelName}"`;

											return;
										}

										const uniqueColumns = unique.join(", ");

										uniques.push(
											`CONSTRAINT \`${uniqueName}\` UNIQUE(\`${uniqueColumns}\`)`
										);
									}
								}

								const primaryColumns = identifiers
									.map(function(column) {
										return `\`${column}\``;
									})
									.join(", ");
								const primary =
									"identifier" in model
										? `,\n\tPRIMARY KEY(${primaryColumns})\n`
										: "\n";
								const tableUnique =
									uniques.length > 0
										? `\t${uniques.join(",\n\t")}\n`
										: "\n";

								const partial = `CREATE TABLE ${tableName} (\n\t${columns}${primary}${tableUnique}) CHARSET=${charset};\n`;

								mySql += partial + "\n";
							}

							this.mySql = mySql;
						},
						turnCodeToLaravel5: function() {
							this.laravel5 = `use Illuminate\\Support\\Facades\\Schema;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Database\\Migrations\\Migration;

class CreateExampleTables extends Migration {`;

							let rsjson = "";

							try {
								rsjson = JSON.parse(this.editor.getValue());
							} catch (exception) {
								if (exception instanceof SyntaxError) {
									this.laravel5 = exception.toString();
								} else {
									this.laravel5 = `Unknown error: ${exception.toString()}`;
								}

								return;
							}

							if ("charset" in rsjson === false) {
								this.laravel5 = `key "schema" is mandatory`;

								return;
							}

							if ("charset" in rsjson) {
								if (rsjson.charset.constructor !== String) {
									this.laravel5 = `key "schema" should be a string`;

									return;
								}

								if (
									!this.supportedCharsets.includes(
										rsjson.charset
									)
								) {
									const supported = this.supportedCharsets.join(
										", "
									);
									this.laravel5 = `unsupported charset "${
										rsjson.charset
									}" (supported: ${supported})`;

									return;
								}
							}

							if ("schema" in rsjson === false) {
								this.laravel5 = `No schema to interpret`;

								return;
							} else {
								if (rsjson.schema.constructor !== Object) {
									this.laravel5 = `key "schema" should be an object`;

									return;
								}
							}

							for (const modelName in rsjson.schema) {
								const model = rsjson.schema[modelName];

								if (model.constructor !== Object) {
									this.laravel5 = `model "${modelName}" should be an object`;

									return;
								}

								if ("properties" in model === false) {
									this.laravel5 = `key "properties" in model "${modelName}" is mandatory`;

									return;
								}

								if (model.properties.constructor !== Object) {
									this.laravel5 = `key "properties" in model "${modelName}" should be an object`;

									return;
								}

								let statements = [];

								for (const propertyName in model.properties) {
									const property =
										model.properties[propertyName];

									if ("incremented" in property) {
										if (
											property.incremented.constructor !==
											Boolean
										) {
											this.laravel5 = `key "incremented" should be a boolean on property "${properyName}" of the model "${modelName}"`;

											return;
										}

										if (property.incremented === true) {
											statements.push(
												`$table->increments('${propertyName}')`
											);
										}
									}

									if ("type" in property === false) {
										this.laravel5 = `key "type" is missing in property "${propertyName}" of model "${modelName}"`;

										return;
									} else {
										if (
											property.type.constructor !== String
										) {
											this.laravel5 = `key "type" should be a string in the property "${propertyName}" of the model "${modelName}"`;

											return;
										} else if (
											!this.supportedTypes.includes(
												property.type
											)
										) {
											this.laravel5 = `unsupported type "${
												property.type
											}" in the property "${propertyName}" of the model "${modelName}" (supported: ${this.supportedTypes.join(
												", "
											)})`;

											return;
										} else {
											switch (property.type) {
												case "string":
													statements.push(
														`$table->string('${propertyName}');`
													);
													break;
												case "integer":
													statements.push(
														`$table->integer('${propertyName}');`
													);
													break;
												case "float":
													let maximum = 10;
													let precision = 2;

													if ("maximum" in property) {
														if (
															property.maximum
																.constructor !==
															Number
														) {
															this.laravel5 = `key "maximum" should be a number in the property "${propertyName}" of the model "${modelName}"`;

															return;
														}

														maximum = Math.round(
															property.maximum
														);
													}

													if (
														"precision" in property
													) {
														if (
															property.precision
																.constructor !==
															Number
														) {
															this.laravel5 = `key "precision" should be a number in the property "${propertyName}" of the model "${modelName}"`;
														}

														precisoon = Math.round(
															property.precision
														);
													}

													statements.push(
														`$table->decimal('${propertyName}', ${maximum}, ${precision});`
													);
													break;
												case "datetime":
													stataments.push(
														`$table->dateTime('${propertyName}');`
													);
													break;
											}
										}
									}
								}

								if ("uniques" in model) {
									if (model.uniques.constructor !== Object) {
										this.laravel5 = `key "uniques" should be an object in the model "${modelName}"`;

										return;
									}

									console.log(model.uniques);

									for (const uniqueName in model.uniques) {
										const unique =
											model.uniques[uniqueName];

										if (unique.constructor !== Array) {
											this.laravel5 = `unique index "${uniqueName}" should be an array in the model "${modelName}"`;

											return;
										}

										const columns = unique
											.map(function(column) {
												return `'${column}'`;
											})
											.join(", ");

										statements.push(
											`$table->unique(${columns}, '${uniqueName}');`
										);
									}
								}

								if ("identifier" in model) {
									if (
										model.identifier.constructor !== Array
									) {
										this.laravel5 = `key "identifier" should be an array in the model "${modelName}"`;

										return;
									}

									const columns = model.identifier
										.map(function(column) {
											return `'${column}'`;
										})
										.join(", ");

									statements.push(
										`$table->primary([${columns}]);`
									);
								}

								this.laravel5 += `\n\tSchema::create('${modelName}', function(Blueprint $table): void {\n\t\t${statements.join(
									"\n\t\t"
								)}\n\t});\n`;
							}

							this.laravel5 += "\n}";
						},
						turnCodeToDjango2: function() {
							let rsjson = "";

							try {
								rsjson = JSON.parse(this.editor.getValue());
							} catch (exception) {
								if (exception instanceof SyntaxError) {
									this.django2 = exception.toString();
								} else {
									this.django2 = `Unknown error: ${exception.toString()}`;
								}

								return;
							}

							/** @todo check charset */
							/** @todo check schema */

							for (const modelName in rsjson.schema) {
								const model = rsjson.schema[modelName];

								/** @todo check model */
								/** @todo check properties */

								for (const propertyName in model.properties) {
									const property =
										model.properties[propertyName];

									/** @todo check property */
									/** @todo check property type */

									switch (property.type) {
										case "integer":
											break;
										case "float":
											break;
										case "string":
											break;
										case "datetime":
											break;
									}
								}

								const columns = [];

								const classStatement = `class ${modelName}(models.Model):\n\t${columns.join(
									"\n\t"
								)}`;

								this.django2 += classStatement;
							}

							this.django2 = `from django.db import models\n\n`;
						}
					},
					mounted: function() {
						const self = this;

						waitFor("#editor").then(function(element) {
							const options = {
								mode: "application/json",
								viewportMargin: Infinity
							};

							self.editor = CodeMirror.fromTextArea(
								element,
								options
							);

							self.editor.on("change", function(editor) {
								self.turnCodeToMySql();
								self.turnCodeToLaravel5();
								self.turnCodeToDjango2();
							});

							self.turnCodeToMySql();
							self.turnCodeToLaravel5();
							self.turnCodeToDjango2();

							Prism.highlightAll();

							M.AutoInit();
						});
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

const i18n = new VueI18n({
	locale: "en",
	messages: messages,
	fallbackLocale: "en"
});

const vue = new Vue({
	el: "#app",
	router: router,
	i18n: i18n,
	mounted: function() {
		M.AutoInit();
	},
	data: {
		loading: false
	}
});

router.beforeEach(function(to, from, next) {
	console.log(to);
	vue.loading = true;

	next();
});

router.afterEach(function(to, from) {
	vue.loading = false;
});
