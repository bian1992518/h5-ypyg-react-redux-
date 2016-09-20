import * as Types from '../contants/constants';
import requestData from '../config/request';

export function queryUserOrderData(handleId) {
  return ((dispatch) => {

    let myAllOrder = [
      {"orderId":4046,"sn":"2517232016080211525297324","consignee":"源品优购测试账号","consigneeAddress":"浙江省杭州市余杭区五常大道181华立云立方测试","consigneeTel":"18158115554","consigneeIdCard":"376667377654456677","couponName":null,"couponDiscount":null,"shippingFee":0.0,"integralMoney":0.0,"taxFee":0.0,"payFee":0.0,"discount":0.0,"goodCount":1,"totalSalePrice":259.0,"totalOriginalPrice":259.0,"orderTime":1470109973000,"payTime":null,"status":"已下单","orderStatus":1,"isCommented":false,"payWay":"支付宝","goods":[{"goodId":867,"categoryName":"排毒养颜","sn":"00104900867","brandName":"BestinFoods","name":"元气青木瓜口服液   10瓶/盒","stock":183,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-06-28/57721e76309ad.jpg"],"msrp":299.0,"price":259.0,"warehouse":"下沙保税仓","tags":"单品推荐","goodNumber":1,"commented":false}],"failureTime":null,"logisMsg":null},
      {"orderId":4045,"sn":"5440342016080211445371724","consignee":"源品优购测试账号","consigneeAddress":"浙江省杭州市余杭区五常大道181华立云立方测试","consigneeTel":"18158115554","consigneeIdCard":"376667377654456677","couponName":null,"couponDiscount":null,"shippingFee":0.0,"integralMoney":0.0,"taxFee":0.0,"payFee":0.0,"discount":0.0,"goodCount":2,"totalSalePrice":364.7,"totalOriginalPrice":364.7,"orderTime":1470109494000,"payTime":null,"status":"已下单","orderStatus":1,"isCommented":true,"payWay":"支付宝","goods":[{"goodId":869,"categoryName":"营养元素","sn":"00102500869","brandName":"BestinFoods","name":"青木瓜复合维生素  150粒/瓶","stock":187,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-06-28/577220020f2f1.jpg"],"msrp":228.0,"price":198.0,"warehouse":"下沙保税仓","tags":"单品推荐","goodNumber":1,"commented":false},{"goodId":349,"categoryName":"宝宝奶粉","sn":"02002900349","brandName":"Nutrilon","name":"荷兰进口Nutrilon牛栏婴儿奶粉3段800克/罐","stock":1020,"brief":"适合10个月以上","activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/349/56da50605a9db.jpg"],"msrp":200.4,"price":166.7,"warehouse":"保税仓","tags":"单品推荐,新品爆品","goodNumber":1,"commented":false}],"failureTime":null,"logisMsg":null},
      {"orderId":3811,"sn":"6633722016072618335297924","consignee":"测试","consigneeAddress":"浙江省杭州市余杭区解放军或大或小","consigneeTel":"18158115554","consigneeIdCard":null,"couponName":null,"couponDiscount":null,"shippingFee":0.0,"integralMoney":0.0,"taxFee":0.0,"payFee":0.0,"discount":0.0,"goodCount":1,"totalSalePrice":298.0,"totalOriginalPrice":298.0,"orderTime":1469529233000,"payTime":null,"status":"订单已取消","orderStatus":5,"isCommented":false,"payWay":"支付宝","goods":[{"goodId":922,"categoryName":"调节三高","sn":"02002300922","brandName":"挪特24","name":"挪威进口挪特24三文鱼油软胶囊180粒 ","stock":9986,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-07-22/5791f2a8be54f.jpg"],"msrp":399.0,"price":298.0,"warehouse":"五常仓","tags":"","goodNumber":1,"commented":false}],"failureTime":null,"logisMsg":null}];
    let waitPaidOrder = [
      {"orderId":4062,"sn":"7117372016080220120233824","consignee":"源品优购测试账号","consigneeAddress":"浙江省杭州市余杭区五常大道181华立云立方测试","consigneeTel":"18158115554","consigneeIdCard":"376667377654456677","couponName":null,"couponDiscount":null,"shippingFee":0.0,"integralMoney":0.0,"taxFee":0.0,"payFee":0.0,"discount":0.0,"goodCount":1,"totalSalePrice":19.9,"totalOriginalPrice":19.9,"orderTime":1470139922000,"payTime":null,"status":"已下单","orderStatus":1,"isCommented":true,"payWay":"支付宝","goods":[{"goodId":826,"categoryName":"坚果","sn":"02604200826","brandName":"Albay","name":"菲律宾原装进口W.L.FOODS.青豆大礼包（25g*8包+70g*10包）","stock":81,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-05-27/574827a2055bb.jpg"],"msrp":69.0,"price":19.9,"warehouse":"五常仓","tags":"","goodNumber":1,"commented":false}],"failureTime":null,"logisMsg":null},{"orderId":4046,"sn":"2517232016080211525297324","consignee":"源品优购测试账号","consigneeAddress":"浙江省杭州市余杭区五常大道181华立云立方测试","consigneeTel":"18158115554","consigneeIdCard":"376667377654456677","couponName":null,"couponDiscount":null,"shippingFee":0.0,"integralMoney":0.0,"taxFee":0.0,"payFee":0.0,"discount":0.0,"goodCount":1,"totalSalePrice":259.0,"totalOriginalPrice":259.0,"orderTime":1470109973000,"payTime":null,"status":"已下单","orderStatus":1,"isCommented":false,"payWay":"支付宝","goods":[{"goodId":867,"categoryName":"排毒养颜","sn":"00104900867","brandName":"BestinFoods","name":"元气青木瓜口服液   10瓶/盒","stock":183,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-06-28/57721e76309ad.jpg"],"msrp":299.0,"price":259.0,"warehouse":"下沙保税仓","tags":"单品推荐","goodNumber":1,"commented":false}],"failureTime":null,"logisMsg":null},{"orderId":4045,"sn":"5440342016080211445371724","consignee":"源品优购测试账号","consigneeAddress":"浙江省杭州市余杭区五常大道181华立云立方测试","consigneeTel":"18158115554","consigneeIdCard":"376667377654456677","couponName":null,"couponDiscount":null,"shippingFee":0.0,"integralMoney":0.0,"taxFee":0.0,"payFee":0.0,"discount":0.0,"goodCount":2,"totalSalePrice":364.7,"totalOriginalPrice":364.7,"orderTime":1470109494000,"payTime":null,"status":"已下单","orderStatus":1,"isCommented":true,"payWay":"支付宝","goods":[{"goodId":869,"categoryName":"营养元素","sn":"00102500869","brandName":"BestinFoods","name":"青木瓜复合维生素  150粒/瓶","stock":187,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-06-28/577220020f2f1.jpg"],"msrp":228.0,"price":198.0,"warehouse":"下沙保税仓","tags":"单品推荐","goodNumber":1,"commented":false},{"goodId":349,"categoryName":"宝宝奶粉","sn":"02002900349","brandName":"Nutrilon","name":"荷兰进口Nutrilon牛栏婴儿奶粉3段800克/罐","stock":1020,"brief":"适合10个月以上","activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/349/56da50605a9db.jpg"],"msrp":200.4,"price":166.7,"warehouse":"保税仓","tags":"单品推荐,新品爆品","goodNumber":1,"commented":false}],"failureTime":null,"logisMsg":null}
    ];
    let waitSendOrder = [
      {"orderId":4073,"sn":"3088542016080220400076024","consignee":"源品优购测试账号","consigneeAddress":"浙江省杭州市余杭区五常大道181华立云立方测试","consigneeTel":"18158115554","consigneeIdCard":"376667377654456677","couponName":null,"couponDiscount":null,"shippingFee":0.0,"integralMoney":0.0,"taxFee":0.0,"payFee":0.0,"discount":0.0,"goodCount":1,"totalSalePrice":0.7,"totalOriginalPrice":0.7,"orderTime":1470141601000,"payTime":1470141610000,"status":"已清关","orderStatus":2,"isCommented":false,"payWay":"支付宝","goods":[{"goodId":294,"categoryName":"坚果","sn":"02604200294","brandName":"Albay","name":"菲律宾原装进口W.L.FOODS.青豆大包70g/包","stock":1502,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-04-28/5721af13bd192.jpg"],"msrp":5.88,"price":0.7,"warehouse":"下沙保税仓","tags":"","goodNumber":1,"commented":false}],"failureTime":null,"logisMsg":null},{"orderId":4063,"sn":"1882872016080220123787524","consignee":"源品优购测试账号","consigneeAddress":"浙江省杭州市余杭区五常大道181华立云立方测试","consigneeTel":"18158115554","consigneeIdCard":"376667377654456677","couponName":null,"couponDiscount":null,"shippingFee":0.0,"integralMoney":0.0,"taxFee":0.0,"payFee":0.0,"discount":0.0,"goodCount":1,"totalSalePrice":0.7,"totalOriginalPrice":0.7,"orderTime":1470139958000,"payTime":1470139968000,"status":"已清关","orderStatus":2,"isCommented":false,"payWay":"支付宝","goods":[{"goodId":294,"categoryName":"坚果","sn":"02604200294","brandName":"Albay","name":"菲律宾原装进口W.L.FOODS.青豆大包70g/包","stock":1533,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-04-28/5721af13bd192.jpg"],"msrp":5.88,"price":0.7,"warehouse":"下沙保税仓","tags":"","goodNumber":1,"commented":false}],"failureTime":null,"logisMsg":null},{"orderId":3065,"sn":"4181982016062909500187224","consignee":"王一帆","consigneeAddress":"浙江省杭州市余杭区五常大道182华立云立方二号楼八楼","consigneeTel":"18158115554","consigneeIdCard":"331082199310048871","couponName":null,"couponDiscount":null,"shippingFee":10.0,"integralMoney":0.0,"taxFee":1.64,"payFee":0.0,"discount":0.0,"goodCount":2,"totalSalePrice":15.45,"totalOriginalPrice":3.8,"orderTime":1467165002000,"payTime":1467165100000,"status":"已清关","orderStatus":2,"isCommented":true,"payWay":"支付宝","goods":[{"goodId":411,"categoryName":"坚果","sn":"02604200411","brandName":"Albay","name":"菲律宾原装进口W.L.FOODS.青豆小包25g/包","stock":1432,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-03-11/56e26713b8a77.jpg"],"msrp":3.5,"price":1.9,"warehouse":"下沙保税仓","tags":"","goodNumber":2,"commented":false}],"failureTime":null,"logisMsg":null}
    ];
    let waitReceiveOrder = [
      {"orderId":3461,"sn":"8600912016071810423977124","consignee":"源品优购测试账号","consigneeAddress":"浙江省杭州市余杭区五常大道181华立云立方测试","consigneeTel":"18158115554","consigneeIdCard":"376667377654456677","couponName":null,"couponDiscount":null,"shippingFee":10.0,"integralMoney":0.0,"taxFee":1.42,"payFee":0.0,"discount":0.0,"goodCount":1,"totalSalePrice":13.32,"totalOriginalPrice":1.9,"orderTime":1468809760000,"payTime":1468809799000,"status":"已发货","orderStatus":3,"isCommented":true,"payWay":"支付宝","goods":[{"goodId":411,"categoryName":"坚果","sn":"02604200411","brandName":"Albay","name":"菲律宾原装进口W.L.FOODS.青豆小包25g/包","stock":1409,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-03-11/56e26713b8a77.jpg"],"msrp":3.5,"price":1.9,"warehouse":"下沙保税仓","tags":"","goodNumber":1,"commented":false}],"failureTime":null,"logisMsg":null},{"orderId":3460,"sn":"1171532016071809522227924","consignee":"源品优购测试账号","consigneeAddress":"浙江省杭州市余杭区五常大道181华立云立方测试","consigneeTel":"18158115554","consigneeIdCard":"376667377654456677","couponName":null,"couponDiscount":null,"shippingFee":0.0,"integralMoney":0.0,"taxFee":0.0,"payFee":0.0,"discount":0.0,"goodCount":1,"totalSalePrice":149.0,"totalOriginalPrice":149.0,"orderTime":1468806742000,"payTime":null,"status":"已发货","orderStatus":3,"isCommented":true,"payWay":"支付宝","goods":[{"goodId":869,"categoryName":"营养元素","sn":"00102500869","brandName":"BestinFoods","name":"青木瓜复合维生素  150粒/瓶","stock":192,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-06-28/577220020f2f1.jpg"],"msrp":228.0,"price":149.0,"warehouse":"下沙保税仓","tags":"单品推荐","goodNumber":1,"commented":false}],"failureTime":null,"logisMsg":null},{"orderId":3028,"sn":"1271362016062817340941524","consignee":"王一帆","consigneeAddress":"浙江省杭州市余杭区五常大道182华立云立方二号楼八楼","consigneeTel":"18158115554","consigneeIdCard":"331082199310048871","couponName":null,"couponDiscount":null,"shippingFee":10.0,"integralMoney":0.0,"taxFee":0.0,"payFee":0.0,"discount":0.0,"goodCount":2,"totalSalePrice":54.0,"totalOriginalPrice":440.0,"orderTime":1467106449000,"payTime":1467106575000,"status":"已发货","orderStatus":3,"isCommented":false,"payWay":"支付宝","goods":[{"goodId":879,"categoryName":"养肝护肝","sn":"00104100879","brandName":"BestinFoods","name":"酒豪传说  6包/袋","stock":199,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-06-28/577233f1cfc57.jpg"],"msrp":59.0,"price":42.0,"warehouse":"下沙保税仓","tags":"单品推荐","goodNumber":1,"commented":false},{"goodId":874,"categoryName":"营养元素","sn":"00102500874","brandName":"BestinFoods","name":"记忆灵 60粒/瓶","stock":198,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-06-28/577224eee2571.jpg"],"msrp":468.0,"price":398.0,"warehouse":"下沙保税仓","tags":"单品推荐","goodNumber":1,"commented":false}],"failureTime":null,"logisMsg":null}
    ];
    let waitCommentOrder = [
      {"orderId":1315,"sn":"1230802016051111172809024","consignee":"钟神琦","consigneeAddress":"浙江省杭州市余杭区五常大道181号云立方二号楼八层测试","consigneeTel":"15658009140","consigneeIdCard":"352202199209144555","couponName":null,"couponDiscount":null,"shippingFee":0.0,"integralMoney":0.0,"taxFee":null,"payFee":0.0,"discount":0.0,"goodCount":4,"totalSalePrice":475.73,"totalOriginalPrice":438.0,"orderTime":1462936648000,"payTime":null,"status":"已收货","orderStatus":4,"isCommented":false,"payWay":"支付宝","goods":[{"goodId":824,"categoryName":"面膜膏霜","sn":"00804000824","brandName":"九朵云","name":"【韩国直邮】九朵云祛斑霜50ml/瓶","stock":99,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-05-07/572d86f124790.jpg"],"msrp":159.0,"price":99.0,"warehouse":"海外直邮","tags":"","goodNumber":1,"commented":true},{"goodId":277,"categoryName":"排毒养颜","sn":"00604900277","brandName":"Veggie Dell","name":"日本热销Veggie Dell茄红素酵素粒93粒/包","stock":467,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/277/56d970de19b84.jpg"],"msrp":238.8,"price":199.0,"warehouse":"下沙保税仓","tags":"单品推荐","goodNumber":1,"commented":false},{"goodId":549,"categoryName":"饼干点心","sn":"02203200549","brandName":"好趣","name":"瑞典好趣原味曲奇饼干225g/袋","stock":498,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-03-17/56ea75438d82d.jpg"],"msrp":40.0,"price":22.0,"warehouse":"五常仓","tags":"","goodNumber":1,"commented":false},{"goodId":583,"categoryName":"排毒养颜","sn":"02304900583","brandName":"GNC健安喜","name":"美国GNC健安喜葡萄籽精华胶囊 （100mg*100粒/瓶）","stock":1021,"brief":null,"activityId":null,"activityName":null,"imgs":["http://desc.bestinfoods.com/items/2016-03-21/56ef9d0956a0c.jpg"],"msrp":149.0,"price":118.0,"warehouse":"保税仓","tags":"单品推荐,新品爆品","goodNumber":1,"commented":false}],"failureTime":null,"logisMsg":null}
    ];
    // dispatch(gotUserOrderData(parameter.type,successData));
    if (handleId === '0') {
      requestData('http://ndapi.bestinfoods.com/order/get/orderlist', 'POST')
      .then((myAllOrder) => {
        dispatch(gotUserOrderData('MYALLORDER',myAllOrder));
      },
      (errorMessage) => { });
    }else if (handleId === '1') {
      requestData('http://ndapi.bestinfoods.com/order/get/orderlist?condition=1', 'POST')
      .then((waitPaidOrder) => {
        dispatch(gotUserOrderData('WAITPAIDORDER',waitPaidOrder));
      },
      (errorMessage) => { });
    }else if (handleId === '2') {
      requestData('http://ndapi.bestinfoods.com/order/get/orderlist?condition=2', 'POST')
      .then((waitSendOrder) => {
        dispatch(gotUserOrderData('WAITSENDORDER',waitSendOrder));
      },
      (errorMessage) => { });
    }else if (handleId === '3') {
      requestData('http://ndapi.bestinfoods.com/order/get/orderlist?condition=3', 'POST')
      .then((waitReceiveOrder) => {
        dispatch(gotUserOrderData('WAITRECEIVEORDER',waitReceiveOrder));
      },
      (errorMessage) => { });
    }else {
      requestData('http://ndapi.bestinfoods.com/order/get/orderlist?condition=4', 'POST')
      .then((waitCommentOrder) => {
        dispatch(gotUserOrderData('WAITCOMMENTORDER',waitCommentOrder));
      },
      (errorMessage) => { });
    }
  });
}

function gotUserOrderData(typeState,data) {
  return {
    type: typeState,
    data
  };
}

export function queryUserOrderDetailData(parameter) {
  return (
    (dispatch) => {
      requestData('http://ndapi.bestinfoods.com/order/get/orderdetails?orderId=2016062457453423', 'POST')
      .then((successData) => {
        dispatch(gotUserOrderDetailData(successData));
      },
      (errorMessage) => { });
    }
  )
}

function gotUserOrderDetailData(data) {
  return {
    type: Types.USERORDERDETAIL,
    data
  };
}
