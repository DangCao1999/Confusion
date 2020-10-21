import { connect } from 'react-redux';
import { fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    leaders: state.leaders
  }
};

const mapDispatchToProps = dispatch => ({
  fetchLeaders: () => dispatch(fetchLeaders())
});

import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import Contact from './ContactUsComponent';
import About from './AboutUsComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Dishdetail from './DishdetailComponent';
import { Icon , Image} from 'react-native-elements';


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: '#7cc', height: 80, alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Image source={require('./images/logo.png')} style={{ margin: 10, width: 80, height: 60 }} />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>Cao's Restaurant</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Help'
        icon={({ focused, color, size }) => <Icon name='help' size={size} color={focused ? '#7cc' : '#ccc'} />}
        onPress={() => Linking.openURL('https://reactnavigation.org/docs/getting-started')} />
    </DrawerContentScrollView>
  );
}

const MainNavigator = createDrawerNavigator();
function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator initialRouteName="Home" 
    drawerContent={props => <CustomDrawerContent {...props}/>}
    >
      <MainNavigator.Screen name="Home" component={HomeNavigatorScreen}
       options={{title: "Home", drawerIcon: ({ focused, size }) => (<Icon name='home' size={size} color={focused ? '#7cc' : '#ccc'} />)}}>
       </MainNavigator.Screen>
       <MainNavigator.Screen name="About Us"  component={AboutNavigatorScreen}
        options={{title:"About Us", drawerIcon: ({focused, size}) => (<Icon name="info" size={size} color={focused ? '#7cc': '#ccc'}/>)}}
       ></MainNavigator.Screen>
      <MainNavigator.Screen name="Menu" component={MenuNavigatorScreen}
      options={{title:"Menu", drawerIcon: ({focused, size}) => (<Icon name="menu" size={size} color={focused ? '#7cc': '#ccc'}/>)}}
      ></MainNavigator.Screen> 
      <MainNavigator.Screen name="Contact Us" component={ContactUsNavigatorScreen}
       options={{title:"Contact Us", drawerIcon: ({focused, size}) => (<Icon name="contacts" size={size} color={focused ? '#7cc': '#ccc'}/>)}}
      ></MainNavigator.Screen>
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
      <HomeNavigator.Screen name='Home' component={Home}
      options={({navigation})=>({
        headerLeftContainerStyle: {marginLeft: 10},
        headerTitle: 'Home',
        headerLeft: ()=> (<Icon name='menu' size={36} color='#fff' onPress={()=> navigation.toggleDrawer()}/>)
      })}
      />
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
      <MenuNavigator.Screen name='Menu' component={Menu} 
      options={({navigation})=>({
        headerLeftContainerStyle: {marginLeft: 10},
        headerTitle: 'Menu',
        headerLeft: ()=> (<Icon name='menu' size={36} color='#fff' onPress={()=> navigation.toggleDrawer()}/>)
      })}
      />
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
      <AboutNavigator.Screen name='About Us' component={About} 
      options={({navigation})=>({
        headerLeftContainerStyle: {marginLeft: 10},
        headerTitle: 'About',
        headerLeft: ()=> (<Icon name='menu' size={36} color='#fff' onPress={()=> navigation.toggleDrawer()}/>)
      })}
      />

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
      <ContactUsNavigator.Screen name='Contact Us' component={Contact} 
      options={({navigation})=>({
        headerTitle: 'Contact',
        headerLeft: ()=> (<Icon name='menu' size={36} color='#fff' onPress={()=> navigation.toggleDrawer()}/>)
      })}
      />

    </ContactUsNavigator.Navigator>
  );
}

class Main extends Component {
  componentDidMount() {
    // redux
    this.props.fetchLeaders();
  }
  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

