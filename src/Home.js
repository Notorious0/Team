import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text ,Image, Pressable } from 'react-native';
import HomeCard from './HomeCard';
import axios from 'axios';
import { ScoreBox } from './ScoreBox';
import { Standings } from './Standings';
import { NextMatch } from './NextMatch';
import HomeStart from './HomeStart';
import { useNavigation } from '@react-navigation/native';
import Loading from './Loading';

export const Home = () => {
    const navigation = useNavigation(); 
    const [data, setData] = useState({ score: [], news: [], teams: [], nextMatch: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://192.168.1.25:3004/news')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data', error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Text>Error fetching data: {error.message}</Text>;
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>  
        <HomeStart /> 
        <View style={styles.container}> 
            <View style={styles.row}>
            <Text style={styles.welcome}>Hoşgeldiniz</Text>
            <Image source={require('../assets/Fenerbahçe_Logo.png')} style={styles.image} resizeMode='contain'/>
            </View>
            
        <Text style={styles.homeHeader2}>Son Oynanan Maçlar</Text> 
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                <View style={styles.row}>
                    {data.score.map((item, index) => (
                        <ScoreBox style={styles.score}
                            key={`${item.idMatch}-${index}`} 
                            score={item.score} 
                            homeim={item.homeim} 
                            awayim={item.awayim} 
                            arena={item.arena} 
                            home={item.home}
                            away={item.away}
                        />
                    ))}
                </View>
            </ScrollView>
           

            <View style={styles.headerStyle}>
                <Text style={styles.homeHeader}>Haberler</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.row}>
                        {data.news.map((item, index) => (
                            <Pressable
                            key={`${item.id}-${index}`}
                            onPress={() => navigation.navigate('News', { newsItem: item})}
                            >
                            <HomeCard 
                                header={item.header} 
                                image={item.image} 
                            />
                            </Pressable>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>

        <Text style={styles.homeHeader2}>Sıradaki Maçlar</Text> 
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                <View style={styles.row}>
                    {data.nextMatch.map((item, index) => (
                        <NextMatch style={styles.score}
                        key={`${item.idMatch}-${index}`} 
                        matchDate={item.date} 
                        homeim={item.homeim}
                        time={item.time}
                        awayim={item.awayim} 
                        arena={item.arena} 
                        home={item.home}
                        away={item.away}  
                        />
                    ))}
                </View>
            </ScrollView>

        <View style={styles.euro}>
        <Image  
            source={require('../assets/Euro.png')}
            style={styles.image2 }  // Adjust width and height as needed
        />
        </View>

        <View style={styles.header}>
        <Text style={[styles.headerText, styles.headerPosition]}>Sıralama</Text>
        <Text style={[styles.headerText, styles.headerTeam]}>    Takım</Text>
        <Text style={[styles.headerText, styles.headerStats]}>          O</Text>
        <Text style={[styles.headerText, styles.headerStats]}>       G</Text>
        <Text style={[styles.headerText, styles.headerStats]}>   M</Text>
        <Text style={[styles.headerText, styles.headerStats]}>Av</Text>
        </View>

        <View style={styles.Stand}> 
         {data.teams.map((item, index) => (
          <Standings 
          key={`${item.id}-${index}`} 
          position={item.id}
          teamLogo={item.logo}
          name={item.name}
          o={item.O}
          g={item.G}
          m={item.M}
          av={item.Av}
          />
         ))}
        </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    homeHeader: {
        fontWeight: "bold",
        fontSize: 25,
        marginLeft: 20,
    },
    headerStyle: {
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20,
    },
    homeHeader2:{
        fontWeight: "bold",
        fontSize: 25,
        marginLeft: 20,
        marginTop:25,
    },
    welcome:{
        fontWeight: "bold",
        fontSize: 25,
        marginLeft: 20,
        marginTop:10,
        color:'rgb(0,45,114)',
    },
    image:{
        width:25,
        height:25,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
        marginTop:10,
    },
    Stand:{
        justifyContent:"center",
        alignItems:"center",
    },
    headerText: {
        color: 'navy',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      headerPosition: {
        flex: 1,
        minWidth: 50, 
      },
      headerTeam: {
        flex: 2,
        minWidth: 120, 
      },
    headerStats: {
    flex: 1,
    minWidth: 40, // İstatistik başlıklarının minimum genişliği
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 2, 
    borderBottomColor: 'gray',
    paddingBottom: 5,
  },
  teamsStand:{
    borderBottomWidth:1,
    borderBottomColor:"navy",
  },
  table:{
    width:"90%",
  },
  euro:{
    justifyContent:"center",
    alignItems:"flex-start",
  },
  image2:{
    width:250,
    height:120,
    resizeMode:"contain",
    marginLeft:10,
  }
});

export default Home;






