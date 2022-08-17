import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>

     <Image style={{height:200, width: 300}}
        source={ require('./img/thumb.jpeg') }
     />

      <View style={styles.login}>
            <Text style={styles.header}> Login </Text>

            <TextInput style={styles.input}
                placeholder="Username"
            />
            <TextInput style={styles.input}
               secureTextEntry={true}
               placeholder="Password"
            />
            <Text style={styles.forgot}> Forgot Your Password </Text>

              <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                 <Text style={styles.text1}>Button</Text>
               </TouchableOpacity>




          </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {

      marginTop: 20,
      margin: 8,
      borderLeftWidth: 1,
      borderTopWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderTopColor: 'black',
      borderBottomEndRadius : 8,
      borderTopStartRadius: 8,
      borderTopEndRadius: 8,
      borderBottomStartRadius: 8,
      borderBottomLeftRadius:8,
      borderBottomRightRadius:8,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 2,
      elevation: 2,
      width: 380,
      height: 420,
      backgroundColor: '#ccccff',
  },

  input:{

     width: 300,
     height: 50,
     color: '#000000',
     fontSize: 24,
     marginLeft: 40,
     backgroundColor: 'transparent',
     borderTopColor: 'red',
     marginTop:30,
     borderBottomWidth: 2,
     borderTopColor: 'black',
     outlineStyle: 'none'
  },

  header:{

    textAlign: 'center',
    color: '#000',
    fontSize: 30,
    marginTop: 30,
    backgroundColor: 'transparent',
    marginBottom: 10,
    marginBottomColor: '#ccccff',
    fontStyle: 'arial',
    fontWeight: 'bold',
  },

  forgot:{

    color: 'blue',
    marginTop: 10,
    textAlign: 'right',
    marginRight: 40,
    marginBottom:50
  },

 button: {
        alignSelf: 'center',
        backgroundColor: 'blue',
        width: 100,
        height: 40,
        color: 'black',
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,
  },

  text: {
    fontSize: 24,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },


  text1: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});
