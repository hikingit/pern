const app = require('express')();
const bodyParser = require('body-parser');
require('./globals.js');

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());


// set up api calls
require('./routes')(app);

app.listen(app.get('port'), () => {
    /* eslint-disable no-console */
    console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-C to terminate.`);
    /* eslint-enable no-console */
});
