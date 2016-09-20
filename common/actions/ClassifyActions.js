import * as Types from '../contants/constants';
import requestData from '../config/request';


export function queryClassifyData() {
  let data = {
    classifyData : null,
    recommendedBrandData : null,
    globalBuyData : null,
  };
  return (
    (dispatch) => {
      requestData('http://ndapi.bestinfoods.com/item/get/topsimplecategorys', 'POST')
      .then((successData) => {

        data.classifyData = successData;
        if (data.classifyData&&data.recommendedBrandData&&data.globalBuyData) {
          dispatch(gotClassifyData(data));
        }
      },
      (errorMessage) => { });

      requestData('http://ndapi.bestinfoods.com/item/get/crossborderbrand', 'POST')
      .then((successData) => {

        data.recommendedBrandData = successData;
        if (data.classifyData&&data.recommendedBrandData&&data.globalBuyData) {
          dispatch(gotClassifyData(data));
        }
      }, (errorMessage) => { });

      requestData('http://ndapi.bestinfoods.com/item/get/pavilions', 'POST')
      .then((successData) => {

        data.globalBuyData = successData;
        if (data.classifyData&&data.recommendedBrandData&&data.globalBuyData) {
          dispatch(gotClassifyData(data));
        }
      }, (errorMessage) => { });
    }
);

}

function gotClassifyData(data) {
  return {
    type: Types.GOT_CLASSIFY_DATA,
    data
  };
}
