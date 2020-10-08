/* eslint-disable no-console */
/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Card from '../../common/components/Card/index';
import api from '../../api';

const Artists = () => {
  const [artists, setArtists] = useState([]);

  function getTopArtists() {
    api
      .get(
        '?method=geo.gettopartists&country=colombia&api_key=829751643419a7128b7ada50de590067&format=json',
      )
      .then(async function (response) {
        setArtists(response.data.topartists);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (!artists) {
    return null;
  }

  useEffect(() => {
    getTopArtists();
  }, []);

  return (
    <View>
      <View>
        <FlatList
          data={artists.artist}
          keyExtractor={(item, index) => `key${index}`}
          renderItem={({ item }) => {
            return <Card item={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default Artists;
