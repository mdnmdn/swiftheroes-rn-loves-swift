import { StyleSheet } from 'react-native';
import * as defaultConfig from './defaultConfig';
import { buttons } from './buttons';
import { setFontScale } from '../../libs/utils';

const {
  DISPLAY_HEIGHT,
  DISPLAY_WIDTH,
} = defaultConfig;
// console.log('height', DISPLAY_HEIGHT);
const layout = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  viewContainer: {
    backgroundColor: defaultConfig.MAIN_BLUE,
    flex: 1,
  },
  safeAreaViewContainer: {
    backgroundColor: defaultConfig.DARK_GRAY,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 5,
    paddingHorizontal: 15,
    backgroundColor: defaultConfig.MAIN_BLUE,
  },
  backContainer: {
  },
  backImage: {
    height: 15,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  titleText: {
    fontFamily: defaultConfig.FONT_NunitoSansBold,
    fontSize: setFontScale(17),
    color: defaultConfig.WHITE,
    letterSpacing: 1.3,
    lineHeight: 20,
  },
  titleContainer: {
    flex: 5,
    alignItems: 'center',
  },
  footer: {
    // flexDirection: 'row',
    paddingHorizontal: 15,
  },
  tabButton: {
    ...buttons.defaultButton,
  },
  tabButtonText: {
    ...buttons.defaultButtonText,
  },
  leftHeader: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightHeader: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerText: {
    color: defaultConfig.WHITE,
    fontFamily: defaultConfig.FONT_Montserrat,
    marginBottom: 5,
  },
});

export { layout };
