'use strict';

function off(...args) {
	return [ 'off', ...args, ];
}

function error(...args) {
	return [ 'error', ...args, ];
}

function warn(...args) {
	return [ 'warn', ...args, ];
}

/// copies the object and unCamelCases the keys of an object (the same transformation done with the keys of an HTMLElements#dataset)
function unCC(rules) {
	return Object.entries(rules).reduce((o, { 0: key, 1: value, }) => { {
		o[key.replace(/(.)([A-Z])/g, (_, $1, $2) => $1 +'-'+ $2.toLowerCase())] = value;
	} return o; }, { });
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
