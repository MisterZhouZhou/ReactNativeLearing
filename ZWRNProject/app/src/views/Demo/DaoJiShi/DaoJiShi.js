import React ,{ Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import CountDownReact from './CountDownReact'

export default class DaoJiShi extends Component{

   render(){
     return(
      <View style={{paddingTop:40,}}>
        <CountDownReact
            date="2017-11-28T00:00:00+00:00"
            days={{plural: 'Days ',singular: 'day '}}
            hours=':'
            mins=':'
            segs=''
            daysStyle={styles.time}
            hoursStyle={styles.time}
            minsStyle={styles.time}
            secsStyle={styles.time}
            firstColonStyle={styles.colon}
            secondColonStyle={styles.colon}
        />
         <View style={{
                flexDirection: 'row',
                alignItems:'baseline',
                marginTop:20,
            }}>
            <Text style={styles.cardItemTimeRemainTxt}>还剩</Text>
            <CountDownReact
              // date={String(new Date("May 26,2017 11:00:00"))}
              date={String(new Date('2017/5/26 11:12:00'))}
              days={{plural: '天 ',singular: '天 '}}
              hours=':'
              mins=':'
              segs=''
              onEnd = {(value)=>{
                if(value){
                  alert('倒计时结束');
                }else{
                  alert('日期过期');
                }
              }}

              daysStyle={styles.cardItemTimeRemainTxt}
              hoursStyle={styles.cardItemTimeRemainTxt}
              minsStyle={styles.cardItemTimeRemainTxt}
              secsStyle={styles.cardItemTimeRemainTxt}
              firstColonStyle={styles.cardItemTimeRemainTxt}
              secondColonStyle={styles.cardItemTimeRemainTxt}
            />
         </View>
         <CountDownReact
            date="2017-06-28T00:00:00+00:00"
            days={{plural: 'D ',singular: 'D '}}
            hours='#'
            mins=':'
            segs=''

            containerStyle={styles.container}
            daysStyle={styles.text}
            hoursStyle={styles.text}
            minsStyle={styles.text}
            secsStyle={styles.text}
            firstColonStyle={styles.text}
            secondColonStyle={styles.text}
          />

       </View>
    );
   }
}

const styles = StyleSheet.create({
  cardItemTimeRemainTxt: {
    fontSize: 20,
    color: '#ee394b'
  },
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    marginTop:20
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  },
  //时间文字
  time: {
    paddingHorizontal: 3,
    backgroundColor: 'rgba(85, 85, 85, 1)',
    fontSize: 14,
    color: 'white',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  //冒号
  colon: {
    fontSize: 12, color: 'rgba(85, 85, 85, 1)'
  },

  cardItemMask:{
    position: 'absolute',
    top: 15,
    right:10,
    backgroundColor: 'transparent'
  },
  cardItemTimer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardItemTimerIcon: {
    width:11,
    height: 11,
  },
  cardItem: {
    flexDirection: 'column',
    backgroundColor:'red',
    marginTop:20,
    width: 370,
    height: 370 * 0.65625,
  },
  cardItemMainPic: {
     width: 370,
    height: 370 * 0.65625,
  },
});
