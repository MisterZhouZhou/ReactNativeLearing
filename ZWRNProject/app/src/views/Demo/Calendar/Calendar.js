import React ,{ Component } from 'react'
import {StyleSheet, View, Text, PixelRatio, TouchableOpacity, ScrollView, Image} from 'react-native'
import _ from '../../../tools/underscore-min';

export default class Calendar extends Component{
  constructor(props) {
    super(props);
    var num = this.props.num || 3;
    this.state={
      startTime:this.props.startTime || new Date(),
      num: num,
      seldate:new Date(),
      // plans:[],
      leftNav:true,
      rightNav:true,
    }
    // this.plans = [];
    this.seldate = new Date();
    this.items = [];
    // this.startTime = this.props.startTime;
  }

  componentDidMount() {

      // this.get_finished_plans();
      // this.plans = this.plans.concat(this.repaire());
      this.changeNav();
      // let mdata = this.filter(new Date().getDate());
      // this.props.changePlan(mdata);
      this.calDateItem();
      // this.setState({plans:this.plans});
  }

  // componentWillReceiveProps(props) {
  //   if(this.state.startTime.getFullYear()!=props.startTime.getFullYear()||this.state.startTime.getMonth()!=props.startTime.getMonth()||this.state.startTime.getDate()!=props.startTime.getDate()){
  //     // this.startTime = props.startTime;
  //     this.setState({startTime:props.startTime});
  //     this.calDateItem();
  //     this.changeNav();
  //   }
  // }

  filter(day){
    let year = this.startTime.getFullYear();
    let month = this.startTime.getMonth();
    let date = day;
    for(var item in this.plans){
      if(this.plans[item].day.getFullYear()==year&&this.plans[item].day.getMonth()==month&&this.plans[item].day.getDate()==date){
        return this.plans[item]
      }
    }
    return {key:null,value:-2,date:day};
  }

  calDateItem(){
    var date = this.state.startTime;
    let nowDate = new Date();
    var num = this.state.num;
    for(var n = 0; n < num; n++){
      var rows = [];
      var newDate = new Date(date.getFullYear(), date.getMonth() + 1 + n, 0);
      var week = new Date(date.getFullYear(), date.getMonth() + n, 1).getDay();
      if(week === 0){
        week = 7;
      }
      var counts = newDate.getDate();
      var rowCounts = Math.ceil(((counts - (7-week))/7)+1);
      for(var i = 0; i < rowCounts; i++){
        var days = [];
        var sjd = false;
        for(var j = (i * 7) + 1; j < ((i+1) * 7) + 1; j++){
          var dayNum = j - week ;
          if(dayNum > 0 && j <= counts + week){
            var dateObj = new Date(date.getFullYear(), date.getMonth() + n, dayNum);
            var dateStr = dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dayNum;
            var grayStyle = {};
            if(nowDate >= new Date(date.getFullYear(), date.getMonth() + n, dayNum + 1)){
              grayStyle = {
                color:'#ccc'
              };
            }
            let indent = dateObj;
            // let istoday = nowDate.getMonth()==dateObj.getMonth() && nowDate.getDate()==dayNum;
            // :istoday?'#aaaaaa':'white';
            var bg_color= this.seldate&&this.seldate.getMonth()==dateObj.getMonth()&&this.seldate.getDate()==dayNum?'#00B2FF':'white';
            sjd=true;
            days.push(
              <TouchableOpacity onPress={()=>{this.chosePlan(indent)}} key={dayNum+"number"} style={[styles.flex_1,{alignItems:'center',justifyContent:'center'}]} underlayColor="#fff">
                <View style={{width:40,height:40,alignItems:'center',justifyContent:'center'}}>
                  <View style={{backgroundColor:bg_color,borderRadius:13,width:26,height:26,alignItems:'center',justifyContent:'center'}}>
                    <Text style={[grayStyle,{color:'blue',fontSize:15}]}>{dayNum<10?("0"+dayNum):dayNum}</Text>
                  </View>
                  <View style={{width:40,alignItems:'center',justifyContent:'center'}}><Text style={{color:'yellow',fontSize:9}}>'d'</Text></View>
                </View>
              </TouchableOpacity>
            );
          }else{
            days.push(
              <View  key={dayNum+'null'} style={[styles.flex_1]}>
                <Text></Text>
              </View>
            );
          }
        }
        if(sjd){
          rows.push(
            <View key={dayNum+j} style={styles.row}>{days}</View>
          );
        }
      }
      this.items.push(
        <View  key={n}  style={[styles.cm_bottom]}>
          {rows}
        </View>
      );
    }
  }

