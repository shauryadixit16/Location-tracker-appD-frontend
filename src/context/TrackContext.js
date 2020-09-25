import React from 'react';
import createDataContext from './createDataContext';
import tracker from '../api/tracker';
const reducer = (state, action) => {
  switch (action.type) {
    case 'fetch':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  try {
    const res = await tracker.get('/tracks');
    dispatch({ type: 'fetch', payload: res.data });
    console.log('done');
  } catch (error) {
    console.log(error);
  }
};
const createTrack = (dispatch) => async (name, locations) => {
  console.log('created');
  await tracker.post('/tracks', { name, locations });
};

export const { Context, Provider } = createDataContext(
  reducer,
  { fetchTracks, createTrack },
  []
);
