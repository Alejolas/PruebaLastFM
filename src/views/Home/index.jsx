import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import * as routes from '../../navigation/routes';
import styles from '../../common/styles';
import MainButton from '../../common/components/MainButton';
import logo from '../../resources/svg/logo.svg';
import ScrollContainer from '../../common/components/ScrollContainer';

const Home = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const { navigate } = useNavigation();

  const buttons = [
    { title: 'Buscar Top de Canciones', route: routes.CANCION },
    { title: 'Buscar Top de Artistas', route: routes.ARTISTAS },
  ];

  return (
    <>
      <ScrollContainer>
        <SafeAreaView style={[styles.container, styles.backGroundPrimary]}>
          <SvgXml xml={logo} style={styles.headerImages} />
          <View style={styles.containerButtons}>
            {buttons.map(button => (
              <MainButton
                key={button.title}
                title={button.title}
                containerStyle={styles.button}
                onPress={() => {
                  navigate(button.route);
                }}
              />
            ))}
          </View>
        </SafeAreaView>
      </ScrollContainer>
      <Text style={[styles.center, styles.powerBy]}>
        Desarrollado por: Alejandro Arango V
      </Text>
    </>
  );
};

export default Home;