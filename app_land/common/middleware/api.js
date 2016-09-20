import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';

const API_ROOT = "http://ndapi.bestinfoods.com/";

function callApi(endpoint, schema) {
	const fullURL = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

	return fetch(fullURL)
		.then(response => response.json().then({ json, response }))
		.then(({ json, response}) => {
			if (!response.ok) {
				return Promise.reject(json);
			}

			const camelizedJson = camelizeKeys(json);
			return Object.assign({}, normalize(camelizedJson, schema));
		})
}


//schemas
const loginSchema = new Schema('login');
const registSchema = new Schema("register");
const categorySchema = new Schema("categorys");

export const Schemas = {
	USER: loginSchema,
	CATEGORY: categorySchema,
	GATEGORY_ARRAY: arrayOf(categorySchema)
}


// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

export default store => next => action => {
	const callAPI = action[CALL_API];
	console.log("callAPI: ",callAPI);
	if (typeof callAPI === 'undefined') {
		return next(action);
	}

	let { endpoint } = callAPI;
	const { Schema, types } = callAPI;
	console.log("endpoint: ",endpoints);
	if (typeof endpoint !== 'string') {
		throw new Error('Specify a string endpoint URL.');
	}
	if (!schema) {
		throw new Error('Specify one of the exported Schemas.');
	}
	if (!Array.isArray(types) || types.length !== 3) {
		throw new Error('Expected action types to be strings.');
	}

	function actionWith(data) {
		const finalAction = Object.assign({}, action, data);
		delete finalAction[CALL_API];
		return finalAction;
	}

	const [ requestType, successType, failureType ] = types;
	next(actionWith({ type: requestType }));

	return callApi(endpoint, schema).then(
		response => next(actionWith({
			response,
			type: successType
		})),
		error => next(actionWith({
			type: failureType,
			error: error.message || "Something bad happened at place: middleware api.js.please check out!"
		}))
	)
}