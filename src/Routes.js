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

const header = (
  navigation,
  route,
  icon,
  title,
  iconLeft,
  isPostScreen,
  isNotificationScreen,
) => ({
  title: title,
});

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={Screens.HOME_STACK}
          component={HomeScreen}
          options={({navigation, route}) =>
            header(navigation, route, 'home', 'Home')
          }
        />
        <Tab.Screen
          name={Screens.NETWORK_STACK}
          component={NetworkScreen}
          options={({navigation, route}) =>
            header(navigation, route, 'people', 'Network')
          }
        />
        <Tab.Screen
          name={Screens.JOB_STACK}
          component={JobScreen}
          options={({navigation, route}) =>
            header(navigation, route, 'briefcase', 'Job')
          }
        />
        <Tab.Screen
          name={Screens.POST_STACK}
          component={PostScreen}
          options={({navigation, route}) =>
            header(navigation, route, 'add-circle', 'Post', 'close', true)
          }
        />
        <Tab.Screen
          name={Screens.NOTIFICATION_STACK}
          component={NotificationScreen}
          options={({navigation, route}) =>
            header(navigation, route, 'notifications', 'Notification')
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
