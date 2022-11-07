import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const TxtOptions = ({options = [], onChangeSelect, horizontal, selected}) => {
  return (
    <View style={horizontal? styles.horizontal : styles.vertical}>
      {options.map((item, i) => (
        <TouchableOpacity
         key={i}
         onPress={() => onChangeSelect(item, i)}
         style={[styles.btn, {backgroundColor: selected === i ? '#fa748f' : '#5d57ff'}]}
         >
          <Text style={styles.bntText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
// 
const styles =StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btn: {
    marginVertical: 15,
    width:150,
    height:60,
    marginHorizontal:20,
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius:50,
    backgroundColor: '#5d57ff'
  },
  bntText: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize:16,
    fontWeight: 'bold'
  }
})

export default TxtOptions;
