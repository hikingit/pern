module.exports = function (app) {
    /* eslint-disable global-require */
    // require('./org.js')(app);
    // require('./address.js')(app);
    // require('./user.js')(app);
    require('./ping.js')(app);
    /* eslint-enable global-require */
};
