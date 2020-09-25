import React, { useContext, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { NavigationEvents } from 'react-navigation';
const SigninScreen = ({ navigation }) => {
  const { signin, state, clearerror } = useContext(AuthContext);
  const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');
  console.log(state);
  return (
    <View style={{ flex: 1, justifyContent: 'center', marginBottom: 400 }}>
      <NavigationEvents onWillBlur={clearerror} />
      <Spacer>
        <Text h1>Sign In</Text>
      </Spacer>
      <Input
        placeholder='Email'
        onChangeText={Setemail}
        value={email}
        autoCapitalize='none'
      />
      <Input
        secureTextEntry
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Password'
        onChangeText={Setpassword}
        value={password}
      />
      {!state.error ? null : (
        <Text style={{ color: 'red' }}>{state.error}</Text>
      )}
      <Spacer>
        <Button title='Sign in' onPress={() => signin({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{ color: 'blue', fontSize: 18, marginLeft: 10 }}>
          Dont have an account? Sign up instead..
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default SigninScreen;
