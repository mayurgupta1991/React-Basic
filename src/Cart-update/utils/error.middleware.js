const errorHandler = (store) => (next) => (action) => {
    try {
        next(action);
    } catch(e) {
        console.log("AAAAAA, Error", e);
    }
}

export default errorHandler;