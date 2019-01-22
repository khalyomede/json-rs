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
			gettingStartedButton: "Getting started",
			readTheDocumentationButton: "Read the documentation",
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
			}
		},
		example: {
			inOrderToUnderstand:
				"In order to understand how RS/JSON takes place in your IT, we will take inspiration from a real life example. Our business today: a book store.",
			problemsWithDiagrams:
				"One of the problem with diagrams is that they lack of information. Is the ISBN in norm ISBN-10 or ISBN-13? Does the return date can have a value lower than the borrowed date?",
			howRsJsonTackleDiagramsProblems:
				"RS/JSON will be able to tackle those unmodelizable constraints. Let us agree on a couple of statemens first:",
			statement: {
				bookIsbnName:
					"A <b>book</b> must have a name and an ISBN (norm ISBN-13)",
				bookAuthor: "A <b>book</b> must have only one author",
				authorNameAge:
					"An <b>Author</b> must have a name and an age (he should be adult)",
				authorBooks: "An <b>Author</b> can have many books",
				orderDateBorrowingReturning:
					"An <b>Order</b> must have a date of borrowing and returning",
				bookOrder:
					"An <b>Book</b> can be ordered many times, and an <b>Order</b> can have many books"
			},
			fairEnough:
				"Fair enough, we can move on and create our diagram. Let us start with modelizing books:",
			goodStart: "Good start. Remember what we stated on the ISBN?",
			goodStartQuote: "[...] and an ISBN (norm <b>ISBN-13</b>)",
			thisMeansIsbnParticularForm:
				'This means the ISBN should have a particular form and is checkable (more information on the <a href="https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-13_check_digit_calculation" target="blank">wikipedia page</a>). To sum it up, exactly 17 characters (including dashes), and some control checks. Sounds like guards are the men for the job:',
			thisGuardIsCodedInYourBackend:
				"This guard is coded in your back-end software. Since it is not part of the native guards, you or your collegues will have to code it.",
			guardArePerformingServerSide:
				"Guards are performing application-side, and are great to ensure data coming from your apps are getting clean before being inserted or updated.",
			weCouldAlsoHaveTheDatabase:
				"Now, we could also inform the database that our isbn has a maximum length of 17 character, using the <code>maximum</code> key on this property. Or we could use a custom type to factorize all those parameters."
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
			gettingStartedButton: "Démarrer",
			readTheDocumentationButton: "Lire la documentation",
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
			}
		}
	}
};
