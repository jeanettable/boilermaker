const router = require('express').Router();

// route mounting done in this file
// ie. router.use('/users/, require('/users/)); // matches all requests to /api/users/

// handle api routes that don't exist:
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });

module.exports = router;