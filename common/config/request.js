/**
 * [requestData description]
 * @param  {[string]} api    [请求地址]
 * @param  {[string]} method [请求方式 GET | POST ]
 * @param  {[object]} data   [请求参数]
 * @return {[object]}        [返回的数据对象]
 */
export default function requestData(api,method,data) {
	var xmlhttp;
	var str = "";
	if (typeof data == "string") {
		str = data;
	} else if (typeof data == "object") {
		var arr = [];
        for(var k in data){
            var v = data[k];
            arr.push(k + "=" + v);
        }
        str = arr.join("&");
	};
	// str = (str.indexOf("?") == -1 ? "?" : "&" )+ str ;
	return new Promise((resolve, reject) => {
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	 		xmlhttp=new XMLHttpRequest();
		} else {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function(){
		 	if (xmlhttp.readyState==4 && xmlhttp.status==200){
		    resolve(JSON.parse(xmlhttp.responseText));
		  }
		}
		xmlhttp.open(method, api, true);
		if (method == "POST") {
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send(str);
		} else {
			xmlhttp.send();
		}
	});
};
