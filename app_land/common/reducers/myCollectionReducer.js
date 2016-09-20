//就是一个function，功能就是在action触发后，返回一个新的state(就是个对象)
import * as Types from '../contants/constants';
import merge from 'lodash/merge';
import union from 'lodash/union';

const collectionState = {
	collectionData : [
		{"goodId":278,"categoryId":49,"categoryName":"排毒养颜","brandId":null,"brandName":null,"name":"日本热销Veggie Dell乳酸菌生姜酵素120粒/包","stock":457,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/278/56d9719c71bc4.jpg","http://desc.bestinfoods.com/items/278/56d9719cb4840.jpg","http://desc.bestinfoods.com/items/278/56d9719da34b3.jpg"],"msrp":118.9,"price":99.0,"warehouseId":null,"tags":"","sn":"00604900278"},
		{"goodId":294,"categoryId":42,"categoryName":"坚果","brandId":null,"brandName":null,"name":"菲律宾原装进口W.L.FOODS.青豆大包70g/包","stock":3054,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/2016-04-28/5721af13bd192.jpg","http://desc.bestinfoods.com/items/2016-04-28/5721af3c2ed96.jpg"],"msrp":5.88,"price":0.7,"warehouseId":null,"tags":"","sn":"02604200294"},
		{"goodId":293,"categoryId":42,"categoryName":"坚果","brandId":null,"brandName":null,"name":"菲律宾原装进口Albay霹雳果芝麻味80g/包","stock":1008,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/293/56d97682cc146.jpg","http://desc.bestinfoods.com/items/293/56d97682e3314.jpg"],"msrp":39.0,"price":6.0,"warehouseId":null,"tags":"","sn":"02604200293"},
		{"goodId":291,"categoryId":42,"categoryName":"坚果","brandId":null,"brandName":null,"name":"菲律宾原装进口Albay霹雳果黄油味80g/包","stock":1308,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/2016-03-10/56e13b2bcc27e.jpg","http://desc.bestinfoods.com/items/2016-03-10/56e13b2be04e7.jpg"],"msrp":39.0,"price":6.0,"warehouseId":null,"tags":"","sn":"02604200291"},
		{"goodId":419,"categoryId":1033,"categoryName":"宝宝营养","brandId":null,"brandName":null,"name":"美国童年时光钙镁锌营养液（474ml/瓶）","stock":998,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/2016-03-15/56e7a39181f0d.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7a393b9e92.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7a39635f39.jpg"],"msrp":228.0,"price":182.0,"warehouseId":null,"tags":"","sn":"02403300419"},{"goodId":290,"categoryId":42,"categoryName":"坚果","brandId":null,"brandName":null,"name":"菲律宾原装进口Albay霹雳果蜂蜜味80g/袋","stock":1124,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/2016-03-10/56e13add1885c.jpg","http://desc.bestinfoods.com/items/2016-03-10/56e13add303a9.jpg"],"msrp":49.0,"price":6.0,"warehouseId":null,"tags":"单品推荐","sn":"02604200290"},
		{"goodId":460,"categoryId":1026,"categoryName":"婴儿纸尿裤","brandId":null,"brandName":null,"name":"日本花王（Merries）纸尿裤M号64片/包(6KG-11KG)","stock":831,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/2016-03-15/56e7e77635f61.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7e7764a760.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7e77666f48.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7e77682d0f.jpg"],"msrp":159.9,"price":125.3,"warehouseId":null,"tags":"单品推荐","sn":"00702600460"},
		{"goodId":461,"categoryId":1026,"categoryName":"婴儿纸尿裤","brandId":null,"brandName":null,"name":"日本花王（Merries）纸尿裤M号68片/包(增量装）(6KG-11KG)","stock":533,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/2016-03-15/56e7e7d898775.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7e7d8a834b.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7e7d8b8ec6.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7e7d8c3c6b.jpg"],"msrp":179.4,"price":139.9,"warehouseId":null,"tags":"","sn":"00702600461"},
		{"goodId":462,"categoryId":1026,"categoryName":"婴儿纸尿裤","brandId":null,"brandName":null,"name":"日本花王（Merries）纸尿裤NB号90片/包（5kg以下）","stock":562,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/2016-03-15/56e7e82e1bdc3.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7e82e31369.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7e82e5baff.jpg"],"msrp":141.0,"price":117.0,"warehouseId":null,"tags":"新品爆品","sn":"00702600462"},
		{"goodId":463,"categoryId":1026,"categoryName":"婴儿纸尿裤","brandId":null,"brandName":null,"name":"日本花王（Merries）纸尿裤S号82片/包（4kg-8kg）","stock":487,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/2016-03-15/56e7e875df65e.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7e8760314b.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7e8763b8f7.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7e87658260.jpg"],"msrp":153.4,"price":108.5,"warehouseId":null,"tags":"","sn":"00702600463"}
	],

	unCollectionData : [
		{"goodId":298,"categoryId":25,"categoryName":"营养元素","brandId":null,"brandName":null,"name":"Blackmores维骨力氨糖软骨素氨基葡萄糖关节灵（180粒/瓶）","stock":17,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/298/56da427daaa5f.jpg","http://desc.bestinfoods.com/items/298/56da427dbaf98.jpg"],"msrp":282.0,"price":235.0,"warehouseId":null,"tags":"","sn":"02402500298"},
		{"goodId":327,"categoryId":27,"categoryName":"宝宝辅食","brandId":null,"brandName":null,"name":"GERBER嘉宝星星泡芙条缤纷装共四罐","stock":1022,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/327/56da4ae32d22c.jpg","http://desc.bestinfoods.com/items/327/56da4ae339471.jpg","http://desc.bestinfoods.com/items/327/56da4ae3441b7.jpg","http://desc.bestinfoods.com/items/327/56da4ae34f8b8.jpg"],"msrp":105.6,"price":99.0,"warehouseId":null,"tags":"","sn":"02302700327"},
		{"goodId":485,"categoryId":49,"categoryName":"排毒养颜","brandId":null,"brandName":null,"name":"澳洲原装进口Swisse补铁补血口服液 （200ml/瓶）","stock":1024,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/2016-03-16/56e926466b61c.jpg","http://desc.bestinfoods.com/items/2016-03-16/56e926467bcc3.jpg","http://desc.bestinfoods.com/items/2016-03-16/56e926468a4c1.jpg"],"msrp":149.0,"price":135.4,"warehouseId":null,"tags":"","sn":"02404900485"},
		{"goodId":420,"categoryId":1033,"categoryName":"宝宝营养","brandId":null,"brandName":null,"name":"美国童年时光维生素C补充液（118.5ml /瓶）","stock":997,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/2016-03-15/56e7a434e6840.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7a437953d4.jpg","http://desc.bestinfoods.com/items/2016-03-15/56e7a43978ddd.jpg"],"msrp":158.0,"price":111.0,"warehouseId":null,"tags":"","sn":"02403300420"},
		{"goodId":559,"categoryId":1029,"categoryName":"宝宝奶粉","brandId":null,"brandName":null,"name":"荷兰Hero baby美素2段800g/罐（6-10个月）","stock":92,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/2016-03-19/56ecb67a61bb7.jpg","http://desc.bestinfoods.com/items/2016-03-19/56ecb67aa3365.jpg","http://desc.bestinfoods.com/items/2016-03-19/56ecb67abeb80.jpg","http://desc.bestinfoods.com/items/2016-03-19/56ecb67ad9c9a.jpg"],"msrp":162.0,"price":107.0,"warehouseId":null,"tags":"","sn":"02002900559"},
		{"goodId":575,"categoryId":51,"categoryName":"美体塑身","brandId":null,"brandName":null,"name":"美国康宝莱草本浓缩速溶茶饮减肥茶100g(柠檬味)/瓶","stock":34,"brief":null,"activityId":null,"activityName":null,"img":["http://desc.bestinfoods.com/items/2016-03-19/56ed1279b3ecf.jpg","http://desc.bestinfoods.com/items/2016-03-19/56ed1279c010d.jpg","http://desc.bestinfoods.com/items/2016-03-19/56ed1279cf403.jpg","http://desc.bestinfoods.com/items/2016-03-19/56ed1279da06d.jpg"],"msrp":300.0,"price":257.4,"warehouseId":null,"tags":"单品推荐","sn":"02305100575"}
	],

	offSale : false,

	message : {},
}

export function collection(state = collectionState,action){
	switch (action.type) {
		case Types.COLLECTION :
			return merge({}, state, {
				message : state.collectionData,
				offSale : false
			})
			break;
		case Types.UNCOLLECTION :
			return merge({}, state, {
				message : state.unCollectionData,
				offSale : true
			})
			break;
		default:
			return merge({}, state, {
				message : state.collectionData,
				offSale : false
			})
	}
}
