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
    //if payloads are sent in the format {key: value}, e.g. {feeling: 4}, only 'ADD' action type is needed
    return {...state, ...action.payload};
    //spread the payload into the state object, since it is itself an object.
  }
  else if (action.type === 'EMPTY'){
    return {};
    //if EMPTY is received, return an empty object to 'clear'
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
