import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feedback = ( state={}, action)=>{
  if (action.type === 'ADD_FEEDBACK') {
    console.log('index received payload of:', action.payload);
    let newState = {...state, ...action.payload};
    console.log("new state:", newState);
    return newState;
  }
  else if (action.type === 'EMPTY'){
    return {};
  }
  return state;
}



const storeInstance = createStore(
  combineReducers(
    {
      feedback
    }
  ),
  applyMiddleware(
    logger
  )
);

ReactDOM.render(
  <Provider store={storeInstance}><App /></Provider>,
   document.getElementById('root')
   );
  registerServiceWorker();
