
import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
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
        return (
            <ScrollView>
                <Image
                    source={require('../../../asset/logo/bank.jpg')}
                    styles={styles.backgroundImage}
                />
                <Image
                    source={require('../../../asset/logo/bank.jpg')}
                    styles={styles.backgroundImage}
                />
            </ScrollView>
        );
    }
}


const styles = {
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    }
};

