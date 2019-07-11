import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
let tiger;
tiger = {
    num:10000
}
const increase = {
    type:1
};
const decrease = {
    type:2
};

const reducer = (state = tiger, action) => {
    switch (action.type){
      case 1: 
        return state.num += 100;
      case 2: 
        return state.num -= 100;
      default: 
        return state;
    }
}
const store = createStore(reducer);
store.subscribe(() =>
  console.log(store.getState())
)
console.log(store.dispatch(increase))
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
