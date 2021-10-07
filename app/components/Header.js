import React, {Component} from 'react';
import { 
  AppRegistry,
  StyleSheet,
  View, 
  Text,
  Image,
  ImageBackground,

} from 'react-native';
export default class Mobile extends Component{
  render(){
    return(
      <ImageBackground style={styles.headerBackground} source={require('../img/headerbg.png')}>
          <View style={styles.header}>
              <View style={styles.perfiljoWrap}>
                  <Image style={styles.perfiljo} source={require('../img/perfiljo.png')}/>   
              </View>

              <Text style={styles.pos}> Olá, Jocelyne!</Text>
              <Text style={styles.pos} >jocelyne.botshimbo@g.globo</Text>
              <Text style={styles.pos}>  ---- </Text>
              <Text  style= {styles.name}> - Feed de Insights - </Text>
          </View>
    </ImageBackground>
    ) 
  }
}
const styles = StyleSheet.create({
  headerBackground:{

      flex: 0.6,
      width: null,
      alignSelf: 'stretch',
  },
  header: {
      flex: 1,
      alignItems:"center",
      justifyContent:"flex-start",
      padding: 85,
      
  },

  perfiljoWrap:{
      width: 100,
      height: 100,
      borderRadius: 100,
      borderColor: '#ED4D77',
      borderWidth: 6,
      
  },

  perfiljo:{
      flex: 1,
      width: null,
      alignSelf: 'stretch',
      borderRadius: 100,

  },

  
  name:{
      marginTop: 21,
      fontSize: 16,
      color: '#ED4D77',
      fontWeight: 'bold',
  },
  pos:{
      fontSize: 14,
      color: 'white',
      fontWeight: '400',
      fontStyle: 'italic',

  },
});
