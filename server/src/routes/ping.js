module.exports = function (app) {
    app.get('/api/ping', (req, res) => res.sendStatus(200));
};
