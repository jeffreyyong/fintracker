import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';

const BankDetail = ({ bank, children }) => {
    const { name, logo } = bank;

    const {
        thumbnailStyle,
        thumbnailContainerStyle,
        bankNameContainerStyle,
        bankNameTextStyle,
    } = styles;

    let icon = '';
    switch (logo) {
        case 'uob.jpg':
            icon = require('../../../asset/logo/uob.jpg');
            break;
        case 'dbs.jpg':
            icon = require('../../../asset/logo/dbs.jpg');
            break;
        case 'citibank.jpg':
            icon = require('../../../asset/logo/citibank.jpg');
            break;
        case 'ocbc.jpg':
            icon = require('../../../asset/logo/ocbc.jpg');
            break;
        default:
            icon = '';
    }
    // onAddButtonPress(name) {

    // }

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={icon}
                    />
                </View>
                <View style={bankNameContainerStyle}>
                    <Text style={bankNameTextStyle}>{name}</Text>
                </View>
                {children}
            </CardSection>
        </Card>

    );
};


const styles = {
    thumbnailStyle: {
        height: 70,
        width: 70,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    bankNameContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 30
    },
    bankNameTextStyle: {
        fontWeight: '500'
    },
};

export default BankDetail;
