const put = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const get = (key, defaultValue = null) =>
    JSON.parse(localStorage.getItem(key)) || defaultValue;

const clear = () => localStorage.clear();

export { clear, put, get };
