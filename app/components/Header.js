// MyTodoApp/app/components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => ( //Arrow function사용,() => (return값) 의 형태로 사용해주었습니다
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My To Do App</Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer:{
        marginTop:30,
        marginBottom:40,
    },
    
    headerText: {
        fontSize: 26,
        fontWeight: 'bold',
        color:'green',
    },
});

//위의 식을 이렇게 명시적으로 return을 적어줄수도 있습니다.
// const Header = () => {
// return (
// <View>
// <Text>제목입니다</Text>
// </View>
// )};

export default Header;