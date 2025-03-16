import React, {useCallback, memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import CreateScreen from '../screens/CreateScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {RootTabParamList} from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

const getIconName = (routeName: string, focused: boolean): string => {
  switch (routeName) {
    case 'Home':
      return focused ? 'home' : 'home-outline';
    case 'Discover':
      return focused ? 'search' : 'search-outline';
    case 'Create':
      return focused ? 'add-circle' : 'add-circle-outline';
    case 'Community':
      return focused ? 'people' : 'people-outline';
    case 'Me':
      return focused ? 'person' : 'person-outline';
    default:
      return '';
  }
};

const TabIcon = memo(
  ({
    routeName,
    focused,
    color,
    size,
  }: {
    routeName: string;
    focused: boolean;
    color: string;
    size: number;
  }) => (
    <Ionicons
      name={getIconName(routeName, focused)}
      size={size}
      color={color}
    />
  ),
);

const screenOptions = {
  tabBarActiveTintColor: '#007AFF',
  tabBarInactiveTintColor: 'gray',
  tabBarStyle: {
    height: Platform.OS === 'ios' ? 88 : 75,
    paddingBottom: Platform.OS === 'ios' ? 28 : 8,
    paddingTop: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  headerShown: false,
  tabBarHideOnKeyboard: true,
};

const BottomTabNavigator: React.FC = () => {
  const renderTabIcon = useCallback(
    ({route, focused, color, size}: any) => (
      <TabIcon
        routeName={route.name}
        focused={focused}
        color={color}
        size={size}
      />
    ),
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        ...screenOptions,
        tabBarIcon: ({focused, color, size}) =>
          renderTabIcon({route, focused, color, size}),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Me" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
