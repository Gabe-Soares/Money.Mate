// Booting up application.
module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log(`Money.Mate API - Listenning on port ${app.get('port')}.`);
    });
}