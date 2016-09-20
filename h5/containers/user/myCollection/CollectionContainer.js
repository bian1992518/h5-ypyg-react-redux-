/*收藏的商品*/
import React , { Component } from 'react';
import styles from '../../../styles/user/collectGoodsStyle';

export class GoodsCell extends Component {
	render (){
		const { img, name, price } = this.props;
		return (
			<div style = {styles.goodsCell}>
				<img style = { styles.goodsImg } src = { img }/>
				<div style = { styles.goodsInfo }>
					<p style = { styles.goodsTitle }>{ name }</p>
					<p style = { styles.goodsCount }>{ price }</p>
				</div>
			</div>
		)
	}
}
//按钮栏
export class SegmentBar extends Component {
	render (){
		const { offSale, action, unAction } = this.props;
		return (
			<div style = {styles.segmentBar}>
				<CollectBtn title = {'全部商品'} offSale={offSale} action = {action}/>
				<CollectBtn title = {'已下架'} offSale={!offSale} action = {unAction}/>
			</div>
		)
	}
}
//按钮
export class CollectBtn extends Component {
	render (){
		const { offSale, action } = this.props;
		if (offSale) {
			return (
				<div style = {styles.btnView} onClick = {action}>
					<p style = {styles.uncollect}>{this.props.title}</p>
				</div>
			)
		}else {
			return (
				<div style = {styles.btnView} onClick = {action}>
					<p style = {styles.collect}>{this.props.title}</p>
					<div style = {styles.line} />
				</div>
			)
		}
	}
}
module.exports = {
  GoodsCell,
  SegmentBar,
  CollectBtn,
}
