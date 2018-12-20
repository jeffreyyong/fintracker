import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Header from './common/Header';
import AccountDetail from './AccountDetail';

export default class Accounts extends Component {
    state = { accounts: [] };

    componentWillMount() {
        const data = [
            {
                name: 'Monzo UK Current Account',
                balance: '£123.00',
                last_updated: '1 hour ago',
                logo: '../../asset/logo/monzo.jpg'
            },
            {
                name: 'Lloyds Classic Current Account',
                balance: '£2.49',
                last_updated: 'just now',
                logo: '../../asset/logo/lloyds.jpg)'
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
                <Header headerText={'Accounts'} />
                {this.renderAccounts()}
            </ScrollView>
        );
    }
}

