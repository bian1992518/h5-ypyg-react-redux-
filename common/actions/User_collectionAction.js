import * as Types from '../contants/constants';
import requestData from '../config/request';

export function queryUserCollectionData(page,moreData) {
  let parameter = {
    page : page,
    perPage : 10,
  }
  return (
    (dispatch) => {
      requestData('http://ndapi.bestinfoods.com/user/get/collectiongoods', 'POST', parameter)
      .then((successData) => {
        dispatch(gotUserCollectionData(successData));
      },
      (errorMessage) => { });
    }
  )
}

function gotUserCollectionData(data) {
  return {
    type: Types.COLLECTION,
    data
  };
}
function gotMoreUserCollectionData(data) {
  return {
    type: Types.MORECOLLECTION,
    data
  };
}
