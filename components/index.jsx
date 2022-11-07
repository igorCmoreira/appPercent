import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const Index = ({navigation}) => {
  return (
    <View style={styles.init}>
      <TouchableOpacity style={styles.btnINIt} onPress={()=> navigation.navigate('Work')}>
          <Text style={styles.bntTextB}>
            INICIAR
          </Text>
        </TouchableOpacity>
        <Text>
          CMD beta 0.0.1
        </Text>
    </View>
  );
};

const styles =StyleSheet.create({
  init: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical:0,
  },
  btnINIt: {
    marginVertical:50,
    width:300,
    height:60,
    marginHorizontal:5,
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius:20,
    borderColor: '#5d57ff',
    backgroundColor: '#fff',
    borderWidth: 2,
  },
  bntTextB: {
    textTransform: 'uppercase',
    color: '#5d57ff',
    fontSize:20,
    fontWeight: 'bold'
  }
})

export default Index;