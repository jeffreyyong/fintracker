import React from 'react';
import { View } from 'react-native';

const TopCard = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
    }
};

export default TopCard;
