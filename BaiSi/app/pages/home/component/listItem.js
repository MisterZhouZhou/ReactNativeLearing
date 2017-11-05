/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    InteractionManager
} from 'react-native';

let {width, height} = Dimensions.get('window');


import UserInfoItem from './userInfoItem';
import DetailItem from './detailItem';
import ToolBarItem from './toolBarItem';

import PictureDetail from '../detail/pictureDetail';
import VideoDetail from '../detail/videoDetail';

export default class listItem extends Component {
    static defaultProps = {
        itemData: {},
        navigator:null,
    };

    picturePress(){
        let {navigator} = this.props;
        if (navigator) {
            InteractionManager.runAfterInteractions(()=> {
                // navigator.navigate('PictureDetailView',
                //     {pictureData:this.props.itemData}
                // });
                navigator.navigate('PictureDetailView',{pictureData:this.props.itemData});
            });
        }
    }

    videoPress(){
        alert('点击视频');
        let {navigator} = this.props;
        if (navigator) {
            InteractionManager.runAfterInteractions(()=> {
                alert('点击视频');
                 // navigator.navigate('VideoDetailView',{pictureData:this.props.itemData, isVideoDetail:true})
            });
        }
    }

    satinPress(){
        let {navigator} = this.props;
              alert('satinPress'+navigator);
        if (navigator) {
            InteractionManager.runAfterInteractions(()=> {
                alert('点击文字');
            });
        }
    }

    userInfoPress(){
        alert('userInfoPress');
        let {navigator} = this.props;
        if (navigator) {
            InteractionManager.runAfterInteractions(()=> {
                alert('点击用户信息');
            });
        }
    }

    renderItem(){
        return(
            <View>
                {/*Cell顶部*/}
                <UserInfoItem userInfoData={this.props.itemData} userInfoPress={()=>{this.userInfoPress()}}/>

                {/*Cell中间内容*/}
                <DetailItem itemData={this.props.itemData}
                            picturePress={() => this.picturePress()}
                            satinPress={()=>this.satinPress()}
                />

                {/*Cell底部*/}
                <ToolBarItem toolBarData={this.props.itemData} />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderItem()}
                <View style={styles.placeViewStyle} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:width,
        backgroundColor: 'white',
    },
    placeViewStyle: {
        backgroundColor:'#ddd',
        height:10,
    },
});


