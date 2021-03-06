import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../colors';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.buttonBackground,
    margin: width * 0.03,
    paddingBottom: 5,
    borderRadius: width * 0.05,
    shadowColor: colors.black,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  artist: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  listeners: {
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    color: colors.black,
    fontSize: 18,
  },
  url: {
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    color: colors.black,
    fontSize: 18,
  },
  image: {
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
});
