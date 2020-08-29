import React from "react";
import {Text, StyleSheet, View} from "react-native";
import Colors from "../constants/colors";

const NumberContainer=(props)=>{
  return(
      <View style={styles.container}>
          <Text style={styles.number}>{props.children}</Text>
      </View>
  )
};

const styles = StyleSheet.create({
container:{
    borderWidth: 2,
    borderColor: Colors.accent,
    padding:10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center"

},
    number:{
    color: Colors.accent,
        fontSize: 22,

    }
});

export default NumberContainer;