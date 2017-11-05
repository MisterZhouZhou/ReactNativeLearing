import React, { Component } from 'react'
import { View, Text, StyleSheet, RefreshControl, ListView, ActivityIndicator, TouchableOpacity } from 'react-native'

export const RefreshState = {
    Idle: 'Idle',
    Refreshing: 'Refreshing',
    NoMoreData: 'NoMoreData',
    Failure: 'Failure'
}

export default class RefreshListView extends Component {

  static propTypes = {
    onHeaderRefresh: React.PropTypes.func,
    onFooterRefresh: React.PropTypes.func,
    showFootMinNumber: React.PropTypes.number,  //列表不显示底部信息的最小条数
    footerView: React.PropTypes.func,
  }

  static defaultProps = {
    onHeaderRefresh: ()=>{},
    onFooterRefresh: ()=>{},
    showFootMinNumber: 0,
    footerView: ()=>{},
    footerRefreshingText: '数据加载中……',
    footerFailureText: '点击重新加载',
    footerNoMoreDataText: '已加载全部数据'
  }

  constructor(props){
    super(props);
    this.state={
      headerState: RefreshState.Idle,
      footerState: RefreshState.Idle,
    }
  }

  /* ==============    为外部提供的方法     ===============*/
  /*开始刷新/可以手动调用*/
  startHeaderRefreshing() {
    this.setState({ headerState: RefreshState.Refreshing });
    this.props.onHeaderRefresh && this.props.onHeaderRefresh();
  }

  /*上拉加载失败重新加载调用方法*/
  startFooterRefreshing() {
    this.setState({ footerState: RefreshState.Refreshing })
    this.props.onFooterRefresh && this.props.onFooterRefresh()
  }

  /*结束刷新调用方法*/
  endRefreshing(refreshState: RefreshState) {
      if (refreshState == RefreshState.Refreshing) {
          return;
      }
      let footerState = refreshState
      if (this.props.dataSource.getRowCount() == 0) {
          footerState = RefreshState.Idle
      }
      this.setState({
          headerState: RefreshState.Idle,
          footerState: footerState
      });
  }
  /* ==============    为外部提供的方法     ===============*/


  /*结获header刷新状态*/
  headerState() {
      return self.state.headerState
  }
  /*结获footer刷新状态*/
  footerState() {
      return self.state.footerState
  }

  /* ==============  为系统内部提供的方法     ===============*/
  onHeaderRefresh() {
    if (this.shouldStartHeaderRefreshing()) {
        this.startHeaderRefreshing();
    }
  }

  onFooterRefresh() {
    if (this.shouldStartFooterRefreshing()) {
        this.startFooterRefreshing();
    }
  }

  shouldStartHeaderRefreshing() {
    if (this.state.headerState == RefreshState.Refreshing ||
        this.state.footerState == RefreshState.Refreshing) {
        return false
    }
    return true
  }

  shouldStartFooterRefreshing() {
    if (this.state.headerState == RefreshState.Refreshing ||
        this.state.footerState == RefreshState.Refreshing) {
        return false;
    }
    if (this.state.footerState == RefreshState.Failure ||
        this.state.footerState == RefreshState.NoMoreData) {
        return false;
    }
    if (this.props.dataSource.getRowCount() == 0) {
        return false;
    }
    if (this.props.dataSource.getRowCount() < this.props.showFootMinNumber) {
        return false;
    }
    return true;
  }

  /* ==============  为系统内部提供的方法     ===============*/

  render(){
    return(
      <ListView
          {...this.props}
          enableEmptySections={true}
          refreshControl={
              <RefreshControl
                  refreshing={this.state.headerState == RefreshState.Refreshing}
                  onRefresh={() => this.onHeaderRefresh()}
                  tintColor='gray'
              />
          }
          renderFooter={() => this.renderFooter()}
          onEndReachedThreshold={10}
          onEndReached={() => this.onFooterRefresh()}
      />
    );
  }

  renderFooter() {
    if(this.props.dataSource.getRowCount() < this.props.showFootMinNumber){
      return null;
    }
    let footer = this.props.footerView() || null;
    if (footer) { return footer; }
    switch (this.state.footerState) {
        case RefreshState.Idle:
            break;
        case RefreshState.Failure: {
            footer = this.failureFooterView();
            break;
        }
        case RefreshState.Refreshing: {
            footer = this.refreshFooterView();
            break;
        }
        case RefreshState.NoMoreData: {
            footer = this.noDataFooterView();
            break;
        }
    }
    return footer;
  }

  failureFooterView(){
    return(
      <TouchableOpacity style={styles.footerContainer}
          onPress={() => this.startFooterRefreshing()}
          >
          <Text style={styles.footerText}>
              {this.props.footerFailureText}
          </Text>
      </TouchableOpacity>
    );
  }

  refreshFooterView(){
    return(
      <View style={styles.footerContainer} >
          <ActivityIndicator size="small" color="#888888" />
          <Text style={styles.footerText}>
              {this.props.footerRefreshingText}
          </Text>
      </View>
    );
  }

  noDataFooterView(){
    return(
      <View style={styles.footerContainer} >
          <Text style={styles.footerText}>
              {this.props.footerNoMoreDataText}
          </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    footerText: {
        fontSize: 14,
        color: '#555555'
    }
});
