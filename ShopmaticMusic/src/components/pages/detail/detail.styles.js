import { StyleSheet, Dimensions,} from "react-native";
import { colors } from "../../../constants/string.constants";

export default styles = StyleSheet.create({
    container: {
        flex:1,backgroundColor: colors.appColor,flexDirection: 'row',
    },
    containerOne: {
        marginTop:'15%',
        flexDirection:'row'
    },
    songImage: {
        marginLeft:'5%',
        height:120,
        width:120,
    },
    innerView: {
        height:120,
        marginRight: '10%',
        marginLeft: '5%'
    },
    mainTitle: {
        height: 50,
        fontSize:20,
        color:'white',
        width: Dimensions.get('window').width/1.8,
    },
    subtitleOne: {
        marginTop:80,
        fontSize:17,
        color:'white',
        width: Dimensions.get('window').width/1.8
    },
    subtitleTwo: {
        marginTop:10,
        fontSize:17,
        color:'white',
        width: Dimensions.get('window').width/1.8
    },
    buyStyles: {
        marginTop: 15,
        fontSize:20,
        justifyContent: 'center',
        backgroundColor: '#2a2d36',
        height: 40,
        width: 80,
        borderRadius: 22
    },
    buyText: {
        alignSelf:'center',
        color: 'white'
    }
})