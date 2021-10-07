import React, {Component} from 'react';
import { 
  AppRegistry,
  StyleSheet,
  View, 
  Text,
  
} from 'react-native';


import Header from './app/components/Header';

export default class Mobile extends Component{

  render(){

    return(
      <View style={styles.container}>
         <Header/>
         
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#000',
    },
});

AppRegistry.registerComponent('Mobile',()=> Mobile);


      