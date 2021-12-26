import moment from 'moment-timezone';
import 'moment/locale/da';
import 'moment/locale/ru';

export const setMomentLocale = (name) => {
  // globally set the locale of moment to the venue locale
  moment.locale(name);
};
