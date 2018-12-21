import { View, Text } from 'react-native';
import React from 'react';
import TopCard from './common/TopCard';
import CardSection from './common/CardSection';

const CurrentAccountBalance = ({ balance }) => {
    const {
        balanceContainerStyle,
        accountTypeTextStyle,
        totalBalanceTextStyle,
        accountContainerStyle,
    } = styles;
    return (       
        <TopCard>
            <CardSection>
                <View style={accountContainerStyle}>
                    <Text style={accountTypeTextStyle}>Current Accounts</Text>
                </View>
                <View style={balanceContainerStyle}>
                    <Text style={totalBalanceTextStyle}>£{balance}</Text>
                </View>
            </CardSection>
        </TopCard>

    );
};

const styles = {
    balanceContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 5
    },
    accountContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 24
    },
    accountTypeTextStyle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#696969'
    },
    totalBalanceTextStyle: {
        fontSize: 15,
        fontWeight: '700',
        textShadowColor: '#d3d3d3',
        color: '#20B2AA'
    },
};

export default CurrentAccountBalance;
