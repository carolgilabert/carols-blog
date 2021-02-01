module.exports = (value) => {
    const dateObj = new Date(value);
    return dateObj.toISOString();
};
