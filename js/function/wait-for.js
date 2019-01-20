/**
 * Return a promise resolved if the selector is found in the DOM or after "timeout" seconds.
 *
 * @param {String} selector
 * @param {Number} timeout=10
 * @return {Promise}
 */
const waitFor = function(selector, timeout = 10) {
	return new Promise(function(resolve, reject) {
		const start = window.performance.now();

		const interval = setInterval(function() {
			const element = document.querySelector(selector);
			if (element instanceof HTMLElement) {
				clearInterval(interval);
				resolve(element);
			}

			const stop = window.performance.now();

			if (stop - start > timeout * 1000) {
				clearInterval(interval);
				reject();
			}
		}, 16);
	});
};
