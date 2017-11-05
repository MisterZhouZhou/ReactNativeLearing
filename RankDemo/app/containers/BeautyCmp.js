import React,{Component} from 'react';
import { View,
    Text,
    Image,
    WebView,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    InteractionManager,
    ProgressBarAndroid,
    Dimensions,
    Navigator,
    StyleSheet,
    Animated,
    Easing} from 'react-native';

import {fetchBeauty} from '../actions/beauty';
import {connect} from 'react-redux';

let {height, width} = Dimensions.get('window');

class BeautyCmp extends React.Component {

  static navigationOptions = {
    header: null
  }

   constructor(props) {
        super(props);
        this.state = {
          progressValue: new Animated.Value(0),
        };
    }

    componentDidMount() {

        Animated.timing(this.state.progressValue, {
            toValue: width,
            duration: 1500,
            easing: Easing.linear
        }).start();
    }

    componentWillMount(){
      //InteractionManager.runAfterInteractions(() => {
        const {dispatch} = this.props;
        dispatch(fetchBeauty());
    //  });
    }

     _onBackClick(){
      const {navigation} = this.props;
      if(navigation) {
        navigation.goBack();
      }
      return true;
    }

    _onRefreshClick(){
    this.componentWillMount()
  }

    _onImageClick(item, navigator){
      if(navigator){
        navigator.navigate('ImageDetailCmp',{images:item})
      }
    }

    _getImages(items, navigation){
      return(
        items.map((item,i)=>{
          return(
            <TouchableOpacity key = {i}   style={{padding:2}} onPress = {()=>this._onImageClick(item,navigation)}>
              <Image  key = {i+'_'+item._id} style={{height:parseInt(Math.random() * 20 + 12) * 10,width:(width-8)/2}} source = {{uri :item.url}}>
              </Image>
            </TouchableOpacity>

          )
        })
      )
    }

    _getCollection(beauties, navigation){
      let leftColumn = [];
      let rightColumn = [];
      for(let i = 0;i< beauties.length-1;i=i+2){
        leftColumn.push(beauties[i]);
        rightColumn.push(beauties[i+1]);
      }
      return(
        <View style = {{flexDirection : 'row'}}>
          <View>
            {this._getImages(leftColumn, navigation)}
          </View>
          <View>
            {this._getImages(rightColumn, navigation)}
          </View>
        </View>
      );
    }

  render() {
    const {beautyReducers, navigation} = this.props;
    return(
      <View style={{flex :1}}>
        <View style = {styles.headerBar}>
          <TouchableHighlight underlayColor="rgba(34, 26, 38, 0.1)" onPress={()=>this._onBackClick()}>
            <Image style = {styles.iconImage} source = {require('../../images/icon_back.png')}></Image>
          </TouchableHighlight>
          <Text style = {styles.headerText}>福利</Text>
          <TouchableHighlight style = {{right :0}} underlayColor="rgba(34, 26, 38, 0.1)" onPress={()=>this._onRefreshClick()}>
            <Image style = {styles.iconImage} source = {require('../../images/ic_refresh.png')}></Image>
          </TouchableHighlight>
        </View>
        <Animated.View style = {{height: 2, backgroundColor: '#27B5EE', width: this.state.progressValue}}>
        </Animated.View>
        <ScrollView>
             {this._getCollection(beautyReducers.beauty, navigation)}
        </ScrollView>
      </View>
    );
  }
}


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
function mapStateToProps(state) {
  const {beautyReducers} = state;
  return {
    beautyReducers
  }
}
export default connect(mapStateToProps)(BeautyCmp);
