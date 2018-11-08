import { StyleSheet } from 'react-native';
import * as defaultConfig from './defaultConfig';
import { setFontScale } from '../../libs/utils';

const message = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  messageContainer: {
    backgroundColor: '#D8D8D8',
    flex: 1,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    padding: 10,
    marginBottom: 15,
  },
  text: {
    fontFamily: defaultConfig.FONT_MontserratItalic,
    fontSize: setFontScale(18),
    lineHeight: 20,
    marginBottom: 25,
    color: 'black',
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
    marginBottom: 10,
  },
  image: {
    width: 135,
    height: 120,
    resizeMode: 'cover',
    marginRight: 5,
    marginBottom: 5,
  },
  label: {
    fontFamily: defaultConfig.FONT_Montserrat,
    fontSize: setFontScale(14),
  },
  labelBig: {
    fontFamily: defaultConfig.FONT_MontserratBold,
    fontSize: setFontScale(16),
  },
  imageCounter: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    position: 'absolute',
    color: 'white',
    fontSize: setFontScale(20),
    fontFamily: defaultConfig.FONT_Montserrat,
  },
});
export { message };
