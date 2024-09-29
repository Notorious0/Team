
import { View,StyleSheet,ScrollView,Image,Text}from 'react-native';
import PlayerDetailStart from "./PlayerDetailStart";


export const NewsBox = (props) => {


  return (
    <ScrollView style={styles.container}>
        <PlayerDetailStart />
    <View style={styles.newsContainer}>
          <Image source={{uri:props.image}} style={styles.image}/>
          <Text style={styles.header}>{props.header}</Text>
          <View style={styles.haber}>
            <Text style={styles.haberText}>
            {props.news}
            </Text>
          </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  newsContainer:{
    justifyContent:"flex-start",
    alignItems:"center",
    width:"100%"
  },
  image:{
    width:"100%",
    height:225,
    resizeMode:"contain",
  },
  header:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
  },
  çizgi:{
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center",
  },
  haber:{
    justifyContent:"center",
    alignItems:"center",
    margin:12,
  },
  haberText:{
    fontSize:18,
  }
});

export default NewsBox;
