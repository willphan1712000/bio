const wait = (howLong) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(null);
        }, howLong);
    });
};
export default wait;
