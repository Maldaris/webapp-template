import { combineReducers } from 'redux';

import coreReducer from './core';

export default combineReducers({ core: coreReducer });
