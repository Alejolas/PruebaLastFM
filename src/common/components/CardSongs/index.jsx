/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './style';

const CardSongs = ({ item }) => {
  const minutes = (item.duration / 60).toFixed(2);
  return (
    <View style={style.container}>
      <Text style={style.song}>Canción: {item.name}</Text>
      <Text style={style.duration}>Duración: {minutes} minutos.</Text>
      <Image style={style.image} source={{ uri: item.image[2]['#text'] }} />
      <Text style={style.url}>{item.url}</Text>
    </View>
  );
};

export default CardSongs;
