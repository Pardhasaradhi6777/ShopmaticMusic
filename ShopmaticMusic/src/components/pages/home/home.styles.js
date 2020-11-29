import { StyleSheet,} from "react-native";
import { colors } from "../../../constants/string.constants";

export default styles = StyleSheet.create({
    container: {
        flex :1,
        justifyContent: 'center',
        backgroundColor:'black'
    },
    fetchError: {
        flex :1,
        height: '100%',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        color: colors.appColor,
        backgroundColor: colors.appColor
    },
    fetchErrorTitile: {
        fontSize: 24,
        color: 'white'
    }

})