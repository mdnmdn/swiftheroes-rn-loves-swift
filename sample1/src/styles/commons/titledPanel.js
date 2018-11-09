import { StyleSheet } from 'react-native';
import * as defaultConfig from "./defaultConfig";


const titledPanel = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    paddingVertical: 10,
    borderColor: defaultConfig.THIN_GRAY,
  },
  title: {
    color: defaultConfig.WHITE,
    fontFamily: defaultConfig.FONT_MontserratBold,
    fontSize: 12,
    letterSpacing: 0.92,
    lineHeight: 15,
  },
  content: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export { titledPanel };
