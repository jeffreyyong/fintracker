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
                    <Text style={totalBalanceTextStyle}>{balance}</Text>
                </View>
            </CardSection>
        </TopCard>

    );
};

const styles = {
    balanceContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10
    },
    accountContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 10
    },
    accountTypeTextStyle: {
        fontSize: 15,
        fontWeight: '700',
        textShadowColor: '#d3d3d3',
        color: '#a9a9a9'
    },
    totalBalanceTextStyle: {
        fontSize: 15,
        fontWeight: '700',
        textShadowColor: '#d3d3d3',
        color: '#a9a9a9'
    },
};

export default CurrentAccountBalance;
