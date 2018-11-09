import { StyleSheet } from 'react-native';
import { defaultConfig } from '../index';
import { setFontScale } from '../../libs/utils';

const icon = {
  width: 50,
  height: 50,
  resizeMode: 'contain',
};

const checkbox = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 50,
    borderRadius: 50,
  },
  iconTextWrapper: {
    width: 50,
    marginRight: 5,
  },
  icon: {
    ...icon,
  },
  textContainer: (type = undefined) => {
    return {
      flex: 1,
      marginLeft: type === 'user' ? 20 : 0,
    };
  },
  text: (type = undefined) => {
    return {
      fontFamily: defaultConfig.FONT_BOLD,
      fontSize: setFontScale(type === 'user' ? 21 : 14),
      color: defaultConfig.PINKISH_GRAY,
    };
  },
  subtitle: {
    fontFamily: defaultConfig.FONT_LIGHT,
    fontSize: setFontScale(13),
    color: defaultConfig.PINKISH_GRAY,
  },
  buttonContainer: {
    width: 50,
    alignItems: 'flex-end',
  },
  checkboxImage: {
    width: 40,
    height: 40,
  },
});
export { checkbox };
