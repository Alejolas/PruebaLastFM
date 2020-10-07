import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles';

const ScrollContainer = ({ children, ...others }) => {
  return (
    <ScrollView
      style={[
        styles.container,
        styles.backGroundPrimary,
        others.containerStyle,
      ]}
      alwaysBounceVertical>
      <SafeAreaView>{children}</SafeAreaView>
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  children: PropTypes.shape({}),
};

ScrollContainer.defaultProps = {
  children: null,
};

export default ScrollContainer;
