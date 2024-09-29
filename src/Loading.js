import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Image, Text } from 'react-native';

const Loading = () => {
  const [dots, setDots] = useState('');
  const maxDots = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= maxDots ? '' : prevDots + '.'));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.image} />
      <Text style={styles.loading}>Loading {dots}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0,45,114)',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  loading: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'rgb(255,237,0)',
    marginTop: 20,
  },
});

export default Loading;
