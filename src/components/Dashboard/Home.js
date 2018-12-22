import { Component } from 'react';
import firebase from 'firebase';


export default class Home extends Component {
    static navigationOptions = {
        title: 'Dashboards',
    };

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
        return null;
    }
}

