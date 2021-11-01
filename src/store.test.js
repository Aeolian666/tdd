import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import * as studentActions from './actions/studentActions';
import { student } from './tools/mockData';

describe('Redux store', () => {
  it('Should handle fetching course', () => {
    // ** Code along
  });
});
