import { NaviagtionActions, NavigationActions } from 'react-navigation';

let navigator;

export const Setnavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
