import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

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
        imageStyle
    } = styles;
    // console.log(logo);
    let testing = '';

    switch (logo) {
        case 'monzo.jpg':
             testing = require('../../asset/logo/monzo.jpg'); 
             break;
        case 'lloyds.jpg':
             testing = require('../../asset/logo/lloyds.jpg');
             break;
    }

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={testing}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{name}</Text>
                    <Text style={lastUpdatedTextStyle}>Updated {last_updated}</Text>
                </View>
                <View style={balanceContainerStyle}>
                    <Text style={balanceTextStyle}>{balance}</Text>
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
        fontSize: 11
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
