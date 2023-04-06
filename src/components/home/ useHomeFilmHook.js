import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import movieApi from '../../api/movieApi';
const  useHomeFilmHook = (url) => {
    const [items, setItems] = React.useState([]);
    const navigation = useNavigation()
    useEffect(()=>{
  
      const getFilms = async () =>{
        const data = await movieApi.getMovies();
        setItems(data)
      }
      getFilms()
    },[])
  
  
    const handleOnpress = (id) =>{
      navigation.navigate("FilmDetail", {id})
    }
  

  return {
    items,
    handleOnpress,
  }
};

export default  useHomeFilmHook;