
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AccountDetail from './AccountDetail';
import Spinner from '../common/Spinner';
import SyncButton from '../common/SyncButton';
import CurrentAccountBalance from './CurrentAccountBalance';
import Button from '../common/Button';

export default class Accounts extends Component {
    static navigationOptions = {
        title: 'Accounts',
    };

    state = { accounts: [], loading: false, isModalVisible: false };


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
        this.props.navigation.navigate('AccountAdd');
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
        sleep(2000).then(() => {
            this.setState({ accounts: latestData, loading: false });
        });
    }

    calculateTotalBalance() {
        return this.state.accounts.reduce((accumulator, account) =>
            accumulator + account.balance, 0
        );
    }

    toggleModal() {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    renderAccounts() {
        return this.state.accounts.map(account =>
            <AccountDetail key={account.name} account={account} />
        );
    }

    renderSyncButton() {
        if (this.state.loading) {
            return <Spinner size='small' />;
        }

        return (
            <SyncButton onPress={this.onSyncButtonPress.bind(this)} />
        );
    }


    render() {
        return (
            <ScrollView style={styles.viewContainerStyle}>
                <CurrentAccountBalance balance={this.calculateTotalBalance()}>
                    {this.renderSyncButton()}
                </CurrentAccountBalance>
                {this.renderAccounts()}
                <Button onPress={this.onAddOrCustomiseAccountsPress.bind(this)}>
                    Add or customise accounts
                </Button>
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
