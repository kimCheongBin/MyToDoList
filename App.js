import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './app/components/Header';
import SubTitle from './app/components/SubTitle';
import Input from './app/components/InputBox';
import TodoItem from './app/components/TodoItem';
//default로 내보낸것을 Header라는 이름으로 가져옵니다.

export default class App extends React.Component {
    constructor(props){
      super(props); 
      this.state={
          inputValue: "", 
          todos:[],                              
        }  
      }

  _makeTodoItem = ({ item, index }) => {
         return (       
          <TodoItem 
            text={item.title}
            isComplete = {item.isComplete}
            changeComplete={() => 
              {           
                const newTodo = [...this.state.todos];          
                newTodo[index].isComplete = !newTodo[index].isComplete; //불린값을 반대로          
                this.setState({todos:newTodo});
              }} 
              deleteItem={() => 
                {           
                  const newTodo = [...this.state.todos];
                  newTodo.splice(index,1);           
                  this.setState({todos:newTodo});
                }}      
            />     
          )
    }

  _changeText = (value) => {     
      this.setState({inputValue: value});
  } //텍스트가 변경되면 벨류를 인풋벨류로 바꾼다.

 
  _addTodoItem = () => {  
    if(this.state.inputValue != ""){
       const prevTodo = this.state.todos;  
       const newTodo = { title: this.state.inputValue, isComplete: false };    
       this.setState({     
         inputValue: "", 
         todos: prevTodo.concat(newTodo) 
        }); 
    } 
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.headercentered}>
          <Header></Header>
        </View> 
        <View style={styles.subContainer}>
          <SubTitle title="Write your to do. "/>
          <Input 
            value = {this.state.inputValue} 
            changeText={this._changeText}   
            addTodoItem={this._addTodoItem}/>  
        </View>
        <View style={styles.subContainer}>
          <SubTitle title="to do list."/> 
          <FlatList 
            data={this.state.todos} 
            renderItem={this._makeTodoItem} //클래스 내 함수 (메소드)
            keyExtractor={(item, index) => { return `${index}`}} 
          />
        </View>
      </View>
    );
  }
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
