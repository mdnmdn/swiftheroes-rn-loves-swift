import { StyleSheet } from 'react-native';
import * as defaultConfig from './defaultConfig';
import { setFontScale } from '../../libs/utils';


const avatarInfo = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    fontFamily: defaultConfig.FONT_Montserrat,
    fontSize: setFontScale(8),
    letterSpacing: 0.61,
    lineHeight: 10,
    color: defaultConfig.WHITE,
    textAlign: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
  },
  image: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: defaultConfig.THIN_GRAY,
  },
});
export { avatarInfo };
