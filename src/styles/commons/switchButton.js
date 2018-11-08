import { StyleSheet } from 'react-native';
import { defaultConfig } from '..';

const switchButton = StyleSheet.create({
  container: {
    width: defaultConfig.SWITCH_SIZE.width,
    height: defaultConfig.SWITCH_SIZE.height,
    borderWidth: 1,
    borderColor: defaultConfig.LIGHT_GRAY,
    borderRadius: defaultConfig.SWITCH_SIZE.height / 2,
    justifyContent: 'center',
  },
  button: {
    width: defaultConfig.SWITCH_SIZE.width - defaultConfig.SWITCH_SIZE.padding * 2,
    height: defaultConfig.SWITCH_SIZE.height - defaultConfig.SWITCH_SIZE.padding * 2,
    marginHorizontal: 1,
  },
  circle: {
    width: defaultConfig.SWITCH_SIZE.height - defaultConfig.SWITCH_SIZE.padding * 2,
    height: defaultConfig.SWITCH_SIZE.height - defaultConfig.SWITCH_SIZE.padding * 2,
    borderRadius: (defaultConfig.SWITCH_SIZE.height - defaultConfig.SWITCH_SIZE.padding * 2) / 2,
    backgroundColor: defaultConfig.LIGHT_GRAY,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
});


export { switchButton };
