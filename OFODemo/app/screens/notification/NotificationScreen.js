import React, {Component} from "react";
import {Image, Text, TouchableWithoutFeedback, View, WebView} from "react-native";
import {Container, Content} from "native-base";

import {Constants, Images} from "../../resource/";

import {TitleBar} from "../../components/";

export default class NotificationScreen extends Component {
  render(){
    return(
       <Container>
            <TitleBar
                title={Constants.string_title_notificationScreen}
                leftIconPress={()=>this.props.navigation.goBack()}
            />
            <Content>
                <Text>
                    这里显示内容
                </Text>
            </Content>
        </Container>
    );
  }
}
