import React, { Component } from 'react'
import {Text, StyleSheet, Animated, View, Image, TouchableHighlight} from 'react-native'
import RequestUtils from './utils/RequestUtils'
import WebViewPage from './WebViewPage'
import SnackBar from './custom-views/SnackBar.js'
export default class HomePage extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  constructor(props){
    super(props);
    this.state = ({
      isError: false,
      isLoading: true,
      isPlaying: true,
    })
  }

  async componentDidMount () {
    try {
      this.dateArray = (await RequestUtils.getDateArray()).results
      this.contentDataGroup = await RequestUtils.getContents(this.dateArray.slice(0, 10)) // 内容只加载一页（10条）
      if (typeof this.contentDataGroup === 'undefined') { return }
      this.setState({
        isLoading: false
      })
    } catch (error) {
      console.log('request content from HomePage faile: ', error)
      this.setState({
        isError: true
      })
    }
  }

  render(){
      if(this.state.isLoading){
          return(<Text>Loading....</Text>);
      }
      let homePageContent = this.contentDataGroup[0].results
      content = (<View style={styles.container}>
        <View style={styles.headerWrapper}>
            <Image source={{uri: homePageContent.福利[0].url}} style={{flex: 1}}/>
            <View style={styles.editorWrapper}>
              <Text style={styles.imageEditors}>{'via.' + homePageContent.福利[0].who}</Text>
            </View>
        </View>
        <View style={styles.contentWrapper}>
          <TouchableHighlight style={{flex: 2, marginTop: 17}}
            underlayColor={'#333333'}
            onPress={() => {
              this.props.navigation.navigate('WebView',{
                title: homePageContent.休息视频[0].desc,
                url: homePageContent.休息视频[0].url
              })
            }}>
            <View style={styles.content}>
              <Text style={styles.videoTitle} numberOfLines={4}>{homePageContent.休息视频[0].desc}</Text>
              <Text style={styles.dateAuthor}>{this.contentDataGroup[0].date + ' via.' + homePageContent.休息视频[0].who}</Text>
              <Text style={styles.toVideo}>--> 去看视频～</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonStyle}
            underlayColor={'#333333'}
            onPress={() => this._skipIntoHistory(this.contentDataGroup, this.dateArray)}>
            <Text style={styles.toHistory}>查看往期</Text>
          </TouchableHighlight>
        </View>
        </View>)
    return(
      <View style={styles.content} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid >
        {content}
      </View>
    );
  }

  _skipIntoHistory (contentDataGroup, dateArray) {
    this.props.navigation.navigate('HistoryList',{contentDataGroup:this.contentDataGroup, dateArray:this.dateArray});
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerWrapper: {
    flex: 4
  },
  editorWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 17,
    backgroundColor: 'black',
    opacity: 0.5
  },
  imageEditors: {
    fontSize: 12,
    color: 'white',
    position: 'absolute',
    right: 15,
    bottom: 1.5
  },
  contentWrapper: {
    backgroundColor: '#252528',
    flex: 3
  },
  content: {
    backgroundColor: '#434243',
    flex: 1
  },
  videoTitle: {
    fontSize: 18,
    color: 'white',
    marginTop: 17,
    left: 15,
    lineHeight: 21,
    marginRight: 25
  },
  dateAuthor: {
    fontSize: 14,
    color: 'white',
    position: 'absolute',
    left: 15,
    bottom: 17
  },
  toVideo: {
    fontSize: 14,
    color: 'white',
    position: 'absolute',
    bottom: 8,
    right: 15
  },
  buttonStyle: {
    backgroundColor: '#434243',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 17,
    marginBottom: 17
  },
  toHistory: {
    fontSize: 18,
    color: 'white'
  },
  loadingText: {
    fontSize: 15,
    color: 'white',
    marginTop: 15
  },
  indicatorWrapper: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'black'
  },
  footerText: {
    color: '#aaaaaa',
    fontSize: 15
  }

})
