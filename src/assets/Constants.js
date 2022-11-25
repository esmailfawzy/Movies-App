import {Dimensions} from 'react-native';

export const COLORS = {
  white: '#fff',
  main: '#2C2C2C',
  gold_rating: '#FFB039',
  blur_color: '#FFAC4A',
  card_bg: '#818181',
  black: '#000',
};

export const fontFamily = 'Roboto-Bold';

export const SIZES = {
  h1: 18,
  h3: 14,
  icon_size: 30,
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
  marginBottom: Dimensions.get('window').height * 0.03,
  txt_opacity: 0.6,
  card_opacity: 0.3,
  card_width: Dimensions.get('window').width * 0.9,
  card_height: Dimensions.get('window').height * 0.14,
  card_border: 25,
  rating_border: 10,
};

export const ACTIVE_OPACITY = 0.7;
