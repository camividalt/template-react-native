export const isNotEmptyString = (str) => str !== undefined && str !== null && str !== '';

export const isEmptyString = (str) => typeof str === 'string' && str === '';

export const removeAccents = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const capitalizeFirstLetter = (text) => {
    const newText = text?.toLowerCase();
    return newText?.charAt(0).toUpperCase() + newText?.slice(1);
};

export const clearString = (str) => {
    const clearString = str
        .split(' ')
        .join('')
        .split('  ')
        .join('')
        .split('\n')
        .join('')
        .split(':')
        .join('')
        .split('#')
        .join('');
    const withoutAccentMark = clearString.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return withoutAccentMark;
};