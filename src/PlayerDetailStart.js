import React from 'react';
import { View, StyleSheet ,StatusBar, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PlayerDetailStart = () => {
    const navigatation = useNavigation();
    
    const handleGoBack = () =>{
        navigatation.goBack();
    };
  return (
    <View style={styles.container}>
             <StatusBar
        barStyle="light-content" // Metin rengini açar
        backgroundColor="rgb(0,45,114)" // StatusBar arka plan rengi
      />
      <View style={styles.start}>
       <Pressable onPress={handleGoBack}>
      <Ionicons name="arrow-back-circle-outline" size={40} color='rgb(255,237,0)' />
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    width: 400,
    height: 70,
    backgroundColor: 'rgb(0,45,114)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingLeft:15,
    paddingTop: StatusBar.currentHeight ,
  }
});

export default PlayerDetailStart;