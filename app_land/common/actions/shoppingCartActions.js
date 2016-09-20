import * as Types from '../contants/constants';
import requestData from '../config/request';

var checkState = {
    allCheckState: 1,
    wareHouseCheckStateList: []
}

var invalidGoods = [];

export function queryShoppingCartData() {
    return ((dispatch) => {
        requestData('http://ndapi.bestinfoods.com/order/get/showcart', 'POST')
        .then((successData) => {
            if (0 === successData.errorcode) {
                if (0 !== successData.data.length) {
                    cacheCheckState(successData);
                    cacheInvalidGoods(successData);
                }
                dispatch(gotShoppingCartData(successData, checkState));
            } else {
                alert(successData.message);
            }
        }, (errorMessage) => {

        });
    });
}

function gotShoppingCartData(data, checkState) {
    return {
        type: Types.GOT_SHOPPINGCART_DATA,
        data,
        checkState
    };
}

function cacheInvalidGoods(cartListData) {
    if (!cartListData.data.invalidGoods) {
        return ;
    }

    invalidGoods = [];

    cartListData.data.invalidGoods.map((goodsData, index) => {
        var param = {
            goodsId: goodsData.goodsId
        }
        invalidGoods.push(param);
    });
}

function cacheCheckState(cartListData) {
    if (0 === cartListData.data.whGoods.length) {
        return ;
    }

    checkState = {
        allCheckState: 1,
        wareHouseCheckStateList: []
    };

    checkState.allCheckState = cartListData.data.goodAmount === cartListData.data.checkedGood ? 1 : 0;

    cartListData.data.whGoods.map((warehouseData, indexWh) => {
        var wareHouseCheckedObj = {
            wareHouseName: warehouseData.whName,
            wareHouseCheckState: 1,
            goodsCheckStateList: []
        }

        warehouseData.activityGoods.map((activityData, indexAc) => {
            activityData.goodsList.map((goodsData, indexGd) => {
                var goodCheckedObj = {
                    goodsId: goodsData.goodsId,
                    goodsCheckState: goodsData.checked
                };

                if (!goodsData.checked) {
                    // checkState.allCheckState = 0;
                    wareHouseCheckedObj.wareHouseCheckState = 0;
                }

                wareHouseCheckedObj.goodsCheckStateList.push(goodCheckedObj);
            });
        });
        checkState.wareHouseCheckStateList.push(wareHouseCheckedObj);
  });
}

export function goodsCheckBoxClicked(goodsId) {
    return ((dispatch) => {
        var paramState = 1;

        checkState.wareHouseCheckStateList.map((wareHouseState, indexW) => {
            wareHouseState.goodsCheckStateList.map((goodsState, indexG) => {
                if (goodsId === goodsState.goodsId) {
                    if (1 === goodsState.goodsCheckState) {
                        paramState = 0;
                    }
                }
            });
        });

        var param = [{
            goodsId: goodsId,
            checked: paramState
        }];

        param = JSON.stringify(param);

        dispatch(startLoadingData());
        dispatch(goodsCheckBoxStateChange(goodsId));

        requestData('http://ndapi.bestinfoods.com/order/put/updatecart', 'POST', 'goods=' + param)
        .then((successData) => {
            if (0 === successData.errorcode) {
                dispatch(queryShoppingCartData());
            } else {
                alert('checkboxClick' + successData.messages);
            }

            dispatch(endLoadingData());
        }, (errorData) => {
            dispatch(endLoadingData());
        });
    });
}

function goodsCheckBoxStateChange(goodsId) {
    checkState.wareHouseCheckStateList.map((wareHouseState, indexW) => {
        wareHouseState.goodsCheckStateList.map((goodsState, indexG) => {
            if (goodsId === goodsState.goodsId) {
                if (1 === goodsState.goodsCheckState) {
                    goodsState.goodsCheckState = 0;
                } else {
                    goodsState.goodsCheckState = 1;
                }
            }
        });
    });

    checkState.wareHouseCheckStateList.map((wareHouseState, indexW) => {
        wareHouseState.wareHouseCheckState = 1;
        wareHouseState.goodsCheckStateList.map((goodsState, indexG) => {
            if (0 === goodsState.goodsCheckState) {
                wareHouseState.wareHouseCheckState = 0;
            }
        });
    });

    checkState.allCheckState = 1;
    checkState.wareHouseCheckStateList.map((wareHouseState, indexW) => {
        if (0 === wareHouseState.wareHouseCheckState) {
            checkState.allCheckState = 0;
        }
    });

    return {
        type: Types.CHECKBOOX_CLICKED,
        checkState
    };
}