  chosePlan(item){
      // alert(item);
      this.seldate = item;
      // this.setState({seldate:item});
      // this.calDateItem();
      this.changeNav();

  }

  changeNav(){
    this.setState({leftNav:true,rightNav:true});
  }

  nextMonth(){
    let month=this.state.startTime.getMonth()+2;
    let year = this.state.startTime.getFullYear();
    if(month>12){
      month=1;
      year+=1;
    }
    month = month<10?("0"+month):month;
    this.state.startTime = new Date(year+"-"+month+"-01");
    this.calDateItem();
    this.changeNav();
  }

  preMonth(){
    let month=this.state.startTime.getMonth();
    alert(month);
    let year = this.state.startTime.getFullYear();
    if(month<=0){
      month=12;
      year-=1;
    }
    month = month<10?("0"+month):month;
    this.state.startTime = new Date(year+"-"+month+"-01");
    this.calDateItem();
    this.changeNav();
  }

  render(){
    return(
      <View style={styles.calendar_container}>
          <View style={[styles.row_header,styles.header]}>
            {!this.state.leftNav?null:<TouchableOpacity onPress={()=>this.preMonth()} style={[styles.nav,{position:'absolute',left:5,top:0,height:40,backgroundColor:'green'}]}><Image style={styles.img} /></TouchableOpacity>}
            <View style={{height:40,alignItems:'center',justifyContent:'center'}}><Text style={styles.title}>{this.state.startTime.getFullYear()+"年"+(this.state.startTime.getMonth() + 1)+"月"}</Text></View>
            {!this.state.rightNav?null:<TouchableOpacity onPress={()=>this.nextMonth()} style={[styles.nav,{position:'absolute',right:5,top:0,height:40}]}><Image style={styles.img} /></TouchableOpacity>}
          </View>
          <View style={[styles.row, styles.row_header, this.props.headerStyle,{height:30,backgroundColor:'white'}]}>
            <View style={[styles.flex_1]}>
              <Text style={[styles.week_highlight,styles.cal_title]}>{"日"}</Text>
            </View>
            <View style={[styles.flex_1]}>
              <Text style={[this.props.headerStyle,styles.cal_title]}>{"一"}</Text>
            </View>
            <View style={[styles.flex_1]}>
              <Text style={[this.props.headerStyle,styles.cal_title]}>{"二"}</Text>
            </View>
            <View style={[styles.flex_1]}>
              <Text style={[this.props.headerStyle,styles.cal_title]}>{"三"}</Text>
            </View>
            <View style={[styles.flex_1]}>
              <Text style={[this.props.headerStyle,styles.cal_title]}>{"四"}</Text>
            </View>
            <View style={[styles.flex_1]}>
              <Text style={[this.props.headerStyle,styles.cal_title]}>{"五"}</Text>
            </View>
            <View style={[styles.flex_1]}>
              <Text style={[styles.week_highlight,styles.cal_title,this.props.headerStyle]}>{"六"}</Text>
            </View>
          </View>
          <ScrollView style={{flex:1,}}>
            {this.items}
          </ScrollView>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'blue'
  },
  title:{
    fontSize:17,
  },
  flex_1:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  calendar_container:{
    backgroundColor:'#fff',
    flex:1,
    borderColor:'#ccc'
  },
  today_title:{
    // color:'#00B2FF'
  },
  cal_title:{
    color:'#767676',
    fontSize:11
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:40,
    backgroundColor:'red'
  },
  row_header:{
    borderTopWidth:1/PixelRatio.get(),
    borderTopColor:'#EEEEE9',
  },
  img:{
    height:17,
    width:10,
    backgroundColor:'yellow'
  },
  nav:{
    alignItems:'center',
    justifyContent:'center',
    width:40,
  },
  row:{
    flexDirection:'row',
    height:40,
  },
  month:{
    alignItems:'center',
    justifyContent:'center',
    height:40,
  },
  month_text:{
    fontSize:18,
    fontWeight:'400',
  },
  week_highlight:{
    // color:'#23B8FC'
  },
  cm_bottom:{
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderBottomColor:'#EEEEE9',
  }
});
