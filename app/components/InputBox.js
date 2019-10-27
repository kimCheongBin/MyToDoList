// app/components/InputBox.js
import React from "react";
import {TextInput,StyleSheet} from 'react-native';

const Input = ({value,changeText,addTodoItem}) => (    
     <TextInput         
     value={value}         
     style={styles.input}         
     placeholder={"할 일을 입력하세요!"}        
      maxLength={30}         
      onChangeText={changeText} 
      onEndEditing={addTodoItem}             
     returnKeyType="done"/> 
    );

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        paddingTop:15,
        paddingBottom:15,
    }
});

export default Input;