export function wareHouseCheckBoxClicked(wareHouseName) {
    return ((dispatch) => {
        var param = [];
        var paramState = 1;

        checkState.wareHouseCheckStateList.map((wareHouseState, indexW) => {
            if (wareHouseName === wareHouseState.wareHouseName) {
                if (1 === wareHouseState.wareHouseCheckState) {
                    paramState = 0;
                }
                wareHouseState.goodsCheckStateList.map((goodsState, indexG) => {
                    var goodsParam = {
                        goodsId: goodsState.goodsId,
                        checked: paramState
                    };

                    param.push(goodsParam);
                });
            }
        });

        param = JSON.stringify(param);

        dispatch(startLoadingData());
        dispatch(wareHouseCheckBoxChange(wareHouseName));

        requestData('http://ndapi.bestinfoods.com/order/put/updatecart', 'POST', 'goods=' + param)
        .then((successData) => {
            if (0 === successData.errorcode) {
                dispatch(queryShoppingCartData());
            } else {
                alert('checkboxClick' + successData.messages);
            }

            dispatch(endLoadingData());
        }, (errorData) => {
            dispatch(endLoadingData());
        });
    });
}

function wareHouseCheckBoxChange(wareHouseName) {
    checkState.wareHouseCheckStateList.map((wareHouseState, indexW) => {
        if (wareHouseName === wareHouseState.wareHouseName) {
            if (0 === wareHouseState.wareHouseCheckState) {
                wareHouseState.wareHouseCheckState = 1;
            } else {
                wareHouseState.wareHouseCheckState = 0;
            }

            wareHouseState.goodsCheckStateList.map((goodsState, indexG) => {
                goodsState.goodsCheckState = wareHouseState.wareHouseCheckState;
            });
        }
    });

    checkState.allCheckState = 1;
    checkState.wareHouseCheckStateList.map((wareHouseState, indexW) => {
        if (0 === wareHouseState.wareHouseCheckState) {
            checkState.allCheckState = 0;
        }
    });

    return {
        type: Types.CHECKBOOX_CLICKED,
        checkState
    };
}

export function checkAllCheckBoxClicked() {
    return ((dispatch) => {
        dispatch(startLoadingData());
        dispatch(checkAllCheckBoxChange());
        requestData('http://ndapi.bestinfoods.com/order/put/updatecart', 'POST')
        .then((successData) => {
            if (0 === successData.errorcode) {
                dispatch(queryShoppingCartData());
            } else {
                alert('checkboxClick'+successData.messages);
            }

            dispatch(endLoadingData());
        }, (errorData) => {
            dispatch(endLoadingData());
        });
    });
}

function checkAllCheckBoxChange() {
    if (0 === checkState.allCheckState) {
        checkState.allCheckState = 1;
    } else {
        checkState.allCheckState = 0;
    }

    checkState.wareHouseCheckStateList.map((wareHouseState, indexW) => {
        wareHouseState.wareHouseCheckState = checkState.allCheckState;
        wareHouseState.goodsCheckStateList.map((goodsState, indexG) => {
            goodsState.goodsCheckState = checkState.allCheckState;
        });
    });

    return {
        type: Types.CHECKBOOX_CLICKED,
        checkState
    }
}

export function amountPlusClicked() {
    return ((dispatch) => {
        dispatch(startLoadingData());
        setTimeout(() => {
            dispatch(endLoadingData());
        }, 1000);
    });
}

export function amountMinusClicked() {
    return ((dispatch) => {
        dispatch(startLoadingData());
        setTimeout(() => {
            dispatch(endLoadingData());
        }, 1000);
    });
}

export function deleteGoods(goodsId) {
    return ((dispatch) => {
        var param = {
            goodsId: goodsId
        }

        param = JSON.stringify(param);
        dispatch(startLoadingData());

        requestData('http://ndapi.bestinfoods.com/order/delete/deletecart', 'POST', 'goods=' + param)
        .then((successData) => {
            if (0 === successData.errorcode) {
                dispatch(queryShoppingCartData());
            } else {
                alert(successData.message);
            }
            dispatch(endLoadingData());
        }, (errorData) => {
            dispatch(endLoadingData());
        });
    });
}

export function clearInvalidGoods() {
    return ((dispatch) => {
        var param = JSON.stringify(invalidGoods);

        dispatch(startLoadingData());

        requestData('http://ndapi.bestinfoods.com/order/delete/deletecart', 'POST', 'goods=' + param)
        .then((successData) => {
            if (0 === successData.errorcode) {
                dispatch(queryShoppingCartData());
            } else {
                alert(successData.message);
            }
            dispatch(endLoadingData());
        }, (errorData) => {
            dispatch(endLoadingData());
        });
    });
}

export function settlement() {
    return {
        type: Types.SHOPPINGCART_SETTLEMENT
    };
}

function startLoadingData() {
    return {
        type: Types.START_LOADING_DATA
    };
}

function endLoadingData() {
    return {
        type: Types.END_LOADING_DATA
    }
}
