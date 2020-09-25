import React from 'react';
import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_cur':
      return { ...state, current: action.payload };
    case 'add_loc':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'name':
      return { ...state, name: action.payload };
    case 'start':
      return { ...state, recording: true };
    case 'stop':
      return { ...state, recording: false };
    case 'reset':
      return { ...state, name: '', locations: [] };
    default:
      return state;
  }
};
const reset = (dispatch) => () => {
  dispatch({ type: 'reset' });
};
const changeName = (dispatch) => (name) => {
  dispatch({ type: 'name', payload: name });
};

const addlocation = (dispatch) => (location, recording) => {
  dispatch({ type: 'add_cur', payload: location });
  if (recording) {
    dispatch({ type: 'add_loc', payload: location });
  }
};

const startrecording = (dispatch) => () => {
  dispatch({ type: 'start' });
};
const stoprecording = (dispatch) => () => {
  dispatch({ type: 'stop' });
};
export const { Context, Provider } = createDataContext(
  reducer,
  { addlocation, changeName, startrecording, stoprecording, reset },
  { locations: [], current: null, recording: false, name: '' }
);
