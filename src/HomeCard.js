import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const HomeCard = (props) => {
    return (
        <View style={styles.box}>
            <View style={styles.image}>
            <Image source={{ uri: props.image }} style={styles.image} />
            </View>    
            <Text style={styles.header}>
                {props.header}
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        width: 300,
        height: 270,
        borderRadius: 20,
        backgroundColor: "#ebebeb",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: 10,
        overflow: 'hidden', 
    },
    image: {
        width: '100%', 
        height: '80%', 
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 20,
        position:"absolute",
        bottom:0,
        marginBottom:40,
    },
});

export default HomeCard;
