import React from "react";
import {View, Text, StyleSheet, Button, Image, Dimensions} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props =>{
    return(
    <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
            <Image

                style={styles.image}
                // source={require("../assets/lovely-shots-reZbvcVASPI-unsplash.jpg")}
                source={{uri: 'https://images.squarespace-cdn.com/content/v1/5c60dfaf7d0c91662e150b0d/1568834065228-WTFWD0C9G5S5IUCJ6U7L/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/SUMMIT+EDIT.jpg?format=2500w'}}
                resizeMode={"cover"}/>
        </View>
        <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
                Your phone needed <Text style={styles.highlight} >{props.roundsNumber} </Text>
                rounds to guess the number <Text style={styles.highlight} >{props.userNumber}</Text>
            </BodyText>
        </View>


        <MainButton  onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer:{
        borderRadius: Dimensions.get("window").width  * 0.7 /2,
        borderWidth:3,
        borderColor: "black",
        width: Dimensions.get("window").width  * 0.7,
        height:Dimensions.get("window").width  * 0.7,
        overflow: "hidden",
        marginVertical: Dimensions.get("window").height  / 30,


    },
    image:{
        width: 100,
        height: 100

    },
    resultContainer:{
      marginHorizontal: 20,
        marginVertical: Dimensions.get("window").height  * 60

    },
    highlight:{
        color:Colors.primary,
        fontFamily: "open-sans-bold",
        fontSize: 20

    },
    resultText:{
        textAlign:"center",
        fontSize: Dimensions.get("window").height < 400 ? 16 : 20
    }
});

export default GameOverScreen;