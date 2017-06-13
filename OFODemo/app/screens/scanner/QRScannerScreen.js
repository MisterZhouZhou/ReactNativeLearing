import React, {Component} from "react";
import {Image, Text, TouchableWithoutFeedback, View, WebView} from "react-native";

import {Constants, Images, Colors} from "../../resource/";

import {TitleBar, QRScannerView, ImageButton} from "../../components/";
import Styles from './styles/QRScannerScreenStyles';
export default class QRScannerScreen extends Component {
  constructor(props) {
        super(props);
    }

    render() {
        return (
            <QRScannerView
                bottomMenuStyle={{height: 120, backgroundColor: '#000000', opacity: 1}}
                isShowScanBar={true}
                scanBarImage={Images.ic_scan_bar}
                cornerColor={Colors.yellow_FFD900}
                cornerOffsetSize={0}
                borderWidth={0}
                hintText={'请对准车牌上的二维码'}
                hintTextStyle={{color: Colors.yellow_FFD900, fontSize: 16, fontWeight: 'bold',backgroundColor:'transparent'}}
                hintTextPosition={110}
                maskColor={Colors.black_0000004D}
                onScanResultReceived={this.barcodeReceived.bind(this)}
                bottomMenuHeight={120}
                renderTopBarView={() => {
                    return (
                        <TitleBar
                            title={Constants.string_title_scanner_qrcode}
                            rightTitle={Constants.string_help}
                            leftIconPress={() => this.props.navigation.goBack()}
                        />
                    )
                }}
                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }

    _renderMenu() {
        return (
            <View style={Styles.view_menu_container}>
                <View style={Styles.view_menu_item_container}>
                    <ImageButton
                        style={Styles.image_bottom_menu}
                        source={Images.ic_manual_input}
                    />
                    <Text
                        style={Styles.text_menu_title}
                    >手动输入车牌号</Text>
                </View>

                <View style={Styles.view_menu_item_container}>
                    <ImageButton
                        style={Styles.image_bottom_menu}
                        source={Images.ic_light_off}
                    />
                    <Text
                        style={Styles.text_menu_title}
                    >手电筒</Text>
                </View>
            </View>
        )
    }

    barcodeReceived(e) {

        console.log(e);

        // if (this.state.parsingResult ) return;
        //
        // this.setState({
        //     parsingResult: e.data,
        // });

    }
}
