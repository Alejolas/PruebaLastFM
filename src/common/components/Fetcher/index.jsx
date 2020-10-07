import React, { useState, useEffect } from 'react';
import Text from 'react-native';

const Fetcher = ({ apiKey }) => {
  const [lfmData, updateLfmData] = useState({});

  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(data => updateLfmData(data))
      .catch(() =>
        updateLfmData({
          error: 'Algo salió mal tratando de comunicarme con LastFM :(',
        }),
      );
  }, []);

  const buildLastFmData = () => {
    const { error } = lfmData;
    const track = lfmData?.recenttracks?.track;

    if (error) {
      return <Text>{error}</Text>;
    }

    if (!track) {
      return <Text>Loading</Text>;
    }

    const [{ artist: { '#text': artistName } = {} } = {}] = track;

    return <Text>Estos son los artistas top del momento: {artistName}</Text>;
  };

  return buildLastFmData();
};

export default Fetcher;
