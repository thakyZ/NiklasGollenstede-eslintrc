
function off(...args) {
	return [ 'off', ...args, ];
}

function error(...args) {
	return [ 'error', ...args, ];
}

function warn(...args) {
	return [ 'warn', ...args, ];
}

function unCC(rules) {
	Object.keys(rules).forEach(key => {
		const name = key.replace(/(.)([A-Z])/g, (_, $1, $2) => $1 +'-'+ $2.toLowerCase());
		if (name !== key) {
			rules[name] = rules[key];
			delete rules[key];
		}
	});
	return rules;
}

function cloneOnto(target, source) {
	const done = new WeakMap([ [ source, target, ], ]);
	source && (function doIt(target, source) {
		Object.keys(source).forEach(key => {
			const sourceValue = source[key];
			if (checkNativeType(sourceValue, "Object")) {
				const targetValue = done.get(sourceValue);
				if (targetValue) {
					target[key] = targetValue;
				} else {
					!target[key] && (target[key] = { });
					doIt(target[key], sourceValue);
				}
			} else if (Array.isArray(sourceValue)) {
				const targetValue = done.get(sourceValue);
				if (targetValue) {
					target[key] = targetValue;
				} else {
					!target[key] && (target[key] = [ ]);
					doIt(target[key], sourceValue);
				}
			} else {
				target[key] = sourceValue;
			}
		});
	})(target, source);
	return target;
}
function checkNativeType(object, constructorName) {
	return Object.prototype.toString.call(object).indexOf(constructorName, 8) === 8;
}

module.exports = { off, error, warn, unCC, cloneOnto, };
