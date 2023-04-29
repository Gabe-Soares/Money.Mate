// Exporting routes configuration.
module.exports = app => {
    const Info = app.models.info;

    app.get('/', (req, res) => {
        Info.findAll({}, (info) => {
            res.json(info);
        });
    });
}