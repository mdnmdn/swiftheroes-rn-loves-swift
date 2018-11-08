import { StyleSheet } from 'react-native';
import { defaultConfig } from '..';
import { setFontScale } from '../../libs/utils';

const switchCell = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  top: {
    marginBottom: 5,
  },
  bottom: {
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    marginHorizontal: 10,
    fontFamily: defaultConfig.FONT_REGULAR,
    fontSize: setFontScale(13),
    color: defaultConfig.MEDIUM_PINK,
  },
  description: {
    fontFamily: defaultConfig.FONT_REGULAR,
    fontSize: setFontScale(13),
    color: defaultConfig.WARM_GRAY,
  },
  icon: {
    height: 40,
    justifyContent: 'center',
  },
  switchContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});


export { switchCell };
