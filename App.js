import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';
import RegisterScreen from './screens/RegisterScreen';


const Navigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  Chat: ChatScreen,
},
{
  headerMode: "none"
});

export default createAppContainer(Navigator);