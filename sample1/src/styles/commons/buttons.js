import { StyleSheet } from 'react-native';
import * as defaultConfig from './defaultConfig';
import { setFontScale } from '../../libs/utils';

const defaultSettings = {
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 15,
  borderRadius: 26.5,
};
const defaultText = {
  color: defaultConfig.WHITE,
  fontFamily: defaultConfig.FONT_NunitoSansExtraBold,
  fontSize: setFontScale(18),
  letterSpacing: 1.45,
  lineHeight: 23,
};

const buttons = StyleSheet.create({
  defaultButton: {
    backgroundColor: defaultConfig.GREEN,
    ...defaultSettings,
  },
  defaultButtonText: {
    ...defaultText,
  },
  secondaryButton: {
    backgroundColor: defaultConfig.WHITE,
    ...defaultSettings,
  },
  secondaryButtonText: {
    ...defaultText,
    color: defaultConfig.GREEN,
  },
  transparentButton: {
    ...defaultSettings,
    backgroundColor: defaultConfig.WARM_GRAY,
    borderColor: defaultConfig.THIN_GRAY,
    borderWidth: 1,
    borderRadius: 2,
    height: 44,
  },
  transparentButtonText: {
    ...defaultText,
    fontFamily: defaultConfig.FONT_Montserrat,
    fontSize: setFontScale(13),
  },
});
export { buttons };
