/*购物车*/
import React from "react";
import {View,Text,Image,TextInput,ScrollView,ListView}from "react-native";
import Button from "react-native-button";
import Swiper from "react-native-swiper";
import BaseComponent from './baseComponent';
import styles from '../styles/cart';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shoppingCartActions from '../../common/actions/shoppingCartActions';
import Special from '../special/stringImage';
import STRING_RESOURCE from '../../common/StringResource';
import { homePressDown } from '../../common/actions/tabAction';

const TAG = 'Cart.js';

class CartPage extends BaseComponent {
	constructor(props) {
		super(props);

		this.hasDataRender = this.hasDataRender.bind(this);
		this.noDataRender = this.noDataRender.bind(this);

		this.wareHouseRender = this.wareHouseRender.bind(this);
		this.activityRender = this.activityRender.bind(this);
		this.goodsListRender = this.goodsListRender.bind(this);
		this.activityBarRender = this.activityBarRender.bind(this);
		this.invalidGoodsBarRender = this.invalidGoodsBarRender.bind(this);
		this.invalidGoodsRender = this.invalidGoodsRender.bind(this);
		this.editOrIntroBoxRender = this.editOrIntroBoxRender.bind(this);
		this.footerBarRender = this.footerBarRender.bind(this);

		this.deleteIconRender = this.deleteIconRender.bind(this);

		this.state = {
			isFinishEdit: true
		};
	}

	componentWillMount() {
		this.props.shoppingCartActions.queryShoppingCartData();
	}

