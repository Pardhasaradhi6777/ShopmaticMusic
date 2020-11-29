import React from 'react'
import { DETAIL_SCREEN, IMAGE, CONTAIN, ARTIST, colors, NEXT } from "../../constants/string.constants"
import { StyleSheet, Text, Image , TouchableOpacity, View} from "react-native"
import Ionicons from 'react-native-vector-icons/FontAwesome5';

export function AlbumCell (props) {
    const item = props.data
    return(
        <TouchableOpacity onPress={() =>{props.navigation.navigate(DETAIL_SCREEN, {itemDetails: item.item})} }>
            <View style = {styles.container}>
                <View>
                    <Image style={styles.imageIcon} source={{uri: item.item[IMAGE][2].label}}resizeMode={CONTAIN}/>
                </View>
                <View style={styles.innerView}>
                    <View>
                        <Text ellipsizeMode='tail' numberOfLines={1}  style={styles.labelText}>{item.item.title.label}</Text>
                        <Text></Text>
                        <Text style={styles.label}>{item.item[ARTIST].label}</Text>
                        <View style={styles.artistLabel}>
                            <Ionicons name={NEXT}  size={20} color={colors.white} />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:70,
        marginBottom :10,
        marginTop :10,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row'
    },
    imageIcon: {
        justifyContent: 'flex-start',
        height: 60,
        marginLeft: 5,
        width: 60,
    },
    innerView: {
        marginLeft: 10,
        justifyContent:'space-between',
        marginRight: '20%',
        width:'78%'
    },
    labelText: {
        fontSize:18,
        fontWeight: 'bold',
        color:'white'
    },
    label: {
        fontSize: 18,
        marginBottom: -15,
        color:'white',
        paddingTop:8,
    },
    artistLabel: {
        alignContent: 'flex-end',
        alignSelf: 'flex-end'
    }
})

