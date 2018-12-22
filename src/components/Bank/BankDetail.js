import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';

const BankDetail = ({ bank }) => {
    const { name, logo } = bank;

    const {
        thumbnailStyle,
        thumbnailContainerStyle,
        bankNameContainerStyle,
        bankNameTextStyle,
        addBankButtonContainerStyle,
        buttonTextStyle,
        addBankButtonStyle,
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
                <View style={addBankButtonContainerStyle}>
                    <TouchableOpacity 
                        style={addBankButtonStyle} 
                        onPress={() => alert(name)}
                    >
                        <Text style={buttonTextStyle}>ADD</Text>
                    </TouchableOpacity>
                </View>
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
    addBankButtonContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    addBankButtonStyle: {
        // flex: 1,
        height: 35,
        width: 60,
        // alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 12,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default BankDetail;
