import {StyleSheet} from "react-native";
import theme from "./theme";

let defTHeme = StyleSheet.create({
  titleText : {fontWeight: 'bold', ...theme.title},
  container1: {backgroundColor: theme.backgroundColor},
  container2: {backgroundColor: theme.backgroundColor},
  content: {...theme.content}
});

let defTHeme1 = StyleSheet.create({
  titleText : {fontWeight: 'bold', ...theme.title, color:'red'},
  container1: {backgroundColor: theme.backgroundColor},
  container2: {backgroundColor: theme.backgroundColor},
  content: {...theme.content, color:'red'}
});

module.exports = {
  defaultTHeme: defTHeme,
  defaultTHeme1: defTHeme1,
}

