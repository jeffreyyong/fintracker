import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator
                size={size}
                color='#01a699'
                animating
            />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 24,
        paddingRight: 10,
    }
};

export default Spinner;
