import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React from 'react'
import * as DevMenu from "expo-dev-menu";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCApdvqPyVbnY87GVos6MgmJNcWOe3mT3o",
  authDomain: "honra-fgi-peac.firebaseapp.com",
  projectId: "honra-fgi-peac",
  storageBucket: "honra-fgi-peac.appspot.com",
  messagingSenderId: "573020256731",
  appId: "1:573020256731:web:73c8062174b3727ca44ffe",
  measurementId: "G-408MEE0092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  enthusiasmLevel: number;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    if ((props.enthusiasmLevel || 0) <= 0) {
      throw new Error(
        'You could be a little more enthusiastic. :D'
      );
    }

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1
    };
  }

  onIncrement = () =>
    this.setState({
      enthusiasmLevel: this.state.enthusiasmLevel + 1
    });
  onDecrement = () =>
    this.setState({
      enthusiasmLevel: this.state.enthusiasmLevel - 1
    });
  getExclamationMarks = (numChars: number) =>
    Array(numChars + 1).join('!');

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello{' '}
          {this.props.name +
            this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold'
  }
});