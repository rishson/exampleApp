define({
	plugins: [
		// The debug plugin outputs wiring progress and diagnostic info
		// to the console
		{ module: 'wire/debug', trace: true },
		// Load the basic wire.js dom plugin, which provides the `dom!`
		// resolver used above.
		{ module: 'wire/dom' }
	],


	SimpleHeader: {
		create: {
			module: "app/view/SimpleHeader",
			args: [
				{
					username: "Rishson"
				}
			]
		}
	},

	SimpleFooter: {
		create: {
			module: "app/view/SimpleFooter",
			args: [
				{
					footerText: "Footer Text",
					footerLink: "http://www.someurl.com"
				}
			]
		}
	},

	example: {
		create: {
			module: "dijit/layout/ContentPane",
			args: [
				{ content: 'Your application goes here.' }
			]
		}
	},

	appContainer: {
		create: {
			module: "app/view/AppContainer",
			args: [
				{
					header: { $ref: 'SimpleHeader' },
					app: { $ref: 'example' },
					footer: { $ref: 'SimpleFooter' }
				},
				{ $ref: "dom!placeholder" }
			]
		},
		init: {
			startup: {}
		}
	}
});
