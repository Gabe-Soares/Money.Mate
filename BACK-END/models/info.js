// Exporting info model.
module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback({ application: 'Money.Mate' })
        }
    }
}