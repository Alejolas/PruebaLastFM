import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  headerImages: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 30,
  },
  backGroundPrimary: {
    backgroundColor: colors.backGroundPrimary,
  },
  containerButtons: {
    alignSelf: 'center',
  },
  button: {
    marginTop: 40,
  },
  title: {
    fontSize: 60,
    textTransform: 'capitalize',
    color: colors.primary,
    textAlign: 'center',
    marginVertical: 60,
  },
  spinner: {
    position: 'absolute',
    top: '40%',
    left: '40%',
  },
  powerBy: {
    color: colors.primary,
    position: 'absolute',
    bottom: 40,
  },
  header: {
    backgroundColor: colors.buttonBackground,
  },
});
