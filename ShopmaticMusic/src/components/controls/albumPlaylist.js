import React , { useContext }from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../../../App'
import { DETAIL_SCREEN, IMAGE, CONTAIN, appFontFamilies } from '../../constants/string.constants';

function AlbumPlayList (props) {

  const { store, dispatch } = useContext(Context)
  const groupedData = [...store.groupedData]
  
  const renderItem = ({item}) => {
    const getKeyExtractor = (item) => `${item.title.label}`;
    return (
      <View>
        <Text style={styles.title}>{item.category}</Text>
        <FlatList
          data={item.items}
          renderItem={renderMusicItem}
          keyExtractor={getKeyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const renderMusicItem = ({item}) => (
    <TouchableOpacity
      onPress={() => props.navigation.navigate(DETAIL_SCREEN, {itemDetails: item})}>
      <View style={styles.album}>
        <Image style={styles.albumIcon} source={{ uri: item[IMAGE][2].label}} resizeMode={CONTAIN} />
        <Text numberOfLines={2} style={styles.titleText}>{item.title.label}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={groupedData}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.category}`}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    
    paddingBottom: 15,
    color: 'white',
  },
  album: {
    flex: 1,
    height: 180,
    width: 150,
    marginRight: 15,
    left: 10,
    marginBottom: 15,
  },
  albumIcon: {
    flex: 1,
    height: 140,
    width: 140,
    borderRadius: 15
  },
  titleText: {
    marginTop: 10,
    fontSize: 12,
    height: 30,
    color: 'white'
  }
});

export default AlbumPlayList;
