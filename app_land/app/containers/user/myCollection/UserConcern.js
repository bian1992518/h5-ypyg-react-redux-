
/*关注的品牌*/
import React, { Component } from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import styles from '../../../styles/user/concernStyle';
import NavigatorBar from '../../../components/navigatorBar_noRightBtn';
import { Actions } from 'react-native-router-flux';

export default class Concern extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	listItemRender() {
		const concernData = [{
			"brandId": 13,
			"name": "Jamieson",
			"brief": "Jamieson，健美生，是加拿大第一品牌，是世界三大营养保健品企业（第1：美国 NBTY 公司；第2：加拿大 Jamieson laboratories ltd；第3：美国 自然制造Nature Made）之一。健美生在全球五大洲拥有实验室研究不同的人群开发更适合的健康产品。其产品原料来自世界上环境最好的无污染区域，进行全球天然采集。",
			"countryId": 22,
			"countryName": "加拿大",
			"brandlogo": "http://desc.bestinfoods.com/brand/logo/2016-03-07/56dd7a357a7ce.jpg",
			"tags": ""
		}, {
			"brandId": 3,
			"name": "挪特24",
			"brief": "挪特24三文鱼油是一款挪威原装进口的三文鱼油，选用来自挪威寒冷洁净海域的优质三文鱼为原料，现捕、现制，从活鱼原料到成品只需24小时。专利技术、鲜体分离，充分保护原有成分，吃一粒就相当于吃一大块新鲜的三文鱼肉。作为一款老少皆宜的膳食补充剂，口感佳，营养丰富，富含天然Omega-3不饱和脂肪酸（DHA、EPA）和抗氧化剂（虾青素），长期使用可有效调节人体血脂，平衡血脂浓度，促进体内饱和脂肪酸代谢，对改善记忆力、保护视力、延缓衰老有很好的辅助作用。",
			"countryId": 20,
			"countryName": "挪威",
			"brandlogo": "http://desc.bestinfoods.com/brand/logo/2016-03-09/56df7d5450732.jpg",
			"tags": ""
		}, {
			"brandId": 5,
			"name": "Blackmores",
			"brief": "Blackmores，又名澳佳宝，成立于1930年，澳大利亚的第一品牌保健品，提供一系列高品质的维生素、矿物质、草药以及营养补充品。经过80年努力，Blackmores已经成长为澳洲本土及全世界最被信任的生活科技健康食品公司，与它“The Best Of Health”的承诺一起享誉全球。已经销售的国家包括澳洲、新西兰、香港、马来西亚、新加坡、泰国、韩国、中国台湾、香港及大陆地区。",
			"countryId": 24,
			"countryName": "澳大利亚",
			"brandlogo": "http://desc.bestinfoods.com/brand/logo/2016-03-07/56dd780a4fb7a.jpg",
			"tags": "推荐品牌"
		}, {
			"brandId": 90,
			"name": "底力",
			"brief": "",
			"countryId": 6,
			"countryName": "日本",
			"brandlogo": "http://bestinfoods-dec.oss-cn-hangzhou.aliyuncs.com/brand/logo/2016-06-21/5768f8798600c.jpg",
			"tags": "推荐品牌"
		}, {
			"brandId": 17,
			"name": "Nutrilon",
			"brief": "Nutrilon（荷兰牛栏）1901年诞生于荷兰，是荷兰婴幼儿奶粉的领先品牌，同时也是英国、法国、意大利等国家销量第一的婴幼儿奶粉品牌。拥有世界最大的人类营养研究中心，其产品的研究和开发工作全由专业的医学人员担任。在世界各地，荷兰牛栏一直担当着领导高质量婴幼儿奶粉制造业的地位，深受全世界超过百万专业医护人员和母亲的信赖。",
			"countryId": 19,
			"countryName": "荷兰",
			"brandlogo": "http://desc.bestinfoods.com/brand/logo/2016-03-07/56dd7b4c18815.jpg",
			"tags": "大牌推荐"
		}, {
			"brandId": 8,
			"name": "Veggie Dell",
			"brief": "Veggie Dell，使用的原液来自迄今为止已有185年历史，创建于天保元年的日本老字号酒窖——澤天酒造。坚持以优质天然的原材，严苛精密的制造工艺，为人们提供更适合自身所需的美颜养生方式。",
			"countryId": 6,
			"countryName": "日本",
			"brandlogo": "http://desc.bestinfoods.com/brand/logo/2016-03-07/56dd789779ee1.jpg",
			"tags": "推荐品牌"
		}, {
			"brandId": 52,
			"name": "尤妮佳",
			"brief": "尤妮佳集团的宗旨是：“全力创造您身边一流的产品，助您实现生活梦想”。企业的理念为“NOLA&amp;DOLA（Necessity of Life with Activity &amp; Dream of Life with Activities），现在主要提供以婴儿纸尿裤为中心的婴儿护理产品、卫生巾•护垫等女性护理用品、成人用护理用品、清洁护理用品、湿纸巾•立体口罩、宠物护理用品等产品。",
			"countryId": 6,
			"countryName": "日本",
			"brandlogo": "http://desc.bestinfoods.com/brand/logo/2016-03-15/56e7ce9895961.jpg",
			"tags": ""
		}, {
			"brandId": 15,
			"name": "康宝莱",
			"brief": "我们是一家全球领先的营养和体重管理公司，成立于1980年。我们的体重管理、营养补充和个人护理三大系列产品销售遍及世界90多个国家。我们资助康宝莱家庭基金会（HFF）及康宝莱之家计划，将优质的营养品带给有需要的孩子们。我们同时也赞助了很多世界顶级运动员、运动队以及多项赛事，包括洛杉矶银河队和C罗，还有超过15个运动项目的冠军获得者。",
			"countryId": 23,
			"countryName": "美国",
			"brandlogo": "http://desc.bestinfoods.com/brand/logo/2016-03-07/56dd7ace3faa5.jpg",
			"tags": ""
		}];

		return concernData.map(function (data, index) {
			return <Brand key={index} img={data.brandlogo} name={data.name} detail={data.brief} />;
		});
	}

	goBack() {
		this.props.history.goBack();
	}
	render() {
		return <View style={styles.container}>
				<NavigatorBar title="关注的品牌" />
				<ScrollView style={styles.scrollView}>
					{this.listItemRender()}
				</ScrollView>
			</View>;
	}
}

class Brand extends Component {
	constructor(props) {
		super(props);
		this.state = {
			concern: true
		};
	}
	action() {
		let bool = !this.state.concern;
		this.setState({
			concern: bool
		});
	}
	render() {
		const { img, name, detail } = this.props;
		let state = this.state.concern ? '已关注' : '关注';
		return <View style={styles.brands}>
				<Image style={styles.goodsImg} source = {
				 {
					uri: img
				}
			} />
				<View style={styles.goodsInfo}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.detail}>自动换行方法有待解决</Text>
				</View>
				<Text style={styles.concern} onClick={() => this.action()}>{state}</Text>
			</View>;
	}
}