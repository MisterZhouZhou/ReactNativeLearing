import React,{Component} from 'react';
import {
    View,
    BackAndroid,
    Dimensions,
    TouchableHighlight,
    Animated,
    Easing,
    TouchableWithoutFeedback,
    InteractionManager,
    Image,
    StyleSheet,
    Text
} from 'react-native';
class ImageDetailCmp extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      h : new Animated.Value(50),
      w : new Animated.Value(50)
    };
  }

  componentDidMount(){
    Animated.timing(this.state.h, {
        toValue: height * 1,
        duration: 500,
        easing: Easing.linear
    }).start();
    Animated.timing(this.state.w, {
        toValue: width * 1,
        duration: 500,
        easing: Easing.linear
    }).start();

  }

  _onBackClick(){
    const {navigation} = this.props;
    if(navigation) {
      navigation.goBack();
    }
  }

  render() {
    let {images} = this.props.navigation.state.params;
    return(
      <View style={{flex :1}}>
        {/*<View style = {styles.headerBar}>
          <TouchableHighlight underlayColor="rgba(34, 26, 38, 0.1)" onPress={()=>this._onBackClick()}>
            <Image style = {styles.iconImage} source = {require('../../images/icon_back.png')}></Image>
          </TouchableHighlight>
          <Text style = {styles.headerText}>{this.image.who}</Text>
          <Text style = {styles.headerText}>{this.image.desc}</Text>
        </View>*/}
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <TouchableWithoutFeedback onPress={this._onBackClick.bind(this)}>
            <Animated.Image style = {{height:this.state.h, width:this.state.w}} source = {{uri :images.url}}></Animated.Image>
          </TouchableWithoutFeedback>
        </View>

      </View>
    );
  }
}
let {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  iconImage: {
    height: 30,
    margin: 4,
    width: 30
  },
  headerBar: {
    backgroundColor: '#27B5EE',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 10
  },
  headerText: {
    fontSize: 22,
    color: 'white',
    marginLeft: 10
  }
});
export{ ImageDetailCmp as default };
