import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import axios from 'axios';
import MatchesBox from './MatchesBox';
import MatchesStart from './MatchesStart'
import Loading from './Loading';

const Matches = () => {
  const [data, setData] = useState({ matches: [] });
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
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MatchesStart />
        <View>
          {data.matches.map((item, index) => (
            <MatchesBox 
              key={`${item.id}-${index}`} 
              homeim={item.homeim}
              home={item.home}
              awayim={item.awayim}
              away={item.away}
              date={item.date}
              time={item.time}
            />
          ))}
        </View>
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

export default Matches;





