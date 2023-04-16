import React from 'react';
import { store } from './redux/store/store';
import { createBottomTabNavigator, BottomTabNavigationOptions, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './components/Screens/HomeScreen';
import ProfileScreen from './components/Screens/ProfileScreen';
import TrainingListScreen from './components/Screens/TrainingListScreen';
import AIChatScreen from './components/Screens/AIChatScreen';
import DietsScreen from './components/Screens/DietsScreen';

const Tab = createBottomTabNavigator();

type Tab = {
  name: string;
  component: React.ComponentType<any>;
  icon: string;
};

const tabs: Tab[] = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'home-outline',
  },
  {
    name: 'Training List',
    component: TrainingListScreen,
    icon: 'barbell-outline',
  },
  {
    name: 'A.I Chat',
    component: AIChatScreen,
    icon: 'globe-outline',
  },
  {
    name: 'Diets',
    component: DietsScreen,
    icon: 'leaf-outline',
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    icon: 'person-outline',
  },
];

type BottomTabParamList = {
  [key: string]: undefined;
};

type Props = {
  navigation: BottomTabNavigationProp<BottomTabParamList>;
  route: RouteProp<BottomTabParamList, string>;
};

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          {tabs.map((tab: Tab) => (
            <Tab.Screen
              key={tab.name}
              name={tab.name}
              component={tab.component}
              options={({ route, navigation }) => ({
                tabBarIcon: ({ color }) => (
                  <Ionicons
                    name={tab.icon}
                    size={23}
                    color={route.name === tab.name ? 'red' : color}
                  />
                ),
                tabBarLabelStyle: {
                  color: route.name === tab.name ? 'red' : '#333',
                },
              })}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


