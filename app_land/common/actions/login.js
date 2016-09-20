//import { CALL_API, Schemas } from '../middleware/api';
//import Assert from 'assert';
//import AssertString from "../libs/strings";
import * as ActionTypes from '../contants/constants';

const API_ROOT = "http://ndapi.bestinfoods.com/";

export function fetchLogin(opt = {"userName":null,"password":null}) {
	let name = opt.userName;
	let psd = opt.password;
	console.error(!null, name, "when u saw this warning,it must be a bug! details---->userName can't be null,at position login! please check code is right!!");
	console.error(!null, psd,  "when u saw this warning,it must be a bug! details---->password can't be null,at position login! please check code is right!!");
	// return {
	// 	[CALL_API]: {
	// 		type: ActionTypes.LOGIN_REQUEST,
	// 		endpoint: `user/get/login?username=${name}&password=${psd}`,
	// 		schema: Schemas.USER
	// 	}
	// }
	let loginURL = API_ROOT+"user/get/login?username"+name+"&password"+psd;
	return (dispatch) => {
		dispatch({'type': ActionTypes.LOGIN_REQUEST});
		let inner_get = fetch(loginURL)
			.then(response =>
				response.json().then(json => ({ json, response })))
			.then(({ json, response }) => {
				console.log("res :",json);
				dispatch({'type': ActionTypes.LOGIN_SUCCESS, user: json});
			}).catch((e) => {
				console.log(e.message);
				dispatch({'type': ActionTypes.LOGIN_FAILURE, error:e})
			});
	}
}

export function fetchRegister(opt={}) {

}
