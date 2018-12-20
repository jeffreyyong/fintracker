/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from './src/components/common/Header';
import Accounts from './src/components/Accounts';


export class Home extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBztf5bLDf6vsdxHm4tgJF_Ax1smh6cipM',
      authDomain: 'crmapp-2f580.firebaseapp.com',
      databaseURL: 'https://crmapp-2f580.firebaseio.com',
      projectId: 'crmapp-2f580',
      storageBucket: 'crmapp-2f5 80.appspot.com',
      messagingSenderId: '346507491976'
    });
  }

  render() {
    return (
      <Header headerText={'Home'} />
    );
  }
}

const BottomNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <Icon name='home' size={26} />
      )
    }
  },
  Accounts: {
    screen: Accounts,
    navigationOptions: {
      tabBarLabel: 'Accounts',
      tabBarIcon: () => (
        <Icon name='piggy-bank' size={26} />
      )
    }
  },
});

const App = createAppContainer(BottomNavigator);
export default App;
