import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

export const MatchesBox = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ImageBackground
          source={require('../assets/bg4jpg.jpg')}
          style={styles.background}
          imageStyle={{ borderRadius: 10 }} 
        >
          <View style={styles.contentWrapper}>
            <View style={styles.leftBox}>
              <View style={styles.team}>
                <Image source={{ uri: props.homeim }} style={styles.logo} resizeMode="contain" />
                <Text style={styles.teamText}>{props.home}</Text>
              </View>
              <View style={styles.team}>
                <Image source={{ uri: props.awayim }} style={styles.logo} resizeMode="contain" />
                <Text style={styles.teamText}>{props.away}</Text>
              </View>
            </View>
            <View style={styles.rightBox}>
              <Text style={styles.text}>{props.date}</Text>
              <Text style={styles.text}>{props.time}</Text>
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
    width: '100%',
    marginBottom: 10,
  },
  box: {
    width: 350,
    height: 130,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(0,45,114)',
    marginTop:10,
    marginRight:35,
  },
  background: {
    flex: 1,
    resizeMode: "contain",
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row', 
  },
  leftBox: {
    flex: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  rightBox: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    margin: 5,
    color: "#495057"
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    color: "#495057"
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default MatchesBox;




