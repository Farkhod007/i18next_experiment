import { en } from './lang/en.js';
import { uz } from './lang/uz.js';

i18next.init({
    lng: 'en',
    debug: true,
    interpolation: {
        format: (value, format, lang) => {
            if (format === 'uppercase') return value.replace(value[0], value[0].toUpperCase());
            return value;
        }
    },
    resources: {
        en,
        uz
    }
});

document.querySelectorAll('[data-i18n]').forEach((element) => {
    const data = element.dataset.i18n.split(',');
    let options;
    eval('options = ' + data[1]);
    element.innerHTML = i18next.t(data[0], options);
});