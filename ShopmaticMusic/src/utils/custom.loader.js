import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {Context} from '../../App'
import ImgLoader from '../assets/images/Ellipsis-loader.gif'

export default function CustomLoader () {
  const { store, dispatch } = useContext(Context)
      return (
        store.loaderEnabled ? <View style={styles.loader}>
          <Image source={ImgLoader} style={{ height: 60, width: 60, resizeMode: 'contain' }} />
        </View> : <View></View>
      )
    
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    height: '110%',
    width: "100%",
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})