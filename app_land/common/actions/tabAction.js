'use strict';

import { TAB_SETTING_CLICK, TAB_HOME_CLICK, TAB_SHOP_CLICK, TAB_CLASSIFY_CLICK } from "../contants/constants";

/*
 * index page --> home tab clicked
 */
export function homePressDown() {
	return {
		type: TAB_HOME_CLICK
	}
}

/*
 * shopCart page
 */
export function shopPressDown() {
	return {
		type: TAB_SHOP_CLICK
	}
}
/*
 * classify page
 */
export function classifyPressDown() {
	return {
		type: TAB_CLASSIFY_CLICK
	}
}
/*
 * setting page
 */
export function settingPressDown() {
	return {
		type: TAB_SETTING_CLICK
	}
}
