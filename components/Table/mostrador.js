import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Mostrador = ({options=[]}) => {
  return (
    <View style={styles.horizontal}>
      {options.map((item, i)=> (
        <View key={i} style={styles.contentBox}>
          <Text style={styles.titleText}>
            -{item.name}:
          </Text>
          <Text style={styles.priceText}>
            R${item.value}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles =StyleSheet.create({
  horizontal:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap:'wrap'
  },
  contentBox:{
    width:170,
    height:70,
    borderColor: '#fa748f',
    borderWidth: 4,
    marginVertical: 15,
    marginHorizontal:5,
    borderRadius: 10,
  },
  priceText: {
    textTransform: 'uppercase',
    color: '#5d57ff',
    fontSize:30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  titleText:{
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
})

export default Mostrador;
