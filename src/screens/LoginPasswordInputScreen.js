import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import {BoxPasswordStrengthDisplay} from 'react-native-password-strength-meter';
import {Text, Icon, Input, Button, SocialIcon} from 'react-native-elements';

class LoginPasswordInputScreen extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTitle: '',
  };
  state = {
    password: '',
  };

  onChange = password => this.setState({password});
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
            <Text h4 style={{textAlign: 'center'}}>
              Now let's setup your password
            </Text>
          </View>
          <Input
            leftIcon={
              <Icon
                name="lock"
                color="#65499c"
                size={25}
              />
            }
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: 'white',
              borderLeftWidth: 0,
              height: 50,
              backgroundColor: 'white',
              marginBottom: 20,
            }}
            autoCapitalize="none"
            placeholder="Enter your Password"
            secureTextEntry={true}
            autoCorrect={false}
            returnKeyType="next"
            ref={input => (this.email2Input = input)}
            onChangeText={this.onChange}
          />
          <BoxPasswordStrengthDisplay password={this.state.password} />
          <View style={styles.btnWrapper}>
            <Button
              title="Continue"
              loading={false}
              loadingProps={{size: 'small', color: 'white'}}
              buttonStyle={{
                backgroundColor: '#f74639',
                borderRadius: 15,
              }}
              titleStyle={{fontWeight: 'bold', fontSize: 23}}
              containerStyle={{marginVertical: 10, height: 50, width: 300}}
              onPress={() =>
                this.props.navigation.navigate('TouchAuthentication')
              }
              underlayColor="transparent"
            />
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
export default LoginPasswordInputScreen;