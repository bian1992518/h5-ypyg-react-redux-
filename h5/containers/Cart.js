/*
 * Name: Cart
 * Creator: ZhangZhao
 * Create Time:
 * Instruction: 主界面购物车页面
 */
import React from 'react';
import BaseComponent from './baseComponent';
import styles from '../styles/cart';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shoppingCartActions from '../../common/actions/shoppingCartActions';
import Special from '../special/stringImage';
import STRING_RESOURCE from '../../common/StringResource';
import {homePressDown} from '../../common/actions/tabAction';

const TAG = 'Cart.js';

class Cart extends BaseComponent {
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
		this.settlementButtonRender = this.settlementButtonRender.bind(this);
		this.wareHouseWarningRender = this.wareHouseWarningRender.bind(this);

		this.state = {
			isFinishEdit: true,
			warningStyle: 1
		};
	}

	componentWillMount() {
		this.props.shoppingCartActions.queryShoppingCartData();
	}

	wareHouseWarningRender(showModel) {
		if (2 === showModel) {
			if (2 === this.state.warningStyle) {
				return (
					<div style = {styles.moneyExceedDiv}>
						<img
							style = {styles.warningImage}
							src = {Special.imageUrls.money_exceed_warning}
						/>
					</div>
				);
			} else {
				return (
					<div style = {styles.moneyExceedDiv}>
						<img
							style = {styles.warningImage}
							src = {Special.imageUrls.money_exceed_prompt}
						/>
					</div>
				);
			}
		}
	}

	wareHouseRender () {
		const allListData = this.props.shoppingCartState.shoppingCartData.data.whGoods;
		var checkState = 0;

		return allListData.map((whouseData, index) => {
			const activityListData = whouseData.activityGoods;

			this.props.shoppingCartState.checkState.wareHouseCheckStateList.map((wareHouseCheck, indexW) => {
				if (wareHouseCheck.wareHouseName === whouseData.whName) {
					checkState = wareHouseCheck.wareHouseCheckState;
				}
			});

			return (
				<div style = {styles.cartItem} key = { index }>
					<div style = {styles.shopping}>
						<img
							onClick = {() => this.props.shoppingCartActions.wareHouseCheckBoxClicked(whouseData.whName)}
							style = {styles.checked}
							src = {checkState ? Special.imageUrls.ic_checkbox_org : Special.imageUrls.ic_checkbox_null}
						/>
						<p style = {styles.warehouse}>{whouseData.whName}</p>
					</div>

					{this.activityRender(activityListData)}

					<div style = {styles.warehouseMsg}>
						<div style = {styles.wareHouseFooterLeftView}>
							<p style = {styles.cartTotalLeft}>{STRING_RESOURCE.wareHouseTaxation}</p>
							<p style = {styles.warehouseMsgItem}>{STRING_RESOURCE.activityDiscount}</p>
							<p style = {styles.warehouseMsgItem}>{STRING_RESOURCE.wareHouseTotalExTax}</p>
						</div>
						<div style = {styles.wareHouseFooterRightView}>
							<p style = {styles.textStyle1}>¥{whouseData.taxMoney}</p>
							<p style = {styles.textStyle2}>-¥{whouseData.cutMoney}</p>
							<p style = {styles.textStyle2}>¥{whouseData.payMoney}</p>
						</div>
					</div>

					{this.wareHouseWarningRender(whouseData.isWarning)}
				</div>
			)
		});
	}

	activityBarRender(isShow, name, rule) {
		if (isShow) {
			return (
				<div style = {styles.activityBarDiv}>
					<div style = {styles.activityCategoryDiv}>
						<p style = {styles.activityCategoryP}>{name}</p>
					</div>
					<p style = {styles.activityIntroP}>{rule}</p>
				</div>
			)
		}
	}

	activityRender(activityListData) {
		return activityListData.map((activityData, index) => {
			const goodsListData = activityData.goodsList;

			return (
				<div key = {index} style = {styles.activityContentView}>
					{this.activityBarRender(activityData.activityId, activityData.activityName, activityData.activityRule)}
					{this.goodsListRender(goodsListData)}
				</div>
			);
		});
	}

	editOrIntroBoxRender(isFinishEdit, goodsData) {
		if (isFinishEdit) {
			return (
				<Link to = {{pathname: '/GoodsDetail', query: {goodsId: goodsData.goodsId}}}>
					<p style = {styles.goodIntro}>
						{goodsData.goodsName}
					</p>
				</Link>
			)
		} else {
			return (
				<div style = {styles.editBarDiv}>
					<div
						style = {styles.editBoxDiv}
						onClick = {() => this.props.shoppingCartActions.amountMinusClicked(goodsData.goodsId, goodsData.amount)}
					>
						<p style = {styles.cartTotalLeft}>-</p>
					</div>
					<div style = {styles.editNumBoxDiv}>
						<p style = {styles.cartTotalLeft}>{goodsData.amount}</p>
					</div>
					<div
						style = {styles.editBoxDiv}
						onClick = {() => this.props.shoppingCartActions.amountPlusClicked(goodsData.goodsId, goodsData.amount)}
					>
						<p style = {styles.cartTotalLeft}>+</p>
					</div>
				</div>
			);
		}
	}

	deleteIconRender(goodsId) {
		if (!this.state.isFinishEdit) {
			return (
				<img
					onClick = {() => this.props.shoppingCartActions.deleteGoods(goodsId)}
					style = {styles.deleteIconImg}
					src = {Special.imageUrls.ic_dustbin}
				/>
			);
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

			return (
				<div style = {styles.shopContent} key = {index} >
					<div style = {styles.goodCheckDiv}>
						<img
							onClick = {() => this.props.shoppingCartActions.goodsCheckBoxClicked(goodsData.goodsId)}
							src = {checkState ? Special.imageUrls.ic_checkbox_org : Special.imageUrls.ic_checkbox_null}
							style = {styles.goodCheckImg}
						/>
					</div>



					<div style = {styles.goodImgDiv}>
						<Link to = {{pathname: '/GoodsDetail', query: {goodsId: goodsData.goodsId}}}>
							<div style={styles.goodBorderDiv}>
								<img
									src =  {goodsData.imgobj.url}
									style = {styles.goodImg}
								/>
							</div>
						</Link>
					</div>



					<div style = {styles.goodMsgDiv}>

						{this.editOrIntroBoxRender(this.state.isFinishEdit, goodsData)}

						<div style = {styles.goodPriceAmountDiv}>
							<p style = {styles.goodPrice}>¥{goodsData.goodsSalePrice}</p>
							<p style = {styles.goodAmount}>x{goodsData.amount}</p>
							{this.deleteIconRender(goodsData.goodsId)}
						</div>

					</div>

				</div>
			)
		})
	}

	invalidGoodsBarRender() {
		if (!this.props.shoppingCartState.shoppingCartData.data.invalidGoods) {
			return;
		}

		return (
			<div style = {styles.uselessContentDiv}>
				{this.invalidGoodsRender()}
				<div style = {styles.clearUselessColumn}>
					<div
						onClick = {() => this.props.shoppingCartActions.clearInvalidGoods()}
						style = {styles.uselessClearButtonDiv}
					>
						<p style = {styles.cartTotalLeft}>{STRING_RESOURCE.emptyInvalidGoods}</p>
					</div>
				</div>
			</div>
		)
	}

	invalidGoodsRender() {
		const uselessGoods = this.props.shoppingCartState.shoppingCartData.data.invalidGoods;

		return uselessGoods.map((invalidGoodsData, index) => {
			return (
				<div style = {styles.uselessGoodsBarDiv} key = {index} >
					<div style = {styles.goodCheckDiv}>
						<div style = {styles.uselessBoxDiv}>
							<p style = {styles.cartTotalLeft}>{STRING_RESOURCE.invalid}</p>
						</div>
					</div>

					<div style = {styles.goodImgDiv}>
						<img
							src =  { invalidGoodsData.imgobj.url }
							style = {styles.goodImg}
						/>
					</div>

					<div style = {styles.goodMsgDiv}>
						<p style = {styles.goodIntro}>
							{invalidGoodsData.goodsName}
						</p>

						<p style = {styles.uselessGoodPrice}>¥{invalidGoodsData.goodsSalePrice}</p>
					</div>
				</div>
			);
		});
	}

	settlementButtonRender() {
		if (0 !== this.props.shoppingCartState.shoppingCartData.data.checkedGood) {
			var warehouseExceedPrice = false;

			this.props.shoppingCartState.shoppingCartData.data.whGoods.map((warehouseData, indexW) => {
				if (2 === warehouseData.isWarning) {
					warehouseExceedPrice = true;
				}
			});

			if (warehouseExceedPrice) {
				return (
					<div
						style = {styles.settleWrap}
						onClick = {() => this.setState({
							warningStyle: 2
						})}
					>
						<p style = {styles.settleInfo}>{STRING_RESOURCE.settlement}</p>
					</div>
				)
			} else {
				return (
					<Link
						style = {styles.settleWrap}
						to = {
							{
								pathname:"/makeSureOrder",
								query: {flag: 2},
							}
						}
					>
						<p style = {styles.settleInfo}>{STRING_RESOURCE.settlement}</p>
					</Link>
				);
			}
		} else {
			return (
				<div
					style = {styles.settleWrap}
					onClick = {() => alert('请选择商品')}
				>
					<p style = {styles.settleInfo}>{STRING_RESOURCE.settlement}</p>
				</div>
			);
		}
	}

	footerBarRender() {
		if (0 !== this.props.shoppingCartState.shoppingCartData.data.whGoods.length) {
			let checkState = this.props.shoppingCartState.checkState.allCheckState;

			return (
				<div style = {styles.cartAccount}>
					<div style = {styles.accountLeft}>
						<div style = {styles.checkAll}>
							<img
								onClick = {() => this.props.shoppingCartActions.checkAllCheckBoxClicked(checkState)}
								style = {styles.checked}
								src = {checkState ? Special.imageUrls.ic_checkbox_org : Special.imageUrls.ic_checkbox_null}
							/>
							<p style = {styles.warehouse}>{STRING_RESOURCE.checkAll}</p>
						</div>

						<div style = {styles.cartTotal}>
							<div style = {styles.cartTotalBox}>
								<p style = {styles.cartTotalLeft}>{STRING_RESOURCE.summation}</p>
								<p style = {styles.cartTotalRight}>
									¥ {this.props.shoppingCartState.shoppingCartData.data.allPayMoney}
								</p>
							</div>
							<p style = { styles.cartTotalRate }>
								{STRING_RESOURCE.includeTaxation}{this.props.shoppingCartState.shoppingCartData.data.allTaxMoney}{STRING_RESOURCE.excludeFreight}
							</p>
						</div>
					</div>

					{this.settlementButtonRender()}
				</div>
			);
		}
	}

	noDataRender () {
		return (
			<div style = {styles.noDataContentView}>

				<img
					style = {styles.noDataImg}
					src = {Special.imageUrls.bg_shoppingcart_null}
				/>
				<p style = {styles.noDataText}>
					{STRING_RESOURCE.shoppingCartNull}
				</p>
				<Link
					to = '/'
					onClick = {() => this.props.goShoppingActions()}
					style = {styles.goShoppingButtonView}
				>
					<p style = {styles.warehouse}>
						{STRING_RESOURCE.goShopping}
					</p>
				</Link>
			</div>
		);
	}

	hasDataRender() {
		return (
			<div style = {styles.cartItems}>
				<scrollView style={styles.scrollView}>
					{this.wareHouseRender()}
					{this.invalidGoodsBarRender()}
				</scrollView>
				{this.footerBarRender()}
			</div>
		);
	}

	headerRightRender() {
		let editOrFinishText = this.state.isFinishEdit
					? STRING_RESOURCE.edit
					: STRING_RESOURCE.finish;

		return (
			<div
				onClick = {() => this.setState({isFinishEdit: !this.state.isFinishEdit})}
				style = {styles.headerRightView}
			>
				<p style = {styles.edit}>{editOrFinishText}</p>
			</div>
		);
	}

	render () {
		const {shoppingCartState, shoppingCartActions} = this.props;
		let hasData = false;

		if (null !== shoppingCartState.shoppingCartData && 0 !== shoppingCartState.shoppingCartData.data.length) {
			if (0 !== shoppingCartState.shoppingCartData.data.whGoods.length
				|| 0 !== shoppingCartState.shoppingCartData.data.invalidGoods.length) {
				hasData = true;
			}
		}

		var headerParam = {
			isHeaderShow: true,
			headerName: STRING_RESOURCE.shoppingCart,
			isBackShow: false
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
	const {shoppingCartState} = state;
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
