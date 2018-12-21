import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Header from './common/Header';
import AccountDetail from './AccountDetail';
import Spinner from './common/Spinner';

export default class Accounts extends Component {
    state = { accounts: [] };

    componentWillMount() {
        const data = [
            {
                name: 'Monzo UK Current Account',
                balance: '£123.00',
                last_updated: '1 hour ago',
                logo: 'monzo.jpg'
            },
            {
                name: 'Lloyds Classic Current Account',
                balance: '£2.49',
                last_updated: 'just now',
                logo: 'lloyds.jpg'
            },
        ];
        this.setState({ accounts: data });
    }

    renderAccounts() {
        return this.state.accounts.map(account =>
            <AccountDetail key={account.name} account={account} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                <View>
                    <Header headerText={'Accounts'}>
                        <Spinner size="large" />
                    </Header>
                </View>
                {this.renderAccounts()}
            </ScrollView>
        );
    }
}

