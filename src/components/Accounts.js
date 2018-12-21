
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Header from './common/Header';
import AccountDetail from './AccountDetail';
import Spinner from './common/Spinner';
import SyncButton from './common/SyncButton';
import Button from './common/Button';
import CurrentAccountBalance from './CurrentAccountBalance';

export default class Accounts extends Component {
    state = { accounts: [], loading: false };

    componentWillMount() {
        const data = [
            {
                name: 'Monzo UK Current Account',
                balance: 123.00,
                last_updated: '1 hour ago',
                logo: 'monzo.jpg'
            },
            {
                name: 'Lloyds Classic Current Account',
                balance: 2.49,
                last_updated: '1 hour ago',
                logo: 'lloyds.jpg'
            },
        ];
        this.setState({ accounts: data });
    }

    onAddOrCustomiseAccountsPress() {
        console.log('Pressed');
    }

    onSyncButtonPress() {
        const latestData = [
            {
                name: 'Monzo UK Current Account',
                balance: 123.00,
                last_updated: 'just now',
                logo: 'monzo.jpg'
            },
            {
                name: 'Lloyds Classic Current Account',
                balance: 2879.49,
                last_updated: 'just now',
                logo: 'lloyds.jpg'
            },
        ];
        this.setState({ loading: true });
        sleep(3000).then(() => {
            this.setState({ accounts: latestData, loading: false });
        });
    }

    calculateTotalBalance() {
        return this.state.accounts.reduce((accumulator, account) =>
            accumulator + account.balance, 0
        );
    }

    renderAccounts() {
        return this.state.accounts.map(account =>
            <AccountDetail key={account.name} account={account} />
        );
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="large" />;
        }

        return (
            <SyncButton onPress={this.onSyncButtonPress.bind(this)} />
        );
    }


    render() {
        console.log(this.state);
        return (
            <ScrollView style={styles.viewContainerStyle}>
                <View>
                    <Header headerText={'Accounts'}>
                        {this.renderButton()}
                    </Header>
                </View>
                <CurrentAccountBalance balance={this.calculateTotalBalance()} />
                {this.renderAccounts()}
                <View style={styles.addOrCustomiseAccountsContainerStyle}>
                    <Button onPress={this.onAddOrCustomiseAccountsPress.bind(this)}>
                        Add or customise accounts
                    </Button>
                </View>
            </ScrollView>
        );
    }
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const styles = {
    addOrCustomiseAccountsContainerStyle: {
        marginTop: 200,
    },
    viewContainerStyle: {
        flex: 1,
        backgroundColor: '#F0F8FF',    
    },
};
