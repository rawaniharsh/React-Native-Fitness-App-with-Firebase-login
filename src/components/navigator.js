import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import EmailInputScreen from '../screens/EmailInputScreen';
import IntroScreen from '../screens/IntroScreen';
import LoginScreen from '../screens/LoginScreen';
import PasswordInputScreen from '../screens/PasswordInputScreen';

const StackNavigator = createStackNavigator({
    Intro: IntroScreen,
    Login: LoginScreen,
    EmailInput: EmailInputScreen,
    PasswordInput: PasswordInputScreen,
});

export default createAppContainer(StackNavigator);