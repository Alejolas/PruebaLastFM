/* eslint-disable no-console */
/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import CardSongs from '../../common/components/CardSongs';
import api from '../../api';
import styles from '../../common/styles';

const Songs = () => {
  const [songs, setSongs] = useState([]);

  function getTopArtists() {
    api
      .get(
        '?method=geo.gettoptracks&country=colombia&api_key=829751643419a7128b7ada50de590067&format=json',
      )
      .then(async function (response) {
        setSongs(response.data.tracks);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (!songs) {
    return null;
  }

  useEffect(() => {
    getTopArtists();
  }, []);

  return (
    <View style={styles.backGroundPrimary}>
      <FlatList
        data={songs.track}
        keyExtractor={(item, index) => `key${index}`}
        renderItem={({ item }) => {
          return <CardSongs item={item} />;
        }}
      />
    </View>
  );
};

export default Songs;
