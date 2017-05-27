import React ,{ Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native'
import PageControl from '../../../component/PageControl'

const {width,height} = Dimensions.get('window')
const colors = ['red', 'blue', 'green', 'purple', 'brown', 'black', 'yellow']

export default class DaoJiShi extends Component{
  constructor(props){
    super(props);
    this.currentIndex = 0;
    this.state={
        duration: 5000,
        currentPage: 0,
        once:false
    }
  }



   // 视图绘制完毕之后会调用此方法
  componentDidMount() {

    this.setCurrentIdex(0);
    // this.startTimer();
  }

  setCurrentIdex(curIndx){
    if(curIndx>=0){
      this.currentIndex = curIndx;
      let imageCount = colors.length;
      let leftIndex  = (curIndx + imageCount - 1) % imageCount;
      let rightIndex  = (curIndx + 1) % imageCount;
      this.leftImageView.setNativeProps({style:{backgroundColor:colors[leftIndex]}})
      this.centerImageView.setNativeProps({style:{backgroundColor:colors[curIndx]}})
      this.rightImageView.setNativeProps({style:{backgroundColor:colors[rightIndex]}})
      this.refs.scrollView.scrollTo({x:width});
      // 更新状态机,重新绘制UI
      // this.state.currentPage = this.currentIndex;
      this.setState({currentPage: this.currentIndex});
    }
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
    if(colors&&colors.length>0){
      // 获取偏移量
      let offset = e.nativeEvent.contentOffset.x;
      if(offset>2*width-0.1){
        if(this.state.once == true){
          this.state.once == false;
          return;
        }
        let index = (this.currentIndex + 1)%colors.length;
        this.state.once = true;
        this.setCurrentIdex(index);
      }else if(offset< 0){
        this.currentIndex = (this.currentIndex + colors.length - 1)%colors.length
      }
      // 更新状态机,重新绘制UI
      // this.setState({currentPage: this.currentIndex});
    }
  }

  onScrollBeginDrag() {
    // 清除定时器
    // this.timer&&clearInterval(this.timer);
  }

  onScrollEndDrag() {
    // 重新开启定时器
    // this.startTimer();
  }

  // 返回所有图片
  renderAllImages() {
    var imageItems = [];
    for (var i=0; i<3; i++) {
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
          // bounces={false}
          pagingEnabled={true}
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          onScrollBeginDrag={this.onScrollBeginDrag.bind(this)}
          onScrollEndDrag={this.onScrollEndDrag.bind(this)}
          onScroll={this.onScroll.bind(this)}
          >
          <Image ref={(e)=>this.leftImageView=e} style={{backgroundColor: colors[colors.length-1], width: width, height: 300}} />
          <Image ref={(e)=>this.centerImageView=e} style={{backgroundColor: colors[0], width: width, height: 300}} />
          <Image ref={(e)=>this.rightImageView=e} style={{backgroundColor: colors[1], width: width, height: 300}} />
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
