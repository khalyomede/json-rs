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
			title: "Schéma Relationnel basé sur JSON",
			gettingStartedButton: "Démarrer",
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
		}
	}
};
