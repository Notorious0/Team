import { useEffect, useState } from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import axios from 'axios';
import PlayerDetailStart from "./PlayerDetailStart";
import Loading from "./Loading";

export default function News({ route }) {
    const { newsItem } = route.params; 

    const [data, setData] = useState({ news: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://192.168.1.25:3004/news')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <Text>Error fetching data: {error.message}</Text>;
    }

    return (
        <ScrollView style={styles.container}>
            <PlayerDetailStart />
            <View style={styles.newsContainer}>
                <Image source={{ uri: newsItem.image }} style={styles.image} />
                <Text style={styles.header}>{newsItem.header}</Text>
                <View style={styles.newsContent}>
                    <Text style={styles.newsText}>
                        {newsItem.haber}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
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
    height:230,
    
  },
  header:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
    marginTop:10,
    marginLeft:2,
    marginRight:2,
  },
  çizgi:{
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center",
  },
  newsContent:{
    justifyContent:"center",
    alignItems:"center",
    marginLeft:13,
    marginRight:13,
    marginTop:15,
    marginBottom:30,
    
  },
  newsText:{
    fontSize:20,
  }
});