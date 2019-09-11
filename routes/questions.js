var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const databaseConfig = require('../config/db');
var ObjectID = require('mongodb').ObjectID;


MongoClient.connect(databaseConfig.url, (err, db) => {
    if (err) return console.log(err)

    // POST
    router.post('/', (req, res) => {
      const question = { text: req.body.body };

      db.collection('questions').insert(question, (err, result) => {
        if (err) {
          res.send({'error': 'An error has occurred'});
        } else {
          res.send(result.ops[0]);
        }
      })
    })

    // GET
    router.get('/', (req, res) => {
      console.log(123);
        db.collection('questions').aggregate({ $sample: { size: 1 }}, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });

    // GET by ID
    router.get('/:id', (req, res) => {
      const id = req.params.id;
      const details = { '_id': new ObjectID(id) };

      db.collection('questions').findOne(details, (err, item) => {
        if (err) {
          res.send({'error': 'An error has occurred'});
        } else {
          res.send(item);
        }
      });
    });

    // DELETE
    router.delete('/:id', (req, res) => {
      const id = req.params.id;
      const details = { '_id': new ObjectID(id) };

      db.collection('questions').remove(details, (err, item) => {
        if (err) {
          res.send({'error': 'An error has occurred'});
        } else {
          res.send('Note ' + id + ' deleted');
        }
      });
    });

    // UPDATE
    router.put('/:id', (req, res) => {
      const id = req.params.id;
      const details = { '_id': new ObjectID(id) };
      const question = { text: req.body.body };

      db.collection('questions').update(details, question, (err, result) => {
        if (err) {
          res.send({'error': 'An error has occurred'});
        } else {
          res.send(question);
        }
      })
    })

  }
);



module.exports = router;
