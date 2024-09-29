import React from 'react';
import { View, StyleSheet, Text ,Image} from 'react-native';
 

export const Standings = (props) => {
  const teams = props.teams || []; 

  return (
    <View style={styles.container}>
      {  
        <View key={props.position} style={styles.row}>  
          <Text style={[styles.cell, styles.position]}>{props.position}</Text>
          <Image source={{ uri: props.teamLogo }} style={styles.logo} resizeMode="contain" />
          <Text style={[styles.cell, styles.team]} numberOfLines={1} ellipsizeMode='tail'>{props.name}</Text> 
          <Text style={[styles.cell, styles.stats]}>{props.o}</Text>
          <Text style={[styles.cell, styles.stats]}>{props.g}</Text>
          <Text style={[styles.cell, styles.stats]}>{props.m}</Text>
          <Text style={[styles.cell, styles.stats]}>{props.av}</Text>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingVertical: 5,
  },
  cell: {
    textAlign: 'center',
    padding: 5,
  },
  position: {
    flex: 1,
    minWidth: 60, 
  },
  team: {
    flex: 2,
    minWidth: 120, 
  },
  stats: {
    flex: 1,
    minWidth: 40,
  },
  logo:{
    width:30,
    height:30,
   marginLeft:7,
  }
});





