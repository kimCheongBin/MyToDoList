// app/components/SubTitle.js
import React from "react";
import { View, Text, StyleSheet} from "react-native";

const SubTitle = ({title}) => ( //함수의 argument에 Props로 넘어온 title값을 넣어 사용함다
    <View>
    <Text style={styles.subTitleText}>{title}</Text>
    </View>
);
    

styles = StyleSheet.create({
    subTitleText: {
        color: "#3f4e66",
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default SubTitle;