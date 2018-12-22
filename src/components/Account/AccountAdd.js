import React, { Component } from 'react';
import { ScrollView } from 'react-native';
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

    renderPopularBanks() {
        return this.state.banks.map(bank =>
            <BankDetail key={bank.name} bank={bank} />
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
};
