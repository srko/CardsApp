const express = require('express');

const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const databaseConfig = require('../config/db');
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect(databaseConfig.url, (err, db) => {
  if (err) return console.log(err);

  // POST
  router.post('/', (req, res) => {
    console.log(req.body);
    const answer = { text: req.body.body, score: req.body.score };

    db.collection('answers').insert(answer, (err, result) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  // GET
  router.get('/', (req, res) => {
    db.collection('answers').aggregate({ $sample: { size: 10 } }, (err, item) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(item);
      }
    });
  });

  // DELETE
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };

    db.collection('answers').remove(details, (err, item) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(`Note ${id} deleted`);
      }
    });
  });

  // UPDATE
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    const answer = { text: req.body.body, score: req.body.score };

    db.collection('answers').update(details, answer, (err, result) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(answer);
      }
    });
  });
});

module.exports = router;
