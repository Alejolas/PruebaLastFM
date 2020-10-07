import React from 'react';
import { Text } from 'react-native';
import ScrollContainer from '../../common/components/ScrollContainer';
import Fetcher from '../../common/components/Fetcher';

const Artists = () => {
  return (
    <ScrollContainer>
      <Text>
        <Fetcher apiKey="829751643419a7128b7ada50de590067" />
      </Text>
    </ScrollContainer>
  );
};

export default Artists;
