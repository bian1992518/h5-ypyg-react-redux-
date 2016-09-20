import * as Types from '../contants/constants';

const productListState = {
  dataRequesting: true,
  isDataRequestSucc: false,
  productListData: [
    {id:0,imgMain: {width:285,url:"common/images/defaultIcon@2x.png"},productName:"挪威进口诺特24三文鱼油软胶囊180粒",presentPrice:"￥198.00",discountPrice: "￥298.00"},
    {id:1,imgMain: {width:285,url:"common/images/defaultIcon@2x.png"},productName:"挪威进口诺特24三文鱼油软胶囊180粒",presentPrice:"￥198.00",discountPrice: "￥298.00"},
    {id:2,imgMain: {width:285,url:"common/images/defaultIcon@2x.png"},productName:"挪威进口诺特24三文鱼油软胶囊180粒",presentPrice:"￥198.00",discountPrice: "￥298.00"},
    {id:3,imgMain: {width:285,url:"common/images/defaultIcon@2x.png"},productName:"挪威进口诺特24三文鱼油软胶囊180粒",presentPrice:"￥198.00",discountPrice: "￥298.00"},
    {id:4,imgMain: {width:285,url:"common/images/defaultIcon@2x.png"},productName:"挪威进口诺特24三文鱼油软胶囊180粒",presentPrice:"￥198.00",discountPrice: "￥298.00"},
    {id:5,imgMain: {width:285,url:"common/images/defaultIcon@2x.png"},productName:"挪威进口诺特24三文鱼油软胶囊180粒",presentPrice:"￥198.00",discountPrice: "￥298.00"},
    {id:6,imgMain: {width:285,url:"common/images/defaultIcon@2x.png"},productName:"挪威进口诺特24三文鱼油软胶囊180粒",presentPrice:"￥198.00",discountPrice: "￥298.00"},
    {id:7,imgMain: {width:285,url:"common/images/defaultIcon@2x.png"},productName:"挪威进口诺特24三文鱼油软胶囊180粒",presentPrice:"￥198.00",discountPrice: "￥298.00"},
    {id:8,imgMain: {width:285,url:"common/images/defaultIcon@2x.png"},productName:"挪威进口诺特24三文鱼油软胶囊180粒",presentPrice:"￥198.00",discountPrice: "￥298.00"},
    {id:9,imgMain: {width:285,url:"common/images/defaultIcon@2x.png"},productName:"挪威进口诺特24三文鱼油软胶囊180粒",presentPrice:"￥198.00",discountPrice: "￥298.00"},
    {id:10,imgMain: {width:285,url:"common/images/defaultIcon@2x.png"},productName:"挪威进口诺特24三文鱼油软胶囊180粒",presentPrice:"￥198.00",discountPrice: "￥298.00"},
    {id:11,imgMain: {width:285,url:"common/images/defaultIcon@2x.png"},productName:"挪威进口诺特24三文鱼油软胶囊180粒",presentPrice:"￥198.00",discountPrice: "￥298.00"},
  ],

};


export default function productListReducer(state = productListState, action) {
  switch(action.type) {
    case Types.PRODUCTLIST:
      return Object.assign({}, state, {
        dataRequesting: false,
        productListData: action.data,
        isDataRequestSucc: true
      });
    default:
      return state;
  }
}
