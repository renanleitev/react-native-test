import React, {Component} from 'react';
import {Alert, Button, StyleSheet, View, ScrollView, Text, Image} from 'react-native';

export default class Testando extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }
 
  render() {
    return (
      <ScrollView>
        <Text style={styles.qualquer}>Um texto qualquer</Text>
        <Image style={{width: 300, height: 300}} source={{uri: 'https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1-1280x720.jpg'}}/>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressButton} title="Press" />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
              color="#841584"
            />
          </View>
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button onPress={this._onPressButton} title="This looks great!" />
            <Button onPress={this._onPressButton} title="OK!" color="#841584" />
          </View>
          <View style={styles.colorsContainer}>
            <Text style={styles.red}>just red</Text>
            <Text style={styles.bigBlue}>just bigBlue</Text>
            <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
            <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorsContainer: {
      marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  qualquer: {
    marginTop: 50,
    fontSize: 30,
  }
});