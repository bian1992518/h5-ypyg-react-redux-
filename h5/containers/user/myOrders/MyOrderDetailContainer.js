/*订单详情*/
import React , { Component } from 'react';
import styles from '../../../styles/user/orderStyle';

export class GoodsCell extends Component{
	render (){
		const { goodsData } = this.props;
		let urlObj = JSON.stringify(goodsData.imgobj);
		let url = urlObj.url ? urlObj.url : '';
		return (
			<div style = {styles.goodsCell} >
				<img style = { styles.goodsImg } src = { url }/>
				<p style = { styles.goodsTitle }>{ goodsData.goods_name }</p>
				<div style = { styles.goodsTotal }>
					<p style = { styles.goodsCount }>{ goodsData.goods_saleprice }</p>
					<p style = { styles.goodsNum }>x{ goodsData.goods_num }</p>
				</div>
			</div>
		)
	}
}
