import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Home';

export default createStackNavigator({
    Home: HomeScreen, 
}, {
    initialRouteName: 'Home',
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