	wareHouseRender() {
		const allListData = this.props.shoppingCartState.shoppingCartData.data.whGoods;
		var checkState = 0;

		return allListData.map((whouseData, index) => {
			const activityListData = whouseData.activityGoods;

			this.props.shoppingCartState.checkState.wareHouseCheckStateList.map((wareHouseCheck, indexW) => {
				if (wareHouseCheck.wareHouseName === whouseData.whName) {
					checkState = wareHouseCheck.wareHouseCheckState;
				}
			});

			return <View style={styles.cartItem} key={index}>
					<View style={styles.shopping}>
						<Image onClick={() => this.props.shoppingCartActions.wareHouseCheckBoxClicked(whouseData.whName)} style={styles.checked} source={checkState ? Special.imageUrls.ic_checkbox_org : Special.imageUrls.ic_checkbox_null} />
						<Text style={styles.warehouse}>{whouseData.whName}</Text>
					</View>

					{this.activityRender(activityListData)}

					<View style={styles.warehouseMsg}>
						<View style={styles.wareHouseFooterLeftView}>
							<Text style={styles.cartTotalLeft}>{STRING_RESOURCE.wareHouseTaxation}</Text>
							<Text style={styles.warehouseMsgItem}>{STRING_RESOURCE.activityDiscount}</Text>
							<Text style={styles.warehouseMsgItem}>{STRING_RESOURCE.wareHouseTotalExTax}</Text>
						</View>
						<View style={styles.wareHouseFooterRightView}>
							<Text style={styles.textStyle1}>¥{whouseData.taxMoney}</Text>
							<Text style={styles.textStyle2}>-¥{whouseData.cutMoney}</Text>
							<Text style={styles.textStyle2}>¥{whouseData.payMoney}</Text>
						</View>
					</View>

					<View style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					height: '1.34rem',
					backgroundColor: '#ffffff'
				}}>
						<Image style={{ height: '0.96rem', width: '6.9rem' }} source={Special.imageUrls.money_exceed_warning} />
					</View>
				</View>;
		});
	}

	activityBarRender(isShow, name, rule) {
		if (isShow) {
			return <View style={styles.activityBarDiv}>
					<View style={styles.activityCategoryDiv}>
						<Text style={styles.activityCategoryP}>{name}</Text>
					</View>
					<Text style={styles.activityIntroP}>{rule}</Text>
				</View>;
		}
	}

	activityRender(activityListData) {
		return activityListData.map((activityData, index) => {
			const goodsListData = activityData.goodsList;

			return <View key={index} style={styles.activityContentView}>
					{this.activityBarRender(activityData.activityId, activityData.activityName, activityData.activityRule)}
					{this.goodsListRender(goodsListData)}
				</View>;
		});
	}

	editOrIntroBoxRender(isFinishEdit, goodsData) {
		if (isFinishEdit) {
			return <Text style={styles.goodIntro}>
					{goodsData.goodsName}
				</Text>;
		} else {
			return <View style={styles.editBarDiv}>
					<View style={styles.editBoxDiv} onClick={() => this.props.shoppingCartActions.amountMinusClicked()}>
						<Text style={styles.cartTotalLeft}>-</Text>
					</View>
					<View style={styles.editNumBoxDiv}>
						<Text style={styles.cartTotalLeft}>{goodsData.amount}</Text>
					</View>
					<View style={styles.editBoxDiv} onClick={() => this.props.shoppingCartActions.amountPlusClicked()}>
						<Text style={styles.cartTotalLeft}>+</Text>
					</View>
				</View>;
		}
	}

	deleteIconRender(goodsId) {
		if (!this.state.isFinishEdit) {
			return <Image onClick={() => this.props.shoppingCartActions.deleteGoods(goodsId)} style={styles.deleteIconImg} source={Special.imageUrls.ic_dustbin} />;
		}
	}

	goodsListRender(goodsListData) {
		var checkState = 0;

		return goodsListData.map((goodsData, index) => {
			this.props.shoppingCartState.checkState.wareHouseCheckStateList.map((wareHouseCheck, indexW) => {
				wareHouseCheck.goodsCheckStateList.map((goodsCheck, indexG) => {
					if (goodsCheck.goodsId === goodsData.goodsId) {
						checkState = goodsCheck.goodsCheckState;
					}
				});
			});

			return <View style={styles.shopContent} key={index}>
					<View style={styles.goodCheckDiv}>
						<Image onClick={() => this.props.shoppingCartActions.goodsCheckBoxClicked(goodsData.goodsId)} source={checkState ? Special.imageUrls.ic_checkbox_org : Special.imageUrls.ic_checkbox_null} style={styles.goodCheckImg} />
					</View>

					<View style={styles.goodImgDiv}>
						<Image source = {
						 {
							uri: goodsData.imgobj.url
						}
					} style={styles.goodImg} />
					</View>

					<View style={styles.goodMsgDiv}>

						{this.editOrIntroBoxRender(this.state.isFinishEdit, goodsData)}

						<View style={styles.goodPriceAmountDiv}>
							<Text style={styles.goodPrice}>¥{goodsData.goodsSalePrice}</Text>
							<Text style={styles.goodAmount}>x{goodsData.amount}</Text>
							{this.deleteIconRender(goodsData.goodsId)}
						</View>

					</View>
				</View>;
		});
	}

	invalidGoodsBarRender() {
		if (!this.props.shoppingCartState.shoppingCartData.data.invalidGoods) {
			return;
		}

		return <View style={styles.uselessContentDiv}>
				{this.invalidGoodsRender()}
				<View style={styles.clearUselessColumn}>
					<View onClick={() => this.props.shoppingCartActions.clearInvalidGoods()} style={styles.uselessClearButtonDiv}>
						<Text style={styles.cartTotalLeft}>{STRING_RESOURCE.emptyInvalidGoods}</Text>
					</View>
				</View>
			</View>;
	}

	invalidGoodsRender() {
		const uselessGoods = this.props.shoppingCartState.shoppingCartData.data.invalidGoods;

		return uselessGoods.map((invalidGoodsData, index) => {
			return <View style={styles.uselessGoodsBarDiv} key={index}>
					<View style={styles.goodCheckDiv}>
						<View style={styles.uselessBoxDiv}>
							<Text style={styles.cartTotalLeft}>{STRING_RESOURCE.invalid}</Text>
						</View>
					</View>

					<View style={styles.goodImgDiv}>
						<Image source = {
						 {
							uri: invalidGoodsData.imgobj.url
						}
					} style={styles.goodImg} />
					</View>

					<View style={styles.goodMsgDiv}>
						<Text style={styles.goodIntro}>
							{invalidGoodsData.goodsName}
						</Text>

						<Text style={styles.uselessGoodPrice}>¥{invalidGoodsData.goodsSalePrice}</Text>
					</View>
				</View>;
		});
	}

	footerBarRender() {
		if (0 !== this.props.shoppingCartState.shoppingCartData.data.whGoods.length) {
			let checkState = this.props.shoppingCartState.checkState.allCheckState;

			return <View style={styles.cartPageFooter}>
					<View style={styles.accountLeft}>
						<View style={styles.checkAll}>
							<Image onClick={() => this.props.shoppingCartActions.checkAllCheckBoxClicked()} style={styles.checked} source={checkState ? Special.imageUrls.ic_checkbox_org : Special.imageUrls.ic_checkbox_null} />
							<Text style={styles.warehouse}>{STRING_RESOURCE.checkAll}</Text>
						</View>

						<View style={styles.cartTotal}>
							<View style={styles.cartTotalBox}>
								<Text style={styles.cartTotalLeft}>{STRING_RESOURCE.summation}</Text>
								<Text style={styles.cartTotalRight}>
									¥ {this.props.shoppingCartState.shoppingCartData.data.allPayMoney}
								</Text>
							</View>
							<Text style={styles.cartTotalRate}>
								{STRING_RESOURCE.includeTaxation}{this.props.shoppingCartState.shoppingCartData.data.allTaxMoney}{STRING_RESOURCE.excludeFreight}
							</Text>
						</View>
					</View>

					<Button style={styles.settleWrap} onPress = {
					 Actions.makeSureOrderModel
				} onPress={() => this.props.shoppingCartActions.settlement()}>
                        <Text style={styles.settleInfo}>
                            {STRING_RESOURCE.settlement}
                        </Text>
					</Button>
				</View>;
		}
	}

	noDataRender() {
		return <View style={styles.noDataContentView}>

				<Image style={styles.noDataImg} source={Special.imageUrls.bg_shoppingcart_null} />
				<Text style={styles.noDataText}>
					{STRING_RESOURCE.shoppingCartNull}
				</Text>
				<Button onPress = {
				 homeModel
			} onPress={() => this.props.goShoppingActions()} style={styles.goShoppingButtonView}>
					<Text style={styles.warehouse}>
						{STRING_RESOURCE.goShopping}
					</Text>
				</Button>
			</View>;
	}

	hasDataRender() {
		return <View style={styles.cartItems}>
				{this.wareHouseRender()}
				{this.invalidGoodsBarRender()}
				{this.footerBarRender()}
			</View>;
	}

	headerRightRender() {
		let editOrFinishText = this.state.isFinishEdit ? STRING_RESOURCE.edit : STRING_RESOURCE.finish;

		return <View onClick={() => this.setState({ isFinishEdit: !this.state.isFinishEdit })} style={styles.headerRightView}>
				<Text style={styles.edit}>{editOrFinishText}</Text>
			</View>;
	}

	render() {
		const { shoppingCartState, shoppingCartActions } = this.props;

		let hasData = false;

		if (null !== shoppingCartState.shoppingCartData && 0 !== shoppingCartState.shoppingCartData.data.length) {
			if (0 !== shoppingCartState.shoppingCartData.data.whGoods.length || 0 !== shoppingCartState.shoppingCartData.data.invalidGoods.length) {
				hasData = true;
			}
		}

		var headerParam = {
			isHeaderShow: true,
			headerName: STRING_RESOURCE.shoppingCart,
			isBackShow: true
		};

		var netRequestParam = {
			isRequesting: shoppingCartState.dataRequesting,
			isDataRequestSucc: shoppingCartState.isDataRequestSucc,
			hasData: hasData,
			isDialogLoading: shoppingCartState.loadingData
		};

		return super.allSceneRender(headerParam, netRequestParam);
	}
}

function mapStateToProps(state) {
	const { shoppingCartState } = state;
	return {
		shoppingCartState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		shoppingCartActions: bindActionCreators(shoppingCartActions, dispatch),
		goShoppingActions: bindActionCreators(homePressDown, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);