import React from 'react';
import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../constants/string.constants"


const dataFetchFail = () => {
    return(
        <View style = {styles.fetchError}>
           <Text style={styles.fetchErrorTitile}>DATA_FETCH_FAILED</Text>
        </View>
    )
}
const styles = StyleSheet.create({
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
export default dataFetchFail