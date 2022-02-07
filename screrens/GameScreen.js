import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/shared/NumberContainer';
import Card from '../components/shared/Card';


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rnNum = Math.floor(Math.random() * (max - min)) + min;
    if (rnNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rnNum;
    }

}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 99, props.userChoice));

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const nextGuessHandler = (dirrection) => {
        if ((dirrection === "lower" && currentGuess < props.userChoice) || (dirrection === "higher" && currentGuess > props.userChoice)) {
            Alert.alert("Don't cheat!", "You know that this is wrong", [{
                text: "Sorry", style: "cancel"
            }])
            return
        }
        if (dirrection === "lower") {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess
        }
        const nextGuessnumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextGuessnumber);

    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")} />
                <Button title="GRATER" onPress={nextGuessHandler.bind(this, "higher")} />
            </Card>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",

    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%",
    }

})
