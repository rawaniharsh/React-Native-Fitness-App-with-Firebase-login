import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Text, Icon, Input, Button, SocialIcon } from 'react-native-elements';

class LoginEmailScreen extends Component {
    static navigationOptions = {
        headerShown: false,
    };
    render() {
        return (
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 84}>
                <ScrollView
                    style={styles.container}
                    keyboardShouldPersistTaps="handled">
                    <View style={styles.headerContainer}>
                        <Icon name="fitness-sharp" size={80} type="ionicon" color={'#f74639'} />
                        <Text h4 style={{ textAlign: 'center' }}>What is your E-mail address?</Text>
                    </View>
                    <Input 
                    leftIcon={<Icon 
                    name="email"
                    color="#65499c"
                    size={22}
                    />}
                    placeholder="Enter your email"
                    inputContainerStyle={{
                        borderWidth:1,
                        borderColor:"#ffff",
                        borderLeftWidth: 0,
                        height: 50,
                        marginBottom: 30,
                        backgroundColor: '#ffff'
                    }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    ref={input=>(this.email2input=input)}
                    onSubmitEditing={()=>{
                        this.passwordInput2.focus();
                    }}
                    />
                    <View style={styles.btnWrapper}>
                        <Button
                            title="Continue"
                            loading={false}
                            loadingProps={{ size: 'small', color: 'white' }}
                            buttonStyle={{
                                backgroundColor: '#f74639',
                                borderRadius: 15,
                            }}
                            titleStyle={{ fontSize: 20 }}
                            containerStyle={{ marginVertical: 10, height: 50, width: 300 }}
                            onPress={() => this.props.navigation.navigate('LoginPasswordInput')}
                            underlayColor="transparent"
                        />
                    </View>
                    <View style={styles.socialWrapper}>
                        <Text style={{ color: '#65499c', fontSize: 16 }}>Sign in with</Text>
                        <View style={styles.socialLogin}>
                            <SocialIcon type="facebook" />
                            <SocialIcon type="google" />
                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ForgotPassword')}
                            style={{ marginTop: 20 }}
                        >
                            <Text style={{ color: '#65499c', fontSize: 16 }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F6FA',
        height: '100%',
    },
    headerContainer: {
        top: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
    btnWrapper: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialWrapper: {
        alignItems: 'center'
    },
    socialLogin: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentView: {
        // marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainerStyle: {
        marginTop: 16,
        width: '90%',
    },
    keyboardAvoidingView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
export default LoginEmailScreen;