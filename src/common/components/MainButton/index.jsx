import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import style from './style';

const MainButton = props => {
  const { title, ...others } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[style.button, others.containerStyle]}
      {...others}>
      <Text h2>{title}</Text>
    </TouchableOpacity>
  );
};

MainButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainButton;
