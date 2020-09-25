import React, { useContext, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { NavigationEvents } from 'react-navigation';
const SignupScreen = ({ navigation }) => {
  const { signup, state, clearerror } = useContext(AuthContext);
  const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');
  console.log(state);
  return (
    <View style={{ flex: 1, justifyContent: 'center', marginBottom: 400 }}>
      <NavigationEvents onWillBlur={clearerror} onWillFocus={clearerror} />
      <Spacer>
        <Text h1>Sign up</Text>
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
        <Button title='Sign Up' onPress={() => signup({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={{ color: 'blue', fontSize: 18, marginLeft: 10 }}>
          Already have an account? Sign in instead..
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default SignupScreen;
