import React ,{ Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native'
import PageControl from '../../../component/PageControl'

const {width,height} = Dimensions.get('window')
const colors = ['red', 'blue', 'green', 'purple', 'brown', 'black', 'yellow']

export default class DaoJiShi extends Component{
  constructor(props){
    super(props);
    this.state={
        duration: 5000,
        currentPage: 0,
    }
  }

   // 视图绘制完毕之后会调用此方法
  componentDidMount() {
    this.startTimer();
  }

  // 开启定时器
  startTimer() {
   if (colors.length == 0) return;
    // 拿到scrollView
    var scrollView = this.refs.scrollView;
    if (this.timer) clearInterval(this.timer);
    // 添加定时器
    this.timer = setInterval(()=>{
      var last = this.state.currentPage == colors.length - 1;
      try {
        scrollView.scrollTo({x: last ? 0 : (this.state.currentPage + 1) * width});
      } catch (ex) {}
    }, this.state.duration);
  }

  onScroll(e) {
    // 获取偏移量
    let offset = e.nativeEvent.contentOffset.x;
    // 获取页码
    let page = Math.floor(offset / width);
    // 更新状态机,重新绘制UI
    this.setState({
      currentPage: page
    });
  }

  onScrollBeginDrag() {
    // 清除定时器
    this.timer&&clearInterval(this.timer);
  }

  onScrollEndDrag() {
    // 重新开启定时器
    this.startTimer();
  }

  // 返回所有图片
  renderAllImages() {
    var imageItems = [];
    for (var i=0; i<colors.length; i++) {
      // 将Image装入数组中
      imageItems.push(
        <Image key={i}
        style={{backgroundColor: colors[i], width: width, height: 300}} />
      );
    }
    // 返回所有Image
    return imageItems;
  }

  render(){
    return(
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollViewStyle}
          ref="scrollView"
          horizontal={true}
          bounces={false}
          pagingEnabled={true}
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          onScrollBeginDrag={this.onScrollBeginDrag.bind(this)}
          onScrollEndDrag={this.onScrollEndDrag.bind(this)}
          onScroll={this.onScroll.bind(this)}
          >
          {this.renderAllImages()}
        </ScrollView>

        <PageControl
            style={styles.pageControl}
            numberOfPages={colors.length}
            currentPage={this.state.currentPage}
            hidesForSinglePage={true}
            pageIndicatorTintColor='gray'
            currentPageIndicatorTintColor={'red'}
            indicatorSize={{ width: 8, height: 8 }}
            onPageIndicatorPress={(idx)=>this.PageClick(idx)}
        />
      </View>
    );
   }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    scrollViewStyle: {
      backgroundColor: 'yellow',
      width:width,
      marginTop: 20
    },
    pageControl: {
        margin: 10,
    }
});
