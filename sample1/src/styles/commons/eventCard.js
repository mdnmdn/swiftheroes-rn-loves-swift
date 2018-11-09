import { StyleSheet } from 'react-native';
import * as defaultConfig from './defaultConfig';
import { setFontScale } from '../../libs/utils';


const text = {
  color: defaultConfig.WHITE,
  fontFamily: defaultConfig.FONT_MontserratBold,
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: { width: -1, height: 1 },
  textShadowRadius: 10,
};

const eventCard = StyleSheet.create({
  container: {
    height: 190,
    marginBottom: 10,
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  date: {
    ...text,
    fontSize: setFontScale(15),
    letterSpacing: 1.15,
    lineHeight: 19,
  },
  title: {
    ...text,
    fontSize: setFontScale(18),
    letterSpacing: 1.38,
    lineHeight: 22,
    marginBottom: 3,
  },
  description: {
    ...text,
    fontFamily: defaultConfig.FONT_Montserrat,
    fontSize: setFontScale(12),
    lineHeight: 15,
  },
  availability: {
    ...text,
    fontFamily: defaultConfig.FONT_Montserrat,
    fontSize: setFontScale(40),
    letterSpacing: 3.06,
    lineHeight: 49,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  imageWrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  status: {
    height: 10,
    width: 10,
    backgroundColor: '#F5A623',
    marginRight: 5,
  },
  like: {
    ...text,
    fontFamily: defaultConfig.FONT_Montserrat,
    fontSize: setFontScale(22),
    lineHeight: 27,
  },
  bookedContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: defaultConfig.LIGHT_GRAY,
    position: 'absolute',
    left: -10,
  },
  booked: {
    ...text,
    fontFamily: defaultConfig.FONT_MontserratSemiBold,
    fontSize: setFontScale(12),
    lineHeight: 15,
    letterSpacing: 0.92,
  },
  footerContainer: {
    backgroundColor: '#686868',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerTitle: {
    color: defaultConfig.WHITE,
    fontSize: setFontScale(12),
    fontFamily: defaultConfig.FONT_MontserratSemiBold,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});
export { eventCard };
