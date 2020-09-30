import React, { Component } from 'react';

import ContactUs from './ContactUsComponent';
import AboutUs from './AboutUsComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dishdetail from './DishdetailComponent';


const MainNavigator = createDrawerNavigator();
function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator initialRouteName="Home">
      <MainNavigator.Screen name="Home" component={HomeNavigatorScreen}></MainNavigator.Screen>
      <MainNavigator.Screen name="Menu" component={MenuNavigatorScreen}></MainNavigator.Screen>
      <MainNavigator.Screen name="About Us" component={AboutNavigatorScreen}></MainNavigator.Screen>
      <MainNavigator.Screen name="Contact Us" component={ContactUsNavigatorScreen}></MainNavigator.Screen>
    </MainNavigator.Navigator>
  );
}


const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <HomeNavigator.Screen name='Home' component={Home} />
    </HomeNavigator.Navigator>
  );
}


const MenuNavigator = createStackNavigator();
function MenuNavigatorScreen() {
  return (
    <MenuNavigator.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <MenuNavigator.Screen name='Menu' component={Menu} />
      <MenuNavigator.Screen name='Dishdetail' component={Dishdetail} options={{ headerTitle: 'Dish Detail' }} />
    </MenuNavigator.Navigator>
  );
}

const AboutNavigator = createStackNavigator();
function AboutNavigatorScreen() {
  return (
    <AboutNavigator.Navigator
      initialRouteName='AboutUs'
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <AboutNavigator.Screen name='About Us' component={AboutUs} />

    </AboutNavigator.Navigator>
  );
}


const ContactUsNavigator = createStackNavigator();
function ContactUsNavigatorScreen() {
  return (
    <ContactUsNavigator.Navigator
      initialRouteName='ContactUs'
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <ContactUsNavigator.Screen name='Contact Us' component={ContactUs} />

    </ContactUsNavigator.Navigator>
  );
}

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}

export default Main;

