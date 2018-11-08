import { StyleSheet } from 'react-native';
import { defaultConfig } from '../index';

const imageSlider = StyleSheet.create({
  container: {
    flex: 1,
    width: defaultConfig.DISPLAY_WIDTH,
    height: defaultConfig.DISPLAY_HEIGHT / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: defaultConfig.LIGHT_GRAY,
    marginHorizontal: 5,
  },
});
export { imageSlider };
