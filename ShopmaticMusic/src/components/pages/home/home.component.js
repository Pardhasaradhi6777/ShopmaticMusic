import React, { useEffect, useState, useLayoutEffect, useContext } from 'react'
import { View, Alert, Text, } from 'react-native'
import AlbumPlayList from '../../controls/albumPlaylist'
import CustomLoader from '../../../utils/custom.loader'
import actionTypes from '../../../reduxs/actions/action.types'
import { METHOD_GET, URL_STRING, colors, FOLLOW, ERROR, CANCEL, OK } from "../../../constants/string.constants";
import { Context } from '../../../../App'
import  styles  from './home.styles'
import DataFetchFail from '../../controls/dataFetchFail'




export default function HomeComponent({ navigation }) {
    const { store, dispatch } = useContext(Context)
    const fetchError  = store.fetchError
    const createAlert = (error) => {
        Alert.alert(
        ERROR,
        error.message,
        [{text: CANCEL,},{text: OK,}],
        { cancelable: false }
        );
    }
    //API Call to fetch the data
    const APICall =  () => {
        dispatch({ type: actionTypes.FETCH_DATA})
        var requestOptions = {
            method: METHOD_GET ,
            redirect: FOLLOW
          };
          
          fetch(URL_STRING, requestOptions)
            .then(response => response.text())
            .then( async result => {
                let parsedResult = JSON.parse(result)
                filterCategories(parsedResult.feed.entry)
                filterArrays(parsedResult.feed.entry)
                await dispatch({ type: actionTypes.FETCH_SUCCESS, payload: parsedResult.feed.entry })
            })
            .catch(error => {
                dispatch({ type: actionTypes.FETCH_ERROR})
                createAlert(error)});
    }
    
    //method to filter the category
    const filterCategories = (data) => {
        var category = data.map(item => {
            return item.category.attributes.label
        })
        category = new Set(category)
        filterArrays(data,category)
    
    }
    //method to build a object to group the albums
    function buildAlbumObject(category,items){
        var albumObject = {}
        albumObject.category = category
        albumObject.items = items
        return albumObject
    }
    //method to filter the array based on category
    async function filterArrays(data, category){
        if(data != undefined && category != undefined ) {
            var albumArray = []
            var currentAlbumObject = {}
            category.forEach(categoryItem => {
                let temp = []
                temp = data.filter((dataItem) => {
                    return dataItem.category.attributes.label == categoryItem     
                })
                dataItems = data.filter((dataItem) => {
                    return dataItem.category.attributes.label != categoryItem     
                })
                currentAlbumObject = buildAlbumObject(categoryItem,temp)
                albumArray = [...albumArray,currentAlbumObject]
            })
             await dispatch({ type: actionTypes.UPDATE_DATA, payload: albumArray })
        }
    }
    useEffect(() => {
        APICall(),
        dispatch({ type: actionTypes.Chec})
    }, [])

    useLayoutEffect(()=>{
        navigation.setOptions({ 
            headerStyle: {
            backgroundColor: colors.appColor,
            borderColor: colors.appColor,
            },
            headerTintColor: colors.white,
        })
    })

    return (
      !fetchError ?  <View style = {styles.container}>
            <CustomLoader/>
            <AlbumPlayList navigation={navigation}/>
        </View>
        :
        <DataFetchFail/>
    )
    
}


    