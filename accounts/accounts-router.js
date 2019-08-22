const router = require('express').Router();

const db = require('../data/dbConfig.js');

router.get('/', (req, res) => {
  db('accounts')
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: 'failed retrieve the  accounts' });
    });
});

module.exports = router;