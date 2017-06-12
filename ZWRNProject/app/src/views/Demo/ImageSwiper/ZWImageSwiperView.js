import React ,{ Component } from 'react'
import {ScrollView, View, TouchableOpacity, Text, StatusBar, CameraRoll, Image, Dimensions} from 'react-native';

let {width,height} = Dimensions.get('window');

class ZWImage extends Component{
  getUri() {
    if(this.props.url){
      return this.props.url;
    }
  }
  render(){
    return(
      <Image {...this.props} source={{uri:this.props.url}}/>
    );
  }
}

export default class ZWImageSwiperView extends Component{
  static navigationOptions = {
    header: {visible: false}
  };

  constructor(props) {
    super(props);
    this.state = {
      index: this.props.navigation.state.params.index
    };
  }

  componentDidMount() {
    this.scrollView.scrollTo({x: width * this.state.index, y: 0, animated: false});
  }

  onSavePress() {
    let index = this.state.index;
    CameraRoll.saveToCameraRoll(this.refs[`image_${index}`].getUri()).then(e => {
      alert('保存成功');
    });
  }


  render(){
    let photos = this.props.navigation.state.params.imageUrls;
    return(
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <StatusBar hidden={true} showHideTransition='slide' />
        <ScrollView style={{width: width, height: height}}
          ref={e => this.scrollView = e}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={e => this.setState({index: Math.round(e.nativeEvent.contentOffset.x / width)})}>
          {photos.map((item, index) => <ScrollView key={index} style={{width: width, height: height}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            maximumZoomScale={3}
          >
            <ZWImage ref={`image_${index}`} style={{width: width, height: height}} resizeMode='contain' url={item} />
          </ScrollView>)}
        </ScrollView>
        {photos.map((item, index) => {
          let count = photos.length;
          let left = (width - (16 * count) + 8) / 2 + 16 * index;
          let opacity = index == this.state.index ? 0.8 : 0.5;
          return (<View key={index} style={{width: 8, height: 8, borderRadius: 4, position: 'absolute', bottom: 16, backgroundColor: '#fff', left: left, opacity: opacity}}></View>);
        })}
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: 24, height: 24, position: 'absolute', top: 30, left: 12, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.3)'}} hitSlop={{top: 10, bottom: 10, left: 12, right: 32}} onPress={() => this.props.navigation.goBack()}>
          <Image style={{width: 16, height: 16, tintColor: '#fff', backgroundColor: 'red'}} />
        </TouchableOpacity>
        <Text style={{position: 'absolute', top: 30, fontSize: 16, color: '#fff', fontWeight: 'bold', backgroundColor: 'transparent', alignSelf: 'center', lineHeight: 24}}>{`${this.state.index + 1} / ${photos.length}`}</Text>
        <TouchableOpacity onPress={this.onSavePress.bind(this)} style={{justifyContent: 'center', alignItems: 'center', padding: 8, position: 'absolute', top: 27, right: 16, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.3)'}}>
          <Text style={{color: '#fff', backgroundColor: 'transparent'}}>保存图片</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
