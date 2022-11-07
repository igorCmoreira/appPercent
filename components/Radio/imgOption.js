import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';


const ImgOptions = ({options = [], onChangeSelectImg, horizontal, selected}) => {
  return (
    <View style={horizontal? styles.horizontal : styles.vertical}>
      {options.map((item, i) => (
        <TouchableOpacity
         key={item.value}
         onPress={() => onChangeSelectImg(item, i)}
         style={[styles.btn, {borderColor: selected === i ? '#fa748f' : '#5d57ff'}]}
         >
          <Image
            source={item.uri}
            style={styles.bntImg}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles =StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btn: {
    marginVertical: 20,
    width:80,
    height:80,
    marginHorizontal:10,
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius:100,
    borderWidth: 4,

  },
  bntImg: {
    width:50,
    height:50,
    resizeMode:'stretch'
  }
})
export default ImgOptions;
