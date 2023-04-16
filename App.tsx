import React from 'react';
import { store } from './redux/store/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './components/Screens/HomeScreen';
import ProfileScreen from './components/Screens/ProfieScreen';

const Tab = createBottomTabNavigator();

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }} />
          <Tab.Screen
            name='Profile'
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-outline" size={size} color={color} />
              ),
            }} />
        </Tab.Navigator>

      </NavigationContainer>
    </Provider>

  );
}


