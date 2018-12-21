
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Header from './common/Header';
import AccountDetail from './AccountDetail';
import Spinner from './common/Spinner';
import Button from './common/Button';

export default class Accounts extends Component {
    state = { accounts: [], loading: false };

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
                last_updated: '1 hour ago',
                logo: 'lloyds.jpg'
            },
        ];
        this.setState({ accounts: data });
    }

    onSyncButtonPress() {
        const latestData = [
            {
                name: 'Monzo UK Current Account',
                balance: '£123.00',
                last_updated: 'just now',
                logo: 'monzo.jpg'
            },
            {
                name: 'Lloyds Classic Current Account',
                balance: '£12879.49',
                last_updated: 'just now',
                logo: 'lloyds.jpg'
            },
        ];
        this.setState({ loading: true });
        sleep(3000).then(() => {
            this.setState({ accounts: latestData, loading: false });
        });
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
            <Button onPress={this.onSyncButtonPress.bind(this)}>
                Sync
            </Button>
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                <View>
                    <Header headerText={'Accounts'}>
                        {this.renderButton()}
                    </Header>
                </View>
                {this.renderAccounts()}
            </ScrollView>
        );
    }
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

