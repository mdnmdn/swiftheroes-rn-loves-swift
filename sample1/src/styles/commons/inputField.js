import { StyleSheet } from 'react-native';
import { defaultConfig } from '../index';
import { setFontScale } from '../../libs/utils';

const inputField = StyleSheet.create({
  container: {
    backgroundColor: defaultConfig.LIGHT_BLUE,
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: 75,
    justifyContent: 'center',
  },
  label: {
    marginVertical: 5,
    color: defaultConfig.GREEN,
    fontSize: setFontScale(12),
    fontFamily: defaultConfig.FONT_NunitoSansExtraBold,
    letterSpacing: 0.92,
  },
  textInputContainer: {

  },
  textInput: {
    color: defaultConfig.WHITE,
    fontFamily: defaultConfig.FONT_NunitoSans,
    fontSize: setFontScale(20),
  },
});

export { inputField };
