import React from 'react';
import { View, StyleSheet, Image ,StatusBar} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const HomeStart = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../assets/Fenerbahçe_Logo.png')} style={styles.image} resizeMode='contain'/>
                </View>
                <View style={styles.user}>
                <FontAwesome name="user-circle-o" size={35} color="rgb(255,237,0)" />
                </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:90,
        flexDirection: 'row',
        backgroundColor: 'rgb(0,45,114)',
        paddingTop: StatusBar.currentHeight,
    },
    logo: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex:1,
    },
    image:{
        width:60,
        height:60,
        marginLeft:8,
        marginBottom:8,
        marginTop:7,
    },
    user:{
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight:10,
        marginTop:10,
    },
});

export default HomeStart;
