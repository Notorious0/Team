// PlayerStart.js
import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

const PlayerStart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.start}>
        <Image 
          source={require('../assets/Fenerbahçe_Logo.png')} 
          style={styles.image} 
          resizeMode='contain' 
        />
        <Text style={styles.text}>Oyuncularımız</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    width: 400,
    height: 70,
    backgroundColor: 'rgb(0,45,114)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft:15
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'rgb(255,237,0)',
    marginTop:25,
  },
  image: {
    width: 40,
    height: 40,
    marginTop:25,
  },
});

export default PlayerStart;

