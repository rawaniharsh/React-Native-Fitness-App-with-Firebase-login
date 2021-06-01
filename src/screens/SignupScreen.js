import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Text, Icon, Button, SocialIcon, Image, Input } from 'react-native-elements';

class SignupScreen extends Component {

    static navigationOptions = {
        headerShown: false
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='always'>
                    <View style={styles.topImg} >
                        <Image
                            style={{ width: 300, height: 170 }}
                            source={require('../assets/images/loginPage.jpeg')}
                            resizeMethod={'auto'}
                        />
                    </View>
                    <View style={styles.wrapper}>
                        <Input
                            leftIcon={<Icon
                                name="email"
                                color="#65499c"
                                size={22}
                            />}
                            placeholder="Email"
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderColor: "#65499c",
                                height: 50,
                                borderRadius: 4,
                                backgroundColor: '#ffff'
                            }}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            returnKeyType="next"
                            ref={input => (this.email2input = input)}
                            onSubmitEditing={() => {
                                this.passwordInput2.focus();
                            }}
                        />

                        <Input
                            leftIcon={
                                <Icon
                                    name="lock"
                                    color="#65499c"
                                    size={22}
                                />
                            }
                            inputContainerStyle={{
                                borderWidth: 1,
                                borderColor: '#65499c',
                                borderRadius: 4,
                                height: 50,
                                backgroundColor: 'white',
                                marginBottom: 20,
                            }}
                            autoCapitalize="none"
                            placeholder="Password"
                            secureTextEntry={true}
                            autoCorrect={false}
                            returnKeyType="next"
                            ref={input => (this.email2Input = input)}
                            onChangeText={this.onChange}
                        />
                    </View>

                    <View>
                        <Button
                            onPress={() => console.log('Button pressed')}
                            title="Submit"
                            loading={false}
                            loadingProps={{ size: 'small', color: 'white' }}
                            buttonStyle={{ backgroundColor: '#f74639', borderRadius: 4 }}
                            containerStyle={{ marginVertical: 30, height: 50, width: 200, marginLeft: 59 }}
                        />
                    </View>
                    <View style={styles.socialWrapper}>
                        <Text style={{ color: '#65499c', fontSize: 16 }}>Sign up with</Text>
                        <View style={styles.socialLogin}>
                            <SocialIcon type="facebook" />
                            <SocialIcon type="google" />
                        </View>
                    </View>
                </ScrollView>

            </KeyboardAvoidingView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        height: '100%',
        alignItems: 'center'
    },
    topImg: {
        marginTop: 70
    },
    wrapper: {
        marginTop: 50
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#65499c',
        borderWidth: 1,
        width: 300,
        borderRadius: 4
    },
    socialWrapper: {
        alignItems: 'center'
    },
    socialLogin: {
        flexDirection: 'row'
    }
})

export default SignupScreen;