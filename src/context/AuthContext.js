import createDataContext from './createDataContext';
import tracker from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';
const reducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return { error: '', token: action.payload };
    case 'adderr':
      return { ...state, error: action.payload };
    case 'clearerr':
      return { ...state, error: '' };
    case 'signout':
      return { token: null, error: '' };
    default:
      return state;
  }
};

const autosignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    navigate('Tracklist');
  } else {
    navigate('Signup');
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const res = await tracker.post('/signup', { email, password });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({ type: 'signup', payload: res.data.token });
    navigate('mainFlow');
    console.log(res.data.token);
  } catch (error) {
    dispatch({ type: 'adderr', payload: 'Something went wrong with signup' });
  }
};
const signin = (dispatch) => async ({ email, password }) => {
  try {
    const res = await tracker.post('/signin', { email, password });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({ type: 'signin', payload: res.data.token });
    navigate('mainFlow');
    console.log(res.data.token);
  } catch (error) {
    dispatch({ type: 'adderr', payload: 'Something went wrong with signin' });
  }
};
const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('Signup');
};

const clearerror = (dispatch) => () => {
  dispatch({ type: 'clearerr' });
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    signin,
    signout,
    signup,
    clearerror,
    autosignin,
  },
  { token: null, error: '' }
);
