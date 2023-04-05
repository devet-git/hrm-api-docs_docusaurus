module.exports = function (context, options) {
	return {
		name: 'plugin-dynamic-routes',

		async contentLoaded({ constent, actions }) {
			const { routes } = options
			const { addRoute } = actions

			routes.map(route => addRoute(route))
		}
	}
}