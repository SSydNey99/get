import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import AddScreen from '../screens/AddScreen';
import SearchScreen from '../screens/SearchScreen';
import { Ionicons } from '@expo/vector-icons';
import MessageDetailScreen from '../screens/MessageDetailScreen';
import ImageDetailScreen from '../screens/ImageDetailScreen'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Homes" component={HomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Detail" component={DetailScreen}options={{ headerShown: false }} />
    <Stack.Screen name="ImageDetail" component={ImageDetailScreen} />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator initialRouteName="Search">
    <Stack.Screen name="hello" component={SearchScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Detail" component={DetailScreen}options={{ headerShown: false }} />
  </Stack.Navigator>
);
 const ChatStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ChatHome" component={ChatScreen}options={{ headerShown: false }} />
    <Stack.Screen name="MessageDetail" component={MessageDetailScreen}options={{ headerShown: false }} />
    <Stack.Screen name="ImageDetail" component={ImageDetailScreen}  />
  </Stack.Navigator>
);
const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="welcome to my Profile" component={ProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ImageDetail" component={ImageDetailScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);


const AppNavigator = () => {
  return (
    <NavigationContainer> 
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (route.name === 'Add') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: '#000',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="Chat" component={ChatStack} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Search" component={SearchStack} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
