import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Text, Icon, Button, SocialIcon, Image } from 'react-native-elements';

class EmailInputScreen extends Component {

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
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Email"
                            placeholderTextColor="#65499c"
                            autoCapitalize="none" />

                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Password"
                            placeholderTextColor="#65499c"
                            autoCapitalize="none" />
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
                        <Text style={{ color: '#65499c', fontSize: 16 }}>Sign in with</Text>
                        <View style={styles.socialLogin}>
                            <SocialIcon type="facebook" />
                            <SocialIcon type="google" />
                        </View>
                        <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('ForgotPassword')}
                        style={{marginTop: 20}}
                        >
                            <Text style={{ color: '#65499c', fontSize: 16 }}>Forgot Password?</Text>
                        </TouchableOpacity>
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

export default EmailInputScreen;