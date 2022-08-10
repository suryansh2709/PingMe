import { StyleSheet } from "react-native";
import { color } from "../../utils/colors";
import { normalize, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    headerMain : {
        width : "100%",
        height : normalize(90),
        backgroundColor : color.white,
        justifyContent : 'center'
    },
    backButton : {
        height : normalize(20),
        width : normalize(16),
        marginLeft : normalize(24)
    },
    backText : {
       height : "100%",
       width : "100%"
    }
});

export default styles