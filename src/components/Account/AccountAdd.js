import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView, View, TouchableOpacity, Text, Linking } from 'react-native';
import BankDetail from '../Bank/BankDetail';


export default class AccountAdd extends Component {
    static navigationOptions = {
        title: 'Choose Account',
    };

    state = { banks: [] };

    componentWillMount() {
        const data = [
            {
                name: 'UOB Bank',
                logo: 'uob.jpg'
            },
            {
                name: 'DBS Bank',
                logo: 'dbs.jpg'
            },
            {
                name: 'Citi Bank',
                logo: 'citibank.jpg'
            },
            {
                name: 'OCBC Bank',
                logo: 'ocbc.jpg'
            }
        ];
        this.setState({ banks: data });
    }

    onAddBankButtonPress() {
        console.log('Hi');
        // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        //     .then(response => console.log(response.data));
    }

    renderPopularBanks() {
        const base64 = require('base-64');
        const utf8 = require('utf8');

        const clientIDBytes = utf8.encode('24fbf817-828a-4619-8d17-5302e5c2ce67');
        // const clientID = base64.encode(clientIDBytes);
        const clientID = '24fbf817-828a-4619-8d17-5302e5c2ce67';

        const redirectURI = 'https://fb4016af.ngrok.io/callback';

        const url = `https://www.dbs.com/sandbox/api/sg/v1/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=Read&response_type=code&state=0399`;
        console.log(url);
        return this.state.banks.map(bank =>
            <BankDetail key={bank.name} bank={bank} >
                <View style={styles.addBankButtonContainerStyle}>
                    <TouchableOpacity
                        style={styles.addBankButtonStyle}
                        // onPress={() => alert(bank.name)}
                        onPress={() => Linking.openURL(url)}
                    >
                        <Text style={styles.buttonTextStyle}>ADD</Text>
                    </TouchableOpacity>
                </View>
            </ BankDetail>
        );
    }

    render() {
        return (
            <ScrollView styles={styles.viewContainerStyle}>
                {this.renderPopularBanks()}
            </ScrollView>
        );
    }
}

const styles = {
    viewContainerStyle: {
        flex: 1,
        backgroundColor: '#F0F8FF',
    },
    addBankButtonContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    addBankButtonStyle: {
        // flex: 1,
        height: 35,
        width: 60,
        // alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 12,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};
