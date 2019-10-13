// app/components/InputBox.js
import React from "react";
import {TextInput,StyleSheet} from 'react-native';

const Input = () => (
    <TextInput
        style={styles.input}
        placeholder={"오늘의 할 일"}
        maxLength={30}
    returnKeyType="done"/>
);

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        paddingTop:15,
        paddingBottom:15,
    }
})

export default Input;