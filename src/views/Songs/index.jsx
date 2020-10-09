/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Spinner from 'react-native-spinkit';
import CardSongs from '../../common/components/CardSongs';
import api from '../../api';
import styles from '../../common/styles';
import colors from '../../common/colors';

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [load, setLoad] = useState(false);
  const SPINNER_DIAMETER = 80;

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
    <>
      <View
        onStartShouldSetResponder={() => setLoad(true)}
        style={styles.backGroundPrimary}>
        {load === false && (
          <View style={[styles.center, styles.spinner]}>
            <Spinner
              isVisible
              type="Circle"
              color={colors.primary}
              size={80}
              style={{
                width: SPINNER_DIAMETER,
                height: SPINNER_DIAMETER,
              }}
            />
          </View>
        )}
        <FlatList
          data={songs.track}
          keyExtractor={(item, index) => `key${index}`}
          renderItem={({ item }) => {
            return <CardSongs item={item} />;
          }}
        />
      </View>
    </>
  );
};

export default Songs;
