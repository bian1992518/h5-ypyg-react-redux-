//商品分类  lxf

import React , {Component} from 'react';
import BaseComponent from './baseComponent';
import styles from '../styles/classifyStyles';
import { Link } from 'react-router';
import Special from '../special/stringImage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { queryClassifyData } from '../../common/actions/ClassifyActions';
import { sendMessageHandle } from '../../common/actions/sendMessageActions';
import { classifyPressDown } from "../../common/actions/tabAction";
import merge from 'lodash/merge';

class Classify extends BaseComponent {
	constructor(props) {
		super(props);

		this.renderTypesList = this.renderTypesList.bind(this);
		this.renderBrandsList = this.renderBrandsList.bind(this);
		this.renderGlobalList = this.renderGlobalList.bind(this);
		this.hasDataRender = this.hasDataRender.bind(this);
		this.renderClassAList = this.renderClassAList.bind(this);
		this.renderClassBList = this.renderClassBList.bind(this);
	}

	componentWillMount() {
		this.props.queryClassifyData();
		this.props.classifyPressDown();
	}

	componentDidMount() {

	};
	//商品类型
	renderTypesList (typeData) {
		let self = this;
		return (
			typeData.map(function(typeCellData,index){
				return (
					<div key = { index }>
						{self.renderClassAList(typeCellData)}
					</div>
				)
			})
		)
	}
	//商品一级类目list
	renderClassAList(typeCellData) {
		let self = this;
		return (
			<div style = { styles.goodsTypeItem }>
				<Link to = {{ pathname:"/search",query:{brandId: typeCellData.categoryId} }} onClick = {()=>self.props.sendMessageHandle(typeCellData.categoryName)}>
					<div style = { styles.typeHeader }>
						<p style = { styles.typeFont }>{typeCellData.categoryName}</p>
						<p style = { styles.typeContent }>全部</p>
						<img style = { styles.goRightImg } src = {Special.imageUrls.ic_right_arrow}/>
					</div>
				</Link>
				<div style = { styles.typeView }>{self.renderClassBList(typeCellData.childs)}</div>
			</div>
		)
	}
	//商品二级类目list
	renderClassBList(typesData) {
		let self = this;
		return (
			typesData.map(function(typeData,index){
				let url = typeData.imgMain ? typeData.imgMain.url : '';
				return (
					<Link key = { index } to = {{ pathname:"/search",query:{brandId: typeData.categoryId} }} onClick = {()=>self.props.sendMessageHandle(typeData.categoryName)}>
						<div style = { styles.typeInfo }>
							<p style = { styles.typeTitle }>{typeData.categoryName}</p>
							<img style ={ styles.typeImg } src = { url }/>
						</div>
					</Link>
				)
			})
		)
	}
	//推荐品牌
	renderBrandsList (brandsData) {
		let self = this;
		return (
			brandsData.map(function(brandData,index){
				return (
					<Link
						key = { index }
						to = {{pathname: "/brand", query:{brandId: 3}}}
						onClick = {()=>self.props.sendMessageHandle(brandData.brandName)}>
						<div style = { styles.brandsView } >
							<img style = { styles.brandsImg } resizeMode = "contain" src = {brandData.imgLogo.url}/>
						</div>
					</Link>
				)
			})
		)
	}
	//全球必买
	renderGlobalList (countries) {
		let self = this;
		return (
			countries.map(function(country,index){
				return (
					<Link key = { index } to = {{ pathname:"/search",query:{countryId: country.countryId} }} onClick = {()=>self.props.sendMessageHandle(country.pavilionName)}>
						<div style = { styles.infoOutView } key = { index } >
							<p style = { styles.globalCountry }>{country.pavilionName}</p>
							<p style = { styles.globalCountryEng }>{country.countryNameEn}</p>
							<img style = { styles.infoInsideImg } resizeMode = "contain" src = {country.imgMain.url}/>
						</div>
					</Link>
				)
			})
		)
	}
	//有数据
	hasDataRender() {
		const { ClassifyReducer } = this.props;
		let classifyData = ClassifyReducer.data.classifyData.data.categorys;
		let recommendedBrandData = ClassifyReducer.data.recommendedBrandData.data;
		let globalBuyData = ClassifyReducer.data.globalBuyData.data.pavilions;

		if (!classifyData||!recommendedBrandData||!globalBuyData) {
			return (
				<div>无数据</div>
			)
		}
		return (
			<div style = { styles.viewDirection }>
				<scrollView style={styles.scrollView}>
					{this.renderTypesList(classifyData)}

					<div style = { styles.brandsHeader }>
						<p style = { styles.brandsTitle }>推荐品牌</p>
					</div>
					<div style = { styles.typeView }>
						{this.renderBrandsList(recommendedBrandData)}
					</div>

					<div style = { styles.global }>
						<p style = { styles.globalTitle }>全球必买</p>
					</div>
					<div style = { styles.typeView }>
						{this.renderGlobalList(globalBuyData)}
					</div>
				</scrollView>
			</div>
		)
	}

	render () {
		const { ClassifyReducer } = this.props;
		var headerParam = {
      isHeaderShow: false,
      headerName: '分类',
      isBackShow: false
    };
    var netRequestParam = {
      isRequesting: ClassifyReducer.dataRequesting,
      isDataRequestSucc: ClassifyReducer.isDataRequestSucc,
      hasData: ClassifyReducer.data,
    };
		return (
			<div style = { styles.container }>
				<div style = { styles.searchBar }>
					<Link to = {"/SearchKeyWords"} style ={ styles.searchView }>
						<img style = { styles.searchImg } src = 'common/images/ic_search@3x.png'/>
					</Link>
					<Link to = {{ pathname:"/ZtestPage",query:{id: "23"} }} style = {styles.messageLink}>
						<img style = { styles.messageImg } src = 'common/images/ic_message@3x.png'/>
					</Link>
				</div>
				{super.allSceneRender(headerParam, netRequestParam)}
			</div>
		);
	}
}

function mapStateToProps(state){
	const { ClassifyReducer } = state;
  return {
		ClassifyReducer
  }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		queryClassifyData,
		classifyPressDown,
		sendMessageHandle
	},dispatch)
}

//将state和dispatch映射在props上
export default connect(mapStateToProps,mapDispatchToProps)(Classify)
