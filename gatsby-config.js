module.exports = {
	plugins: [
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Inter", "Cedarville Cursive"],
				},
			},
		},
	],
};
