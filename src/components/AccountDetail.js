import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';

const AccountDetail = ({ account }) => {
    const { name, balance, last_updated, logo } = account;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        balanceContainerStyle,
        lastUpdatedTextStyle,
        balanceTextStyle,
    } = styles;

    let icon = '';
    
    switch (logo) {
        case 'monzo.jpg':
        icon = require('../../asset/logo/monzo.jpg'); 
             break;
        case 'lloyds.jpg':
        icon = require('../../asset/logo/lloyds.jpg');
             break;
        default:
        icon = '';
    }

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={icon}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{name}</Text>
                    <Text style={lastUpdatedTextStyle}>Updated {last_updated}</Text>
                </View>
                <View style={balanceContainerStyle}>
                    <Text style={balanceTextStyle}>£{balance}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 15
    },
    lastUpdatedTextStyle: {
        fontSize: 11,
        color: '#808080'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    balanceContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    balanceTextStyle: {
        fontWeight: 'bold'
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AccountDetail;
