// Players.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import PlayerBox from './PlayerBox';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import PlayerStart from './PlayersStart';
import Loading from './Loading';

const Players = () => {
  const [data, setData] = useState({ players: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get("http://192.168.1.25:3004/news")
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
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
      <PlayerStart/>
        {data.players.map((item, index) => (
          <Pressable 
            key={`${item.idPlayer}-${index}`} 
            onPress={() => navigation.navigate('PlayerDetail', { player: item })}
          >
            <PlayerBox
              image={item.image}
              number={item.formNumber}
              name={item.playerName}
              surname={item.playerSurname}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Players;

