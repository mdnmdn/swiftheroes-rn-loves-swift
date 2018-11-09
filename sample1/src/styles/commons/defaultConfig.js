import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const FONT_Montserrat = 'Montserrat-Medium';
export const FONT_MontserratBold = 'Montserrat-Bold';
export const FONT_MontserratSemiBold = 'Montserrat-SemiBold';
export const FONT_MontserratItalic = 'Montserrat-Italic';
export const FONT_MontserratBoldItalic = 'Montserrat-BoldItalic';
export const FONT_NunitoSans = 'NunitoSans-Regular';
export const FONT_NunitoSansBold = 'NunitoSans-Bold';
export const FONT_NunitoSansExtraBold = 'NunitoSans-ExtraBold';
export const WARM_GRAY = '#4A4A4A';
export const LIGHT_GRAY = '#7E7E7E';
export const DARK_GRAY = '#2D2D2D';
export const THIN_GRAY = '#909090';
export const MAIN_BLUE = '#002C43';
export const LIGHT_BLUE = '#114155';
export const WHITE = '#FFFFFF';
export const GREEN = '#00AD52';
export const DISPLAY_WIDTH = width;
export const DISPLAY_HEIGHT = height;
export const INNER_WIDTH = width - 50;
export const TABBAR_HEIGHT = 75; // TODO: manage android;
export const SWITCH_SIZE = { width: 50, height: 30, padding: 2 };
export const DEFAULT_PADDING = 25;
export const EVENT_DETAIL_STYLE = {
  'evento esterno': {
    container: '#F16C20',
  },
  'top management': {
    container: '#1392B7',
  },
  'job shadowing': {
    container: '#00C575',
  },
};
