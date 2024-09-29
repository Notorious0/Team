import React from 'react';
import { View, StyleSheet,Image,Text,Linking,TouchableOpacity,StatusBar} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const More = () => {
  const openTwitter = () => {
    Linking.openURL('https://twitter.com/FBBasketbol?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor');
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgb(0,45,114)" barStyle="light-content" />
      <Text style={styles.header}> Diğer Sosyal Medya Adreslerimiz </Text>
      <Image source={(require("../assets/Logo.png"))} style={styles.image}/>
      <View style={styles.adress}>
      <AntDesign name="instagram" size={40} color='rgb(0,45,114)' style={styles.icon}/>
      <TouchableOpacity onPress={openTwitter}>
          <AntDesign name="twitter" size={40} color='rgb(0,45,114)' style={styles.icon} />
        </TouchableOpacity>
      <AntDesign name="youtube" size={40} color='rgb(0,45,114)' style={styles.icon}/>
      <FontAwesome5 name="tiktok" size={40} color='rgb(0,45,114)' style={styles.icon}/>
      <AntDesign name="github" size={40} color='rgb(0,45,114)'style={styles.icon}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,237,0)',
  },
  image:{
    width:300,
    height:300,
    resizeMode:"contain",
  },
  adress:{
    flexDirection:"row",
    marginTop:50,
  },
  icon:{
    marginLeft:10,
    marginRight:10,
  },
  header:{
    textAlign:"center",
    fontSize:40,
    fontWeight:"bold",
    color:'rgb(0,45,114)',
    marginBottom:50,
  }
});

export default More;


