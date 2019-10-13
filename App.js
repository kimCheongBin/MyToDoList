import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import SubTitle from './app/components/SubTitle';
import Input from './app/components/InputBox';
import TodoItem from './app/components/TodoItem';
//default로 내보낸것을 Header라는 이름으로 가져옵니다.

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headercentered}>
        <Header></Header>
      </View> 
      <View style={styles.subContainer}>
        <SubTitle title ="Write your to do."/>
        <Input></Input>
      </View>
      <View style={styles.subContainer}>
        <SubTitle title="to do list"/>
        <TodoItem text="코딩하기"></TodoItem>
        <TodoItem text="영어공부하기"></TodoItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  headercentered : {
    marginTop : 40,
    alignItems : 'center',
  },
  subContainer: {
    marginLeft:20, 
  }, 
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
