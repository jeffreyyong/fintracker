import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator
                size={size}
                color='#00ff00'
                animating
            />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 20,
        paddingRight: 20
    }
};

export default Spinner;
