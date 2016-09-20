'use strict';

import * as TYPES from '../contants/constants';
import merge from 'lodash/merge'
import union from 'lodash/union'

export default function update(state = {
		isLoggedIn: false,
		user: {},
		status: null,
	}, action) {
		switch(action.type) {
			case TYPES.LOGIN_REQUEST:
				return merge({}, state, {
					isLoggedIn: false,
					user: {},
					status: 'doing'
				})
			case TYPES.LOGIN_SUCCESS:
				return merge({}, state, {
					isLoggedIn: true,
					user: action.user,
					status: 'done'
				})
			case TYPES.LOGIN_FAILURE:
				return merge({}, state, {
					isLoggedIn: false,
					user: {},
					status: null
				})
			default: 
				return state;
		}
}