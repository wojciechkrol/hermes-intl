import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';

import '@formatjs/intl-displaynames/polyfill';
import '@formatjs/intl-displaynames/locale-data/en'; // locale-data for en

import '@formatjs/intl-listformat/polyfill';
import '@formatjs/intl-listformat/locale-data/en'; // locale-data for en

import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/en'; // locale-data for en

import '@formatjs/intl-numberformat/polyfill';
import '@formatjs/intl-numberformat/locale-data/en'; // locale-data for en

import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en'; // locale-data for en

import '@formatjs/intl-datetimeformat/polyfill';
import '@formatjs/intl-datetimeformat/locale-data/en'; // locale-data for en
import '@formatjs/intl-datetimeformat/add-all-tz'; // Add ALL tz data

// @ts-ignore
Date.prototype._toLocaleString = Date.prototype.toLocaleString;
Date.prototype.toLocaleString = function (a, b) {
  if (b && Object.keys(b).length === 1 && 'timeZone' in b && a === 'en-US') {
    return Intl.DateTimeFormat('en-us', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: b.timeZone,
    })
      .format(this)
      .replace(/(\d{2})\/(\d{2})\/(\d{4}),/g, '$3-$1-$2');
  }
  // @ts-ignore
  return this._toLocaleString(a, b);
};
