import * as React from 'react';
import { Button, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Testando from './Testando';
import { useKeepAwake } from 'expo-keep-awake';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  useKeepAwake();
  return (
    <>
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
        <Button
      title="Testando"
      onPress={() =>
        navigation.navigate('Testando', {name: 'Jane'})
      }
    />
    </>
  );
};

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Testando" component={Testando}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}