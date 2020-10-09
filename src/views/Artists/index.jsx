/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Spinner from 'react-native-spinkit';
import Card from '../../common/components/Card';
import api from '../../api';
import styles from '../../common/styles';
import colors from '../../common/colors';

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [load, setLoad] = useState(false);
  const SPINNER_DIAMETER = 80;

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
          data={artists.artist}
          keyExtractor={(item, index) => `key${index}`}
          renderItem={({ item }) => {
            return <Card item={item} />;
          }}
        />
      </View>
    </>
  );
};

export default Artists;
