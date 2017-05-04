import React ,{Component} from 'react';
import {View, Text, StyleSheet, Dimensions, SectionList, TouchableOpacity} from 'react-native';

let {width,height} = Dimensions.get('window');

export default class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
        }
    }

    componentDidMount() {
      this.fetchData();
    }

    fetchData(){
      let groups = [{title:'服务'},{title:'边玩边赚'},{title:'三方服务'}];
      let apps = [[{title:'叮当贷'},{title:'小金袋'},{title:'分期'},{title:'超能'},{title:'订阅'},{title:'服务'}],[{title:'俱乐部'},{title:'风险'}],[{title:'滴滴'},{title:'小金袋'}]];
      let data = [];
      for (let i = 0; i < groups.length; i++) {
          var row = [];
          row.push(apps[i]);
          data.push({ data: row, key: groups[i].title});
      }
      this.setState({
          dataSource: data
      });
    }

     _renderItem = (info,i) => (

        <View  style={styles.list}>
        {
          info.item.map((item, i) => this.renderExpenseItem(item, i))
        }
        </View>
      )

    renderExpenseItem(info,i){
      return( <TouchableOpacity key={i} onPress={() => this._pressRow(info)} underlayColor="transparent">
            <View style={styles.row}>
                <Text>{info.title}</Text>
            </View>
          </TouchableOpacity>)
    }

    _renderSectionHeader = ({ section }) => (
        <View style={{ flex: 1, height: 25,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.sectionHeader} >{section.key}</Text>
        </View>
    );

    _listHeaderComponent() {
        return (
            <View style={{flex:1, height:80, backgroundColor:'red',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Text>This is Header </Text>
            </View>
        );
    }

    _listFooterComponent() {
        return (
            <Text style={[styles.remark]}>*预期收益非平台承诺收益，市场有风险，投资需谨慎</Text>
        );
    }

    _pressRow(item) {
         alert(item.title);
        // this.props.navigator.pushTo(item.go)
    }

    _extraUniqueKey(item ,index){
        return "index"+index+item;
   }

   render() {
        if (!this.state.dataSource) {
            return (
                <View></View>
            );
        }
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.navigatorStyle}> 发现 </Text>
                <View style={{ flex: 1, backgroundColor: '#F7F6F8' }}>
                    <SectionList
                        contentInset={{top:0,left:0,bottom:49,right:0}}// 设置他的滑动范围
                        renderItem={this._renderItem}
                        ListFooterComponent={this._listFooterComponent}
                        ListHeaderComponent={this._listHeaderComponent}
                        renderSectionHeader={this._renderSectionHeader}
                        showsVerticalScrollIndicator={false}
                        keyExtractor = {this._extraUniqueKey}// 每个item的key
                        sections={ this.state.dataSource}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navigatorStyle: {
        height: 64,
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        paddingTop: 33.5,
        fontSize: 17,
        fontWeight: '600',
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF'
    },
    row: {
        justifyContent: 'center',
        width:40,
        height:40,
        width: (width - 5) / 4,
        height: (width - 5) / 4,
        alignItems: 'center',
        backgroundColor:'red',
        marginLeft:1,
        marginBottom:1
    },
    sectionHeader: {
        marginLeft: 10,
        padding: 6.5,
        fontSize: 12,
        color: '#787878'
    },
    remark: {
        margin: 10,
        fontSize: 10,
        color: '#D2D2D2',
        marginBottom: 10,
        alignSelf: 'center',
    },
});
