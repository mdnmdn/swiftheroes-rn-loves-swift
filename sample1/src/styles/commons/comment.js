import { StyleSheet } from 'react-native';
import * as defaultConfig from './defaultConfig';
import { setFontScale } from '../../libs/utils';

const comment = StyleSheet.create({
  container: {
    backgroundColor: defaultConfig.LIGHT_GRAY,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  iconContainer: {
    borderLeftWidth: 1,
    borderColor: defaultConfig.WARM_GRAY,
    height: '100%',
    paddingLeft: 15,
    justifyContent: 'center',
  },
  text: {
    fontFamily: defaultConfig.FONT_MontserratSemiBold,
    fontSize: setFontScale(16),
    letterSpacing: 1.12,
    color: defaultConfig.WHITE,
  },
});
export { comment };
