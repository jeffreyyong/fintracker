import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SyncButton = ({ onPress }) => {
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
    }
};

export default SyncButton;

