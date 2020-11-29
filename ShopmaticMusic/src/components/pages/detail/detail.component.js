import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { colors, ARTIST, PRICE, RELEASE, IMAGE } from '../../../constants/string.constants';
import styles from './detail.styles'

export default function Details(props) {
    const {itemDetails} = props.route.params;
    const [formattedDate,setFormattedDate] = useState('')
    useEffect(() => {
        formatDate()
    },[])
    //Method to format the date in a readable format
    const formatDate = () => {
        var date = new Date(itemDetails[RELEASE].label);
        date = date.toDateString()
        setFormattedDate(date)
    }
    React.useLayoutEffect(()=>{
        props.navigation.setOptions({ 
            headerStyle: {
            backgroundColor: colors.appColor,
            borderColor: colors.appColor,
          },
          headerTintColor: colors.white})
    })
    return (
        <View style={styles.container}>
            <View style={styles.containerOne}>
                <Image source={{uri:itemDetails[IMAGE][2].label}} style={styles.songImage}/>
                <View style={styles.innerView}>
                    <Text numberOfLines={2} style={styles.mainTitle}>{itemDetails.title.label}</Text>
                    <Text style={styles.subtitleOne}>{itemDetails[ARTIST].label}</Text>
                    <Text style={styles.subtitleTwo}>{formattedDate}</Text>
                    <Text style={styles.subtitleTwo}>{itemDetails.category.attributes.label}</Text>
                    <Text style={styles.subtitleTwo}>{itemDetails[PRICE].label}</Text>
                    <TouchableOpacity style={styles.buyStyles}>
                        <Text style={styles.buyText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
