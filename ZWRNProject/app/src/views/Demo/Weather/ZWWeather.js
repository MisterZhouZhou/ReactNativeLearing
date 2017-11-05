import React ,{Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Dimensions} from 'react-native';

import Forecast from './Forecast'

let {width} = Dimensions.get('window');
export default class ZWWeather extends Component {

  constructor(props){
    super(props);
    this.state={
      cityName:'',
      forecast: null
    }
  }

  _handleTextChange(event){
    var cityName = event.nativeEvent.text;
    this.setState({cityName:cityName});
    fetch('http://samples.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=b1b15e88fa797225412429c1c50c122a1').then((response)=>response.json())
    .then((responseJSON)=>{
      alert(JSON.stringify(responseJSON));
      this.setState({
        forecast:{
          main: responseJSON.weather[0].main,
          description: responseJSON.weather[0].description,
          temp: responseJSON.weather[0].temp
        }
      }).catch((error)=>{
        console.warn(error);
      });
    });
  }

  render(){
    var content = null;
      if(this.state.forecast){
        content = <Forecast main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp}
                  />;
      }
    return(
      <View style={styles.container}>
        <Image style={styles.backdrop} resizeMode='cover' source={{uri:'http://img.t.sinajs.cn/t5/skin/public/profile_cover/008.jpg'}}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>Current weather for</Text>
              <View style={styles.zipContainer}>
                <TextInput blurOnSubmit={true} style={{backgroundColor:'red',width:100,height:30}} returnKeyType='go' onSubmitEditing={this._handleTextChange.bind(this)} placeholder='hhhh'/>
              </View>
            </View>
            {content}
          </View>
        </Image>
      </View>
    );
  }
}

var baseFontSize = 16;
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center',backgroundColor:'#FFFFFF'},
  backdrop: {flex: 1, flexDirection: 'column', width:width},
  overlay: {flex: 1, paddingTop: 5, backgroundColor: '#000000', opacity: 0.5, flexDirection: 'column', alignItems: 'center'},
  row: {height: 100, flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start', padding: 30},
  zipContainer: {borderBottomColor: '#DDDDDD', borderBottomWidth: 1, marginLeft: 5, marginTop: 3},
  zipCode: {width: 50, height: 30,backgroundColor:'yellow'},
  mainText: {flex: 1, fontSize: baseFontSize, color: "#FFFFFF"}
});
