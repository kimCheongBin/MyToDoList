import React from "react"
import {View,Text,StyleSheet,Dimensions,TouchableOpacity} from "react-native"
import {AntDesign, FontAwesome} from "@expo/vector-icons" //expo가 제공해주는 component를 import합시다

const TodoItem= ({text, isComplete, changeComplete, deleteItem}) => (
    <View style={styles.todoContainer}>
            <View style={styles.lineContainer}>
                <View style={styles.makerow}>
                    <TouchableOpacity onPress = {changeComplete}>
                        <FontAwesome name={isComplete?"circle-o":"check-circle"} style={styles.checkbtn} size={20} />
                    </TouchableOpacity>
                    <Text style={styles.todos}>{text}</Text>
                </View>    
                    <TouchableOpacity onPress={deleteItem}>
                        <AntDesign name="closecircle" size={20}/>
                    </TouchableOpacity>
            </View>
    </View>
);

const {width,height} = Dimensions.get('window'); //Dimensions는 현재 App이띄워지는

//화면의 width와 height를 받아와 저장해줌다
const styles = StyleSheet.create({
    todoContainer: {
        padding: 5,
        marginTop: 20,
        borderBottomWidth:1,
        width: width-40, //얘는 전체 길이보다 40만큼 작게 해서 여유를 주는것입니다
    //width를 위에서 선언과 초기화 해주지 않으면 사용할수 없어요 width-40해줄수 없어요
    },
    todoitem: {
        fontSize: 20,
    },
    lineContainer: {
        flexDirection:'row',
        justifyContent:'space-between', //가로 정렬하는데 compo사이를 균등하게 space로 구분
        alignItems:'center',
    },
    checkbtn: {
        marginRight:20, //checkbtn에서 할 일을 오른쪽으로 떨어트리기 위해 사용
    },
    makerow:{
        flexDirection:'row',
    },
})

export default TodoItem;