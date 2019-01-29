const dbpool = require('./index.js');

export function createUser(username, password, firstName, lastName, email) {
    let client;

    return dbpool.connect()
        .then(_client => {
            client = _client;
            return client.query(
                'INSERT into users (username, password, first_name, last_name, email) values ($1, $2, $3, $4, $5) RETURNING id',
                [username, password, firstName, lastName, email]);
        })
        .then(result => {
            client.release();
            if (result.rows.length === 0) return Promise.reject(null);
            return Promise.resolve({
                id: result.rows[0].id,
                username,
                firstName,
                lastName,
                email,
            });
        })
        .catch(error => {
            client.release();
            return Promise.reject(error);
        });
}

export function getUser(id) {
    let client;

    return dbpool.connect()
        .then(_client => {
            client = _client;
            return client.query(
                'INSERT into users (username, password, first_name, last_name, email) values ($1, $2, $3, $4, $5) RETURNING id',
                [username, password, firstName, lastName, email]);
        })
        .then(result => {
            client.release();
            if (result.rows.length === 0) return Promise.reject(null);
            return Promise.resolve({
                id: result.rows[0].id,
                username,
                firstName,
                lastName,
                email,
            });
        })
        .catch(error => {
            client.release();
            return Promise.reject(error);
        });
}

export function updateUser(id) {
    let client;

    return dbpool.connect()
        .then(_client => {
            client = _client;
            return client.query(
                'INSERT into users (username, password, first_name, last_name, email) values ($1, $2, $3, $4, $5) RETURNING id',
                [username, password, firstName, lastName, email]);
        })
        .then(result => {
            client.release();
            if (result.rows.length === 0) return Promise.reject(null);
            return Promise.resolve({
                id: result.rows[0].id,
                username,
                firstName,
                lastName,
                email,
            });
        })
        .catch(error => {
            client.release();
            return Promise.reject(error);
        });
}

export function removeUser(id) {
    let client;

    return dbpool.connect()
        .then(_client => {
            client = _client;
            return client.query(
                'INSERT into users (username, password, first_name, last_name, email) values ($1, $2, $3, $4, $5) RETURNING id',
                [username, password, firstName, lastName, email]);
        })
        .then(result => {
            client.release();
            if (result.rows.length === 0) return Promise.reject(null);
            return Promise.resolve({
                id: result.rows[0].id,
                username,
                firstName,
                lastName,
                email,
            });
        })
        .catch(error => {
            client.release();
            return Promise.reject(error);
        });
}
