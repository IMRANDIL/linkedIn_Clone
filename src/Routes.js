import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from './Utils/Screens';
import Profile from './Screens/Profile';
import Network from './Screens/Network';
import Job from './Screens/Job';
import Post from './Screens/Post';
import Notification from './Screens/Notification';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const PostStack = createNativeStackNavigator();
const NetworkStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const JobStack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={Screens.HOME} component={Home} />
      <HomeStack.Screen name={Screens.PROFILE} component={Profile} />
    </HomeStack.Navigator>
  );
};

const NetworkScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={Screens.NETWORK} component={Network} />
    </HomeStack.Navigator>
  );
};

const JobScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={Screens.JOB} component={Job} />
    </HomeStack.Navigator>
  );
};

const PostScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={Screens.POST} component={Post} />
    </HomeStack.Navigator>
  );
};

const NotificationScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={Screens.NOTIFICATION} component={Notification} />
    </HomeStack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={Screens.HOME_STACK} component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
