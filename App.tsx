import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';


export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View className='flex-1 bg-red-500'>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}


