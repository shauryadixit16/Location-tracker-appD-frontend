import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
const BlankScreen = () => {
  const { autosignin } = useContext(AuthContext);
  useEffect(() => {
    autosignin();
  }, []);
  return null;
};

export default BlankScreen;
