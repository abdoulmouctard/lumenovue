export default ({ store, next }) => {
    console.log(store.getters.count);
    return next();
};
