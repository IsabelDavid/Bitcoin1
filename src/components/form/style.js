import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#8d65a5",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form:{
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel:{
        color:"#160921",
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#bf95d2",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttomCalculator:{
        borderRadius: 50,
        alignItems: "center",
        width: "90%",
        backgroundColor: "#d8ace9",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#160921",
    },
});
export default styles