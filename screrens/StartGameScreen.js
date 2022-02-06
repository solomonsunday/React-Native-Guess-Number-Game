import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Input from '../components/Input';
import Card from '../components/shared/Card';
import NumberContainer from '../components/shared/NumberContainer';
import Colors from '../constants/Colors';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setComfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler = () => {
        setEnteredValue("");
        setComfirmed(false);
    }
    const confirmInputHandler = () => {
        const CHOOSEN_NUMBER = parseInt(enteredValue);
        if (isNaN(CHOOSEN_NUMBER) || CHOOSEN_NUMBER <= 0 || CHOOSEN_NUMBER > 99) {
            Alert.alert("Invalid number!", "Number has sto be between 1 and 99.",
                [{ text: "Okay", style: "destructive", onPress: resetInputHandler }])
            return;
        }
        setComfirmed(true);
        setSelectedNumber(CHOOSEN_NUMBER);
        setEnteredValue("");
        Keyboard.dismiss()
    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <Card style={styles.summaryContainer}>
            <Text> You Selected </Text>
            <View>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" />

            </View>
        </Card>
    }


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Nmuber</Text>
                    <Input style={styles.input}
                        blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.btnContainer}>
                        <View style={styles.btnSize}>
                            <Button title="Reset"
                                color={Colors.accent}
                                onPress={resetInputHandler}
                            />
                        </View>
                        <View style={styles.btnSize}>
                            <Button title="Confirm"
                                color={Colors.primary}
                                onPress={confirmInputHandler}
                            />
                        </View>

                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    title: {
        fontSize: 20,
        marginVertical: 10

    },
    inputContainer: {
        width: 300,
        maxWidth: "80%", // for responsiveness sake.
        alignItems: "center",
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

    },
    btnContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    btnSize: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: "center"

    },
    summaryContainer: {
        marginTop: 10,
        alignItems: "center",
    },




})
