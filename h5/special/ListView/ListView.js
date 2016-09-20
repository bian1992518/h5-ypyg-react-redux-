/*
 * 模仿react-native实现ListView控件
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import ListViewDataSource from './ListViewDataSource';
import StaticRenderer from './StaticRenderer';

// PropTypes = {
//     dataSource: PropTypes.instanceOf(ListViewDataSource).isRequired,
//     /**
//      * (rowData, sectionID, rowID) => renderable
//      * Takes a data entry from the data source and its ids and should return
//      * a renderable component to be rendered as the row.  By default the data
//      * is exactly what was put into the data source, but it's also possible to
//      * provide custom extractors.
//      */
//     renderRow: PropTypes.func.isRequired,
//     *
//      * () => renderable
//      *
//      * The header and footer are always rendered (if these props are provided)
//      * on every render pass.  If they are expensive to re-render, wrap them
//      * in StaticContainer or other mechanism as appropriate.  Footer is always
//      * at the bottom of the list, and header at the top, on every render pass.
     
//     renderFooter: PropTypes.func,
//     renderHeader: PropTypes.func,
//     /**
//      * (sectionData, sectionID) => renderable
//      *
//      * If provided, a sticky header is rendered for this section.  The sticky
//      * behavior means that it will scroll with the content at the top of the
//      * section until it reaches the top of the screen, at which point it will
//      * stick to the top until it is pushed off the screen by the next section
//      * header.
//      */
//     renderSectionHeader: PropTypes.func,
//     style: PropTypes.object.isRequired
//   }

export default class ListView extends Component {

  constructor (props) {
    super(props)

    this.state = {
      events: ['scroll', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll', 'resize', 'touchmove', 'touchend'],
      _firstChildWrapper: '',
      _headerFixedPosition: '',
      _instances: {},
      prevRenderRowsCount: 0
    }
  }

  // componentDidMount () {
  //   this.initStickyHeaders()
  // }

  // componentWillUnmount () {
  //    // unRegister events listeners with the listview div
  //   this.state.events.forEach((type) => {
  //     if (window.addEventListener) {
  //       findDOMNode(this.refs.listview).removeEventListener(type, this.onScroll.bind(this), false)
  //     } else {
  //       findDOMNode(this.refs.listview).attachEvent('on' + type, this.onScroll.bind(this), false)
  //     }
  //   })
  // }

  refsToArray (ctx, prefix) {
    let results = []
    for (let i = 0; ;i++) {
      let ref = ctx.refs[prefix + '-' + String(i)]
      if (ref) results.push(ref)
      else return results
    }
  }

  initStickyHeaders () {
    let listHeaders = this.refsToArray(this, 'ListHeader')
    let _originalPositions = listHeaders.map((l) => {
      let headerAndPosInfo = {
        headerObj: l,
        originalPosition: l.refs.header.getBoundingClientRect().top
      }
      return headerAndPosInfo
    })
    this.setState({
      _instances: Object.assign(this.state._instances, {_originalPositions}),
      _firstChildWrapper: listHeaders[0].refs.followWrap,
      _headerFixedPosition: listHeaders[0].refs.header.getBoundingClientRect().top
    })

    // Register events listeners with the listview div
    this.state.events.forEach((type) => {
      if (window.addEventListener) {
        findDOMNode(this.refs.listview).addEventListener(type, this.onScroll.bind(this), false)
      } else {
        findDOMNode(this.refs.listview).attachEvent('on' + type, this.onScroll.bind(this), false)
      }
    })
  }

  onScroll () {
    // update current header positions and apply fixed positions to the top one
    let currentWindowScrollTop = this.state._headerFixedPosition - this.state._firstChildWrapper.getBoundingClientRect().top
    this.state._instances._originalPositions.forEach((c, index) => {
      let currentNode = c.headerObj.refs.header
      const currentHeaderHeight = parseInt(currentNode.style.height, 10)
      let nextNode = null
      let topPos = null
      let ignoreCheck = false
      if (index < this.state._instances._originalPositions.length - 1) {
        nextNode = this.state._instances._originalPositions[index + 1]
      }
      if (nextNode) {
        // temporily disable the clapsed effect
      }
      if (index === 0) {
        if (currentWindowScrollTop === c.originalPosition) {
          currentNode.style.position = ''
          ignoreCheck = true
        }
      }
      if (!ignoreCheck && (c.originalPosition) < (currentWindowScrollTop + this.state._headerFixedPosition + currentHeaderHeight)) {
        Object.assign(currentNode.style, this.props.styles.fixedPosition)
        // apply top value
        currentNode.style.top = `${this.state._headerFixedPosition}px`
        if (currentWindowScrollTop + index * currentHeaderHeight > nextNode.originalPosition) {
          currentNode.style.position = 'absolute'
          currentNode.style.top = `${topPos}px`
        }
      } else {
        currentNode.style.position = ''
      }
    })
  }

	render() {
    var bodyComponents = [];

    var dataSource = this.props.dataSource;
    var allRowIDs = dataSource.rowIdentities;
    var rowCount = 0;
    var sectionHeaderIndices = [];

    var header = this.props.renderHeader && this.props.renderHeader();
    var footer = this.props.renderFooter && this.props.renderFooter();
    var totalIndex = header ? 1 : 0;

    for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
      var sectionID = dataSource.sectionIdentities[sectionIdx];
      var rowIDs = allRowIDs[sectionIdx];
      //console.log('rowIDs: ',rowIDs);
      if (!rowIDs || rowIDs.length === 0) {continue;}

      if (this.props.renderSectionHeader) {
        bodyComponents.push(
           <StaticRenderer
              key={'s_'+sectionID}
              shouldUpdate={true}
              render={this.props.renderSectionHeader.bind(
                null,
                dataSource.getSectionHeaderData(sectionIdx),
                sectionID
              )}
           />
        );
        sectionHeaderIndices.push(totalIndex++);
      }

      for (var rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
        var rowID = rowIDs[rowIdx];
        var comboID = sectionID + rowID;
        var shouldUpdateRow = rowCount >= this.state.prevRenderedRowsCount &&
          dataSource.rowShouldUpdate(sectionIdx, rowIdx);
        var row =
        <StaticRenderer
          key={'r_' + comboID}
          shouldUpdate={!!shouldUpdateRow}
          render={this.props.renderRow.bind(
            null,
            dataSource.getRowData(sectionIdx, rowIdx),
            sectionID,
            rowID
          )}
        />;
        bodyComponents.push(row);
        totalIndex++;
      }
    }

		return (
			<div ref="listView" style={this.props.style}>
				{header}
        {bodyComponents}
        {footer}
			</div>
		)
	}
}