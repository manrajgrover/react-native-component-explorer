/*
* @Author: Manraj Singh
* @Date:   2016-04-27 22:37:58
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-28 01:43:58
*/

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Navigator,
  BackAndroid
} from 'react-native';

import Root from './root';
import Maps from './maps';

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

class uiexp extends Component {
  renderScene(route, navigator){
    _navigator = navigator;
    switch (route.name) {
      case 'root':
        return (<Root navigator={navigator} />);
      case 'maps':
        return ( <Maps navigator={navigator} />);
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Navigator
          initialRoute={{name:'root'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('uiexp', () => uiexp);