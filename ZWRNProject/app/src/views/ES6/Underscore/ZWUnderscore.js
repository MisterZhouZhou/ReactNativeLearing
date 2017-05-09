import React ,{ Component } from 'react'
import {StyleSheet, View, Text} from 'react-native'
import _ from '../../../tools/underscore-min'

export default class ZWUnderscore extends Component{
  componentDidMount() {
      var obja={a:123,b:1234};
      var objb={a:123,b:1234};
      var objc=[{a:123,b:1234},{c:12,d:123}];
      var objd=[{a:123,b:1234},{c:12,d:123}];

      // 对比两个对象是否相等
      //var resulq=_.isEqual(objb,obja);

      // 遍历数组
      // _.each([1,2,3],(number)=>{
      //    console.log(`number==>${number}`);
      // });

      // 懒查找，找到一个就不会继续往下找
      // var newData = _.find([1,2,3,4,5,6],(number)=>{
      //    return number%2==0;
      // });
      // console.log('========');
      // console.log(newData);

      // 会查找出所有的匹配项
      // var data=_.filter([1,2,3,4,5,6],(number)=>{
      //    return number%2==0;
      // });
      // console.log('========');
      // console.log(data);

      // 是否包含某个对象或者某个值
      // var isContain=_.contains([1,2,3,4,5,6],4);
      // console.log('========');
      // console.log(isContain);

      // 传递的每一个参数都执行sort方法
      //_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');

      // 获取最大值
      // var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
      // var newStooges = _.max(stooges, function(stooge){ return stooge.age; });
      // console.log('========');
      // console.log(newStooges);

      //  var stooges = [40,50,60];
      // var newStooges = _.max(stooges);
      // console.log('========');
      // console.log(newStooges);

       // 获取最小值
      // var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
      // var newStooges = _.min(stooges, function(stooge){ return stooge.age; });
      // console.log('========');
      // console.log(newStooges);

      // var stooges = [40,50,60];
      // var newStooges = _.min(stooges);
      // console.log('========');
      // console.log(newStooges);

      // sortBy根据对象中某个key进行排序
      var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
      var newstooges = _.sortBy(stooges, 'name');
      console.log('========');
      console.log(newstooges);
  }

  render(){
    var severalNumbers = [33, 54, 42]
    return(
       <View>
         {
           _.map(['a','b'],(txt,i)=>{
             return <Text key={i}>{txt}</Text>
          })
         }
       </View>
    );
  }
}
