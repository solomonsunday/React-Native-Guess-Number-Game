import { View, Text, StyleSheet } from 'react-native';
import React from 'react';


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rnNum = m = Math.floor(Math.random() * (max - min)) + min;
    if (rnNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rnNum;
    }

}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 99, props.useChoice));

    return (
        <View style={styles.screen}>
            <Text></Text>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {

    }

})
