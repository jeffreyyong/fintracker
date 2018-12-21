import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Button = ({ onPress, children }) => {
    const { buttonStyle } = styles;

    return (
        <View style={buttonStyle}>
            <TouchableOpacity onPress={onPress}>
                <Icon name='sync-alt' size={20} color='#01a699' />
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    buttonStyle: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        left: 0,
        right: 0,
        top: 0,
        bottom: 14,
        position: 'absolute',
        marginRight: 20
    }
};

export default Button;

