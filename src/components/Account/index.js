import { createStackNavigator } from 'react-navigation';
import AccountsScreen from './Accounts';
import AccountAddScreen from './AccountAdd';

export default createStackNavigator({
    Accounts: AccountsScreen,
    AccountAdd: AccountAddScreen,
}, {
    initialRouteName: 'Accounts',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#00cc88',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});
