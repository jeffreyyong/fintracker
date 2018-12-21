import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Button from './Button';


const ModalPicker = ({ onPress, isModalVisible }) => {
    
    return (
        <View style={{ flex: 1 }}>
            <Button onPress={onPress}>
                <Text>Show Modal</Text>
            </Button>
            <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                    <Button onPress={onPress}>
                        <Text>Hide me!</Text>
                    </Button>
                </View>
            </Modal>
        </View>
    );
};

export default ModalPicker;
