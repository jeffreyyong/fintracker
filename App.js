/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import Header from './src/components/Header';


export default class App extends Component {
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
      <Header headerText={'Trillionaire'} />
    );
  }
}

