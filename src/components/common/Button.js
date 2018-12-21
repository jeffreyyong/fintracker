import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <View style={buttonStyle}>
            <TouchableOpacity onPress={onPress}>
                <Text style={textStyle}>
                    {children}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    textStyle: {
        // alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 10,
        paddingRight: 20,
        // flex: 1,
        alignSelf: 'flex-end',
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end',
        // paddingBottom: 20,
        // paddingRight: 20,
        backgroundColor: '#fff',
        // borderRadius: 5,
        // borderWidth: 1,
        borderColor: '#007aff',
        // marginLeft: 5,
        // marginRight: 5
    }
};

export default Button;

