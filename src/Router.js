import React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Acc from './components/Account/index';
import Dashboard from './components/Dashboard/index';


const BottomNavigator = createBottomTabNavigator({
    Home: {
        screen: Dashboard,
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
