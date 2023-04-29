// Setting up MiddleWares and Express.
module.exports = app => {
    app.set('port', 3000); // TODO: Export port number as a config variable centralized.
    app.set('json spaces', 4);
}