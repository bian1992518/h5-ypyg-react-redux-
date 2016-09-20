export function add0(m){return m<10?'0'+m:m }
export function getLocalTime(nS) {
    var time = new Date(parseInt(nS) * 1000);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
  }
//1:已下单；2:已取消；3:已付款;4:付款失败;5:已清关;6:清关失败;7:已发货;8已收货;
export function getOrderStatus(statusId) {
  switch (statusId) {
    case 1:
      return '待付款'
      break;
    case 3:case 4:
      return '待发货'
      break;
    case 5:case 6:case 7:
      return '待收货'
      break;
    case 8:
      return '交易成功'
      break;
    default:
      return '交易取消'
  }
}
//排除数组中相同元素
export function unique(arr) {
  var result = [], isRepeated;
  var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
      console.log(i);
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}
