const messages = {
	en: {
		menu: {
			tryit: "Try it",
			example: "Example",
			documentation: "Documentation",
			language: "Language"
		},
		footer: {
			slogan: "Relational schema over JSON.",
			license: "RS/JSON and all available code are under MIT license.",
			resources: {
				text: "Resources",
				menu: {
					example: "Example",
					documentation: "Documentation"
				}
			}
		},
		home: {
			title: "Relational schema over JSON",
			exampleButton: "Examples",
			documentationButton: "documentation",
			singleSourceOfTruth: {
				title: "Single source of truth",
				text:
					"RS/JSON is a standard proposal for relational schemas. The goal is to unify every softwares, like your relational database software, ORM and migration manager. It is a meta-language over all these tools, to help you focus only once on your database schema."
			},
			raiseYourDataQuality: {
				title: "Raise your data quality",
				text:
					"With the help of guards, which are performing pre-insert/update validations on your software back-end, your data are ensured to be the cleanest possible. This is a good thing when planing on harvesting your data using data analysis tools."
			},
			scalable: {
				title: "Scalable",
				text: `Designed to keep the same performance whether you have 10 or 1000 objects, thanks to JSON key-pair architecture. Too many things in one file? Split your business logic in small files.  Native types are not enough? Create your own types to abstract your work and focus on your business. No guard fit your need? Create a customized one.`
			},
			shareYourRecipes: {
				title: "Share your recipes",
				text:
					"Because it uses versioning and licensing, you can finally share your recipes. Did you ever whished to blog about your best way to modelize a particular business concept? How many times did you spent the last time you saw a great way to handle a particular business logic?"
			}
		},
		"404": {
			title: "Page not found",
			text:
				"Seems like we are bad at coding internet or this page really does not exist."
		},
		breadcrumb: {
			home: {
				text: "Home"
			},
			documentation: {
				text: "Documentation",
				charsets: {
					text: "Charsets"
				},
				guards: {
					text: "Guards",
					nativeGuards: {
						text: "Native guards"
					},
					customGuards: {
						text: "Custom guards"
					}
				},
				uniqueness: {
					text: "Uniqueness"
				}
			},
			tryIt: {
				text: "Try it"
			},
			example: {
				text: "Example"
			}
		},
		collection: {
			api: "API",
			charsets: "Charsets",
			guards: "Guards",
			license: "License",
			types: "Types",
			version: "Version"
		},
		editProposalFab: {
			text: "Propose a change"
		},
		tryIt: {
			writeSomeRsJson:
				"Write some RS/JSON and check how RS/JSON is turning into a code comprehensible by your favorites platform.",
			simplifiedVersionOfRsJson:
				"This is a simplified version of RS/JSON. You can use <code>uniques</code>, <code>type</code>, <code>identifier</code> and <code>charset</code> attributes. Have fun!",
			canAlsoExportToEloquent:
				'RS/JSON can also exports to <a href="https://laravel.com/docs/master/eloquent">Eloquent</a> models as well.'
		},
		documentation: {
			charsets: {
				rsJsonSupportsCharsets:
					"RS/JSON supports a list of charsets in order to unify every variants on the plaform RS/JSON will be installed.",
				list: {
					title: "Name"
				},
				canBeSetGlobally: "Charsets can be set globally:",
				orPerProperty: "Or per property:",
				inSuchCase:
					"In such case, a <code>charset</code> set on any property will override the default charset."
			},
			menu: {
				api: {
					title: "API",
					text: "Learn how RS/JSON is structured in detail."
				},
				charsets: {
					title: "Charsets",
					text:
						"Encode properly your data using a list of supported charsets."
				},
				guards: {
					title: "Guards",
					text:
						"Set up quality rules and improve your data reliability."
				},
				license: {
					title: "License",
					text: "Share with the community or protect your schema."
				},
				types: {
					title: "Types",
					text:
						"Categorize your field, favorize reusability, abstract your business."
				},
				version: {
					title: "Version",
					text:
						"Use schema difference to apply changes on your relational schema."
				},
				uniqueness: {
					title: "Uniqueness",
					text: "Make your data more relevant by banning duplicate."
				}
			}
		}
	},
	fr: {
		menu: {
			tryit: "Essayer",
			example: "Exemple",
			documentation: "Documentation",
			language: "Langue"
		},
		footer: {
			slogan: "Schéma relationnel basé sur JSON.",
			license:
				"RS/JSON et tout le code disponible sont sous licence MIT.",
			resources: {
				text: "Resources",
				menu: {
					example: "Exemple",
					documentation: "Documentation"
				}
			}
		},
		home: {
			title: "Schéma relationnel basé sur JSON",
			exampleButton: "Exemples",
			documentationButton: "documentation",
			singleSourceOfTruth: {
				title: "Source centrale de votre réflexion",
				text:
					"RS/JSON est une proposition de standard pour les schémas relationnels. Le but est d'unifier tous les logiciels, comme votre système de gestion de base de données, votre ORM et votre générateur de migration. C'est un meta langage au dessus de tous ces outils, afin de vous permettre de vous concentrer une seule fois sur votre schéma de base de données."
			},
			raiseYourDataQuality: {
				title: "Améliorer la qualité de vos données",
				text:
					"À l'aide de gardes, qui opèrent des validations au niveau applicatif juste avant d'insérer ou de mettre à jour une donnée, vos données restent le plus propre possible. C'est une bonne nouvelle, surtout si vous comptez ensuite faire de la visualisation ou de l'analyse de données."
			},
			scalable: {
				title: "Évolutif",
				text: `Pensé pour conserver les même performances que vous ayez 10 ou 1000 modèles, grâce à une architecture en clé-valeur permise par JSON. Trop d'élément dans un seul fichier ? Organisez vous en fichier séparés.  Les types natifs sont insuffisants ? Créez votre propre types afin d'abstraire votre travail et vous concentrer sur votre business.  Aucun gardes ne vous satisfait ? Créez en un customisé.`
			},
			shareYourRecipes: {
				title: "Partagez vos trouvailles",
				text:
					"Parce que RS/JSON utilise du versioning et permet de mentionner une licence, vous pouvez enfin partagez vos meilleurs compositions. N'avez vous jamais souhaiter partager la meileure façon selon vous de modéliser un concept en particulier ? Combien de temps avez vous passer à adapter votre architecture la dernière fois que vous avez trouvé une bonne façon de traiter un cas business ?"
			}
		},
		"404": {
			title: "Page introuvable",
			text:
				"Soit on est mauvais à coder l'internet ou votre page n'existe vraiment pas."
		},
		breadcrumb: {
			home: {
				text: "Accueil"
			},
			documentation: {
				text: "Documentation",
				charsets: {
					text: "Jeu de caractères"
				},
				guards: {
					text: "Gardes",
					nativeGuards: {
						text: "Gardes natifs"
					},
					customGuards: {
						text: "Gardes personnalisés"
					}
				},
				uniqueness: {
					text: "Unicité"
				}
			},
			tryIt: {
				text: "Essayez"
			},
			example: {
				text: "Exemple"
			}
		},
		collection: {
			api: "API",
			charsets: "Jeu de caractères",
			guards: "Gardes",
			license: "Licence",
			types: "Types",
			version: "Version"
		},
		editProposalFab: {
			text: "Proposer une amélioration"
		},
		tryIt: {
			writeSomeRsJson:
				"Ecrivez du RS/JSON and regardez comment ce code est transformé en un code compréhensible sur une de vos plateformes favorites.",
			simplifiedVersionOfRsJson:
				"C'est une version simplifié de RS/JSON. Vous pouvez utiliser les attributs <code>uniques</code>, <code>type</code>, <code>identifier</code> et <code>charset</code>. Amusez vous bien !",
			canAlsoExportToEloquent:
				'RS/JSON peut également être exporté pour créer des modèles <a href="https://laravel.com/docs/master/eloquent">Eloquent</a>.'
		},
		documentation: {
			charsets: {
				rsJsonSupportsCharsets:
					"RS/JSON supporte une liste de jeu de caractères afin d'unifier toutes les variantes sur la plateform sur laquelle RS/JSON va être installé.",
				list: {
					title: "Nom"
				},
				canBeSetGlobally:
					"Le jeu de caractère peut être configuré globalement",
				orPerProperty: "Ou par propriétés:",
				inSuchCase:
					"Dans ce cas, l'attribut <code>charset</code> configuré au niveau d'une propriété écrasera la configuration globale."
			},
			menu: {
				api: {
					title: "API",
					text: "Apprennez comment RS/JSON est structuré en détail."
				},
				charsets: {
					title: "Jeu de caractères",
					text:
						"Encodez correctement vos données grâce à une liste préféfinie de jeu de caractères."
				},
				guards: {
					title: "Gardes",
					text:
						"Mettez en place des règles de qualité afin d'améliorer la fiabilité de vos données."
				},
				license: {
					title: "Licence",
					text:
						"Partagez avec la communauté ou protégez votre schéma."
				},
				types: {
					title: "Types",
					text:
						"Catégorisez vos champs, favorisez la réutilisation, et synthétisez votre métier."
				},
				version: {
					title: "Version",
					text:
						"Usez de la différence de schéma afin d'appliquez des changements sur votre schéma relationnel."
				},
				uniqueness: {
					title: "Unicité",
					text:
						"Rendez vos données plus pertinentes en interdisant les doublons."
				}
			}
		}
	}
};
