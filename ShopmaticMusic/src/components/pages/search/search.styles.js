import { StyleSheet,} from "react-native";
import { colors } from "../../../constants/string.constants";

export default styles = StyleSheet.create({
    container: {
        flex:1,
    },
    searchContainer: {
        backgroundColor: colors.appColor
    },
    itemSeparator: {
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
    }
})