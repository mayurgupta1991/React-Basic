
const logger = (store) => (next) => (action) => {
    console.log(action.type, "ACTION");
    return next(action);
};

export default logger;