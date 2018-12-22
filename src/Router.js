import React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Accounts from './components/Account/Accounts';
import Acc from './components/Account/index';
import Home from './components/Home';


const BottomNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: () => (
                <Icon name='home' size={26} />
            )
        }
    },
    Accounts: {
        screen: Acc,
        navigationOptions: {
            tabBarLabel: 'Accounts',
            tabBarIcon: () => (
                <Icon name='book' size={26} />
            )
        }
    },
});

const AppContainer = createAppContainer(BottomNavigator);
export default AppContainer;

// export default createAppContainer(BottomNavigator);
