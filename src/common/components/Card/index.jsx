/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './style';

const Card = ({ item }) => {
  return (
    <View style={style.container}>
      <Text style={style.artist}>Artista: {item.name}</Text>
      <Text style={style.listeners}>Reproducciones: {item.listeners}</Text>
      <Image style={style.image} source={{ uri: item.image[2]['#text'] }} />
      <Text style={style.url}>{item.url}</Text>
    </View>
  );
};

export default Card;
