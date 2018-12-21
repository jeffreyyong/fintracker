import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle, textContainerStyle } = styles;
    return (
        <View style={viewStyle}>
            <View style={textContainerStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
            {props.children}
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#191970',
        height: 80,
        paddingTop: 40,
        paddingBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F8F8F8'
    },
};

export default Header;
