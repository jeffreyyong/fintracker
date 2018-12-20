import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Header from './common/Header';
import AccountDetail from './AccountDetail';

export default class Accounts extends Component {
    state = { accounts: [] };

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

