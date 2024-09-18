import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import icons from react-native-vector-icons
import * as Animatable from 'react-native-animatable';
import Dashboard from '../screens/Dashboard';
import Courses from '../screens/Courses';
import Calendar from '../screens/Calendar';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: '#13591d',
          inactiveTintColor: 'black',
          style: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 10,
          },
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            marginBottom: 5,
          },
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen
          name="Dashboard"
        
          component={Dashboard}
          options={{
            tabBarLabel: 'Home',
            focusedIcon: 'home',
            unfocusedIcon: 'home-outline',
             headerShown:false
          }}
        />
        <Tab.Screen
          name="Courses"
          component={Courses}
          options={{
            tabBarLabel: 'Courses',
            focusedIcon: 'book-open-page-variant-outline',
            unfocusedIcon: 'book-open-page-variant',
            headerShown:false
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarLabel: 'Calendar',
            focusedIcon: 'calendar-month',
            unfocusedIcon: 'calendar-month-outline',
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: 'Notices',
            focusedIcon: 'bell',
            unfocusedIcon: 'bell-outline',
            headerShown:false

          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            focusedIcon: 'account-circle',
            unfocusedIcon: 'account-circle-outline',
            headerShown:false
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const tabStyle = isFocused ? [styles.tabItem, styles.focusedTab] : styles.tabItem;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={tabStyle}>
            <Animatable.View animation={isFocused ? 'jello' : null}>
              <View style={{ alignItems: 'center' }}>
                <MaterialCommunityIcons
                  name={isFocused ? options.focusedIcon : options.unfocusedIcon}
                  color={isFocused ? '#13591d' : 'black'}
                  size={24}
                />
                <Text style={{ color: isFocused ? '#13591d' : 'black', fontSize: 12 }}>{label}</Text>
              </View>
            </Animatable.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    elevation: 4, // Add elevation for shadow effect
    paddingVertical: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  focusedTab: {
    backgroundColor: '#e1f5e3', // Background color for focused tab
    borderRadius: 20, // Adjust the border radius
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default BottomNavigator;
