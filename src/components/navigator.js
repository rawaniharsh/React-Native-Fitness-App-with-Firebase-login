import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignupScreen from '../screens/SignupScreen';
import IntroScreen from '../screens/IntroScreen';
import LoginEmailScreen from '../screens/LoginEmailInputScreen';
import LoginPasswordInputScreen from '../screens/LoginPasswordInputScreen'
import PasswordInputScreen from '../screens/PasswordInputScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const StackNavigator = createStackNavigator({
    Intro: IntroScreen,
    Login: LoginEmailScreen,
    Signup: SignupScreen,
    PasswordInput: PasswordInputScreen,
    ForgotPassword: ForgotPasswordScreen,
    LoginPasswordInput: LoginPasswordInputScreen
});

export default createAppContainer(StackNavigator);