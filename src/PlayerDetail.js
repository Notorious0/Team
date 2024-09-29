// PlayerDetail.js
import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PlayerDetailStart from './PlayerDetailStart';

const PlayerDetail = ({ route }) => {
  const { player } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <PlayerDetailStart />
        <ImageBackground source={require('../assets/bg2jpg.jpg')} style={styles.imageBackground}>
          <Image source={{ uri: player.image }} style={styles.image} />
        </ImageBackground>
        <Text style={styles.text}>{player.formNumber} {player.playerName} {player.playerSurname}</Text>
        <View style={styles.rectangle}>
          <Text style={styles.leftText}>Ülke</Text>
          <Text style={styles.rightText}>{player.country}</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.leftText}>Height</Text>
          <Text style={styles.rightText}>{player.height}</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.leftText}>Pozisyon</Text>
          <Text style={styles.rightText}>{player.position}</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.leftText}>Birthday</Text>
          <Text style={styles.rightText}>{player.Birthday}</Text>
        </View>
      </View>
      <View style={styles.staticBorder}>
        <View style={styles.row}>
          <View style={styles.circleContainer}>
            <View style={styles.circle} >
            <Text style={styles.number}>{player.point}</Text>
           <Text style={styles.header}>SAYI</Text>     
            </View>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circle} >
            <Text style={styles.number}>{player.Rebound}</Text>
           <Text style={styles.header}>RIB</Text>     
            </View>
          </View>
          <View style={styles.circleContainer}>
          <View style={styles.circle} >
            <Text style={styles.number}>{player.assist}</Text>
           <Text style={styles.header}>AST</Text>     
            </View>
          </View>
        </View>
        
        <View style={styles.row}>
        <View style={styles.circleContainer}>
          <View style={styles.circle} >
            <Text style={styles.number}>{player.steal}</Text>
           <Text style={styles.header}>TÇ</Text>     
            </View>
          </View>
          <View style={styles.circleContainer}>
          <View style={styles.circle} >
            <Text style={styles.number}>{player.blok}</Text>
           <Text style={styles.header}>BLK</Text>     
            </View>
          </View>
          <View style={styles.circleContainer}>
          <View style={styles.circle} >
            <Text style={styles.number}>{player.productivity}</Text>
           <Text style={styles.header}>VER</Text>     
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageBackground: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 80,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  rectangle: {
    height: 50,
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#adb5bd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  leftText: {
    textAlign: 'left',
    fontSize: 20,
  },
  rightText: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
  },
  staticBorder: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 115,
    height: 115,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#00509d',
    justifyContent:"center",
    alignItems:"center",
    margin:5,
  },
  header:{
    fontSize:20,
    fontWeight:"bold",
    color:"#6c757d"
  },
  number:{
    fontWeight:"bold",
    fontSize:40,
    color:"#01161e"
  }
});

export default PlayerDetail;


