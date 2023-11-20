import { useMemo } from "react";
import { useLocation } from "react-router-dom";

/**
 * Look at what the data looks like and convert it to its expected type
 * @param {string} str
 * @returns {string | number | boolean | Date | null}
 */
function duckType(str) {
	// Check for integer
	if (/^-?\d+$/.test(str)) {
		return parseInt(str, 10);
	}

	// Check for decimal number
	if (/^-?\d+\.\d+$/.test(str)) {
		return parseFloat(str);
	}

	// Check for ISO 8601 date
	if (/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(.\d+)?(Z|[+-]\d{2}:\d{2})?)?$/.test(str)) {
		return new Date(str);
	}

	// Check for boolean litterals 'true' of 'false'
	if (/^(true|false)$/i.test(str)) {
		return str.toLowerCase() === "true";
	}

	if (str === "null") {
		return null;
	}

	// Return original string
	return str;
}

/**
 * Extract the URL search parameters as a map of key/values converted to their expected type
 * @returns {Record<string, any | any[]>}
 */
export const useQueryParameters = () => {
	const { search } = useLocation();

	return useMemo(() => {
		const params = {};
		const searchParams = new URLSearchParams(search);

		for (let [key, value] of searchParams.entries()) {
			value = duckType(value);
			if (params[key] !== undefined) {
				if (params[key].push) {
					// This param is already an array
					params[key].push(value);
				} else {
					// Promote to array
					params[key] = [params[key], value];
				}
			} else {
				params[key] = value;
			}
		}

		return params;
	}, [search]);
};
