import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

export const PlayerBox = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ImageBackground
          source={require('../assets/bg.jpg')}
          style={styles.background}
        >
          <View style={styles.content}>
            <Image source={{ uri: props.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.number}>{props.number}</Text>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.surname}>{props.surname}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
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
  box: {
    width: 380,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'yellow',
    margin: 10,
    marginRight:10,
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#6c757d",
    marginRight: 15,
    minWidth:30,
    textAlign:"center",
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#6c757d",
  },
  surname: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#6c757d",
  },
});

export default PlayerBox;

