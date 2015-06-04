/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./app/components/main')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#111111'
  }
});

class myProject extends React.Component {
  render() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute= {{
          title: 'Github Notetaker',
          component: Main
        }} />
    );
  }
};

AppRegistry.registerComponent('myProject', () => myProject);
