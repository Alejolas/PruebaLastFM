import colors from './colors';
import fonts from './fonts';

export default {
  Text: {
    style: {
      fontFamily: fonts.primary,
    },
    h1Style: {
      paddingVertical: 20,
      color: colors.primary,
      fontSize: 50,
      textAlign: 'left',
      fontWeight: 'normal',
    },
    h2Style: {
      color: colors.backGroundPrimary,
      textAlign: 'center',
      fontSize: 20,
      fontFamily: fonts.primary,
      fontWeight: 'normal',
    },
    h3Style: {
      color: colors.primary,
      fontSize: 16,
      marginVertical: 15,
      fontWeight: 'normal',
    },
  },
  colors: {
    primary: colors.primary,
  },
};
