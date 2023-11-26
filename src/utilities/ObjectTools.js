export const updateObject = (oldObject, updatedValues) => ({
        ...oldObject,
        ...updatedValues,
    });

export const isEmptyArray = array => !array || array.length === 0;

export const isEmptyString = str => !str || str.length === 0 || typeof str !== 'string';

export const objectToQueryParams = params => {
    let queryParams = '?';
    Object.keys(params).forEach((key, index) => {
        queryParams += `${key}=${params[key]}`;

        if (index < Object.keys(params).length -1) {
            queryParams += '&';
        }

    });
    return queryParams;
};

export const objectToArray = object => Object.entries(object).map(([key, value]) => ({ key, value }));

export const isAnObject = obj => {
    console.info(typeof obj === 'object' && obj !== null)
    return typeof obj === 'object' && obj !== null;
}
