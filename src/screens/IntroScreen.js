import color from 'color';
import React, { Component } from 'react';
import { View, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { Text, Icon, Image, Button } from 'react-native-elements';

class IntroScreen extends Component {

    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Icon color='#f74639' name='md-fitness-sharp' size={80} type='ionicon' />
                    <Text h4>Welcome to Fitness World</Text>
                    <Text h5 style={{ textAlign: 'center' }}>Track workout and best meal Mlanner</Text>
                    <Image
                        style={{ width: 380, height: 300 }}
                        source={require('../assets/images/onboard.jpg')}
                        resizeMode={'cover'} // cover or contain its upto you view look
                    />
                </View>
                <View style={styles.btnView}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Signup')}
                        title="Get Stareted"
                        loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{ backgroundColor: '#f74639', borderRadius: 4 }}
                        containerStyle={{ marginVertical: 10, height: 50, width: 300 }}
                    />
                    <Text h6 style={{ textAlign: 'center', color: 'grey' }}>
                        Already have an account?
          </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{fontSize: 20,fontFamily:'cochin', textAlign: 'center', color: '#65499c' }}>
                            Sign in
            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    headerContainer: {
        top: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    },
    btnView: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default IntroScreen;