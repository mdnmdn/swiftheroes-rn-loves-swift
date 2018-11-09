import { StyleSheet } from 'react-native';
import { buttons } from './buttons';
import * as defaultConfig from './defaultConfig';
import { setFontScale } from '../../libs/utils';

const {
  FONT_LIGHT,
  FONT_REGULAR,
} = defaultConfig;

const alertStyles = StyleSheet.create({

  modalWrapper: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  modalContainer: {
    backgroundColor: '#8E8E8E',
    height: 'auto',
    minHeight: 240,
    paddingHorizontal: 15,
  },

  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 15,
  },
  descriptionContainer: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  description: {
    fontFamily: FONT_REGULAR,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: defaultConfig.PINKISH_GRAY,
    fontSize: setFontScale(13),
  },
  titleContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONT_LIGHT,
    textAlign: 'center',
    fontSize: setFontScale(17),
    color: defaultConfig.MEDIUM_PINK,
    letterSpacing: -0.4,
  },
  buttonAction: {
    ...buttons.defaultButton,
    flex: 1,
    maxHeight: 30,
    maxWidth: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginLeft: 2.5,
  },
  buttonCancel: {
    ...buttons.invertedDefaultButton,
    flex: 1,
    maxHeight: 30,
    maxWidth: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginRight: 2.5,
  },
  buttonActionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: setFontScale(13),
  },
  buttonCancelText: {
    color: defaultConfig.MEDIUM_PINK,
    textAlign: 'center',
    fontSize: setFontScale(13),
  },
  confirmMessageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmMessageText: {
    color: defaultConfig.WHITE,
    fontFamily: defaultConfig.FONT_MontserratSemiBold,
    fontSize: setFontScale(24),
    letterSpacing: 1.84,
    lineHeight: 29,
    textAlign: 'center',
  },
});
export { alertStyles };
