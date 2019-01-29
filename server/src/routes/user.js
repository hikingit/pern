  module.exports = function (app) {
    // create user by POSTing to /api/user
    app.post('/api/user', async (req, res) =>
        createUser(req.body.username, req.body.password, req.body.firstName, req.body.lastName, req.body.email)
        .then(user => {
            console.log("user created id:", user.id);

            return res.status(200).send(user);
        })
        .catch(err => {
            logger.warn({
                category: 'USER',
                cmd: 'create',
                status: 'FAILED',
                msg: `Failed to create user "${req.body.username}"`,
                error: err
            });
            return res.sendStatus(403);
        }));
      };
