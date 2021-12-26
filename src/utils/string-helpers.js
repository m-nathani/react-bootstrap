// When price is less than 20,000 show full, otherwise abbreviate
// test
export const formatAmountWithCurrencySymbol = ({
  amount = 0,
  symbol = 'MY,MYR',
  defaultLanguage = 'en',
  minDigits = 2,
}) => {
  const [countryIsoCode, currencyCode] = (String(symbol) || 'MY,MYR').split(',');
  let options = {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'symbol',
    minimumFractionDigits: minDigits,
    maximumFractionDigits: 2,
  };

  if (+amount > 20000) {
    options = {
      ...options,
      notation: 'compact',
      compactDisplay: 'short',
    };
  }

  return new Intl.NumberFormat(`${defaultLanguage}-${countryIsoCode}`, options).format(amount);
};

// for older browser support
export const replaceAll = (str = '', find = '', replace = '') => {
  if (String.prototype?.replaceAll) {
    return str.replaceAll(find, replace);
  }
  return str?.toString()?.replace(new RegExp(`\\${find}`, 'g'), replace);
};

export const limitString = (str = '', limit = 20) => {
  if (str && str.length > limit) {
    return `${str.substring(0, limit)}...`;
  }
  return str;
};
