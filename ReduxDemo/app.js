import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './home';
import store from './store';
import { createStore } from 'redux';

export default class App extends Component {

  reducer(state,action){
      switch(action.type){
        case 'add_todo':
              return state.concat(action.text);
          default:
              return state;
      }
    }

  componentDidMount() {

     var store = redux.createStore(reducer, []);
  }


  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}
