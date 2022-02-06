import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
}
export default Card;


const styles = StyleSheet.create({
    card: {

        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: "white",
        elevation: 6,
        padding: 20,
        borderRadius: 10
    }

})
