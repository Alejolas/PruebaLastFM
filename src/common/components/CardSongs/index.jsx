/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './style';

const CardSongs = ({ item }) => {
  return (
    <View style={style.container}>
      <Text style={style.artist}>Canción: {item.name}</Text>
      <Text style={style.name}>Duración: {item.duration} segundos.</Text>
      <Image style={style.image} source={{ uri: item.image[2]['#text'] }} />
      <Text style={style.description}>{item.url}</Text>
    </View>
  );
};

export default CardSongs;
