/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  NativeModules,
  requireNativeComponent,
} from 'react-native';

import Home from './App/Home'
import list from './App/list'

var MCFileWriterUtil = NativeModules.MCFileWriterUtil;
var CalendarManager = NativeModules.CalendarManager;
// var AceMapManager = NativeModules.AceMapManager;
var AceMapManager = requireNativeComponent('AceMapManager', null);
var MyCustomView = requireNativeComponent('MyCustomView', null);


class MyProject2 extends Component {


  componentDidMount() {
    // MCFileWriterUtil.helloTest('Ace')
    // CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
    // console.log('NativeModules: '+NativeModules.AceMapView)
  }

  

  render() {
    return (
    	<NavigatorIOS
    	  style={{flex: 1}}
    	  initialRoute={{
    	    title: '今日新闻',
    	    component: list
    	  }} />
    );
  }
}



class MyProject extends Component {
  render() {
    return (
      <MyCustomView style={styles.container} />
    );
  }
}


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  container:{
    // padding:30,
    // marginTop:0,
    // borderColor:'#e7e7e7',
    marginTop:100,
    flex: 1,
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
