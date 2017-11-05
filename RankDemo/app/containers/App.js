import React,{Component} from 'react';
import { StackNavigator } from 'react-navigation';
import AboutCmpView from './AboutCmp';
import BeautyCmpView from './BeautyCmp';
import HomeView from './Home'
import ImageDetailCmpView from './ImageDetailCmp';
import DetailArticleCmpView from './DetailArticleCmp';

const App = StackNavigator({
  Home: {screen: HomeView},
  AboutCmp: {screen: AboutCmpView},
  BeautyCmp: {screen: BeautyCmpView},
  ImageDetailCmp: {screen: ImageDetailCmpView},
  DetailArticleCmp: {screen: DetailArticleCmpView},
});

export default App;
