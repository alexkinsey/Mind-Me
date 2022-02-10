const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('mind_me');

    const animalsCollection = db.collection('animals');
    const animalsRouter = createRouter(animalsCollection);
    app.use('/mind-me/animals', animalsRouter);

    const foodCollection = db.collection('food');
    const foodRouter = createRouter(foodCollection);
    app.use('/mind-me/food', foodRouter);

    const locationsCollection = db.collection('locations');
    const locationRouter = createRouter(locationsCollection);
    app.use('/mind-me/locations', locationRouter);

    const celebsCollection = db.collection('celebs');
    const celebsRouter = createRouter(celebsCollection);
    app.use('/mind-me/celebs', celebsRouter);


  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
