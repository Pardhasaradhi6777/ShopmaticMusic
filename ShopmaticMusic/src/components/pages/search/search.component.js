import React, {useState, useContext, useLayoutEffect} from 'react'
import { SearchBar } from 'react-native-elements';
import { View, FlatList,} from 'react-native';
import actionTypes from '../../../reduxs/actions/action.types'
import {Context} from '../../../../App'
import { SEARCH_RESULTS_STRING, EMPTY_STRING, NO_RESULTS_FOUND, SEARCH, ARTIST, colors } from '../../../constants/string.constants';
import searchStyles from './search.styles';
import CustomLoader from '../../../utils/custom.loader';
import { AlbumCell } from '../../controls/albumCell';
import DataFetchFail from '../../controls/dataFetchFail';

export default function Search({ navigation }) {

    const { store, dispatch } = useContext(Context)
    const [searchText, setSearchText] = useState(EMPTY_STRING)
    const searchedData = store.searchedData
    const songsData = store.songsData
    const fetchError = store.fetchError
    
    //Method to filter the array based on search text
    const updateSearch = async (value) => {
        setSearchText(value)
        var temp = []
        dispatch({ type: actionTypes.SEARCH_RESET})
        if(value == EMPTY_STRING) {
            navigation.setOptions({ title: SEARCH})
        }
        else {
            await dispatch({ type: actionTypes.SHOW_LOADER})
            await dispatch({ type: actionTypes.SEARCH_TRIGGER, payload: value})
            temp = songsData.filter(item => { 
                const artist = item[ARTIST].label.toUpperCase()
                const album = item.title.label.toUpperCase()
                const searchText = value.toUpperCase();
                const tem = (artist.includes(searchText) || album.includes(searchText)) ;    
                return tem ? item : null
            });
                navigation.setOptions({ title: SEARCH_RESULTS_STRING + value})
            temp.length > 0 ? await dispatch({ type: actionTypes.SEARCH_RESULT, payload: temp}) : null
            dispatch({ type: actionTypes.HIDE_LOADER})
        }
    }
    useLayoutEffect(()=>{
        navigation.setOptions({ 
            headerStyle: {
            backgroundColor: colors.appColor,
            borderColor: colors.appColor,
            },
            headerTintColor: colors.white,
        })
    })
    const renderItem = (item) => {
        return(
            <AlbumCell navigation={navigation} data={item}/>
        )
    }
    const itemSeparator = () => {
        return(
            <View style={searchStyles.itemSeparator}/>
        )
    }
    const keyExtractor = (item) =>{
        return `${item.title.label}`
    }
    return (
        !fetchError ? <View style = {searchStyles.container}>
            <SearchBar inputContainerStyle = {searchStyles.searchContainer}
                placeholder={SEARCH}
                onChangeText={updateSearch}
                value={searchText}
            />
            <CustomLoader/>
            <FlatList style={{backgroundColor:colors.appColor}}
                data={searchText != EMPTY_STRING ? searchedData : songsData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={itemSeparator}
                showsVerticalScrollIndicator={false}
            />
        </View> : <DataFetchFail/>
    )
    
}
