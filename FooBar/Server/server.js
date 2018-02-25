const express = require('express');
const bodyParser = require('body-parser');
var tedious = require('tedious');
const uuidv4 = require('uuid/v4');
// Create a new instance of express
const app = express();
const Sequelize = require('sequelize');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

const sequelize = new Sequelize('foobardb', 'foobar@foobardb', 'ClubHub123', {
  host: 'foobardb.database.windows.net',
  dialect: 'mssql',
  dialectOptions: {
    encrypt: true
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const restaurants = sequelize.define('restaurants', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  score: {
    type: Sequelize.INTEGER
  }
});

// Tell express to use the body-parser middleware and to not parse extended bodies
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json({ type: 'application/json' }));
// // Route that receives a POST request to /user
// var sql; //stores the sql query

/*
Syntax to change score:
Json request:

{
	"id":"<ID OF RESTAURANT>",
	"scoreChange": <NUMBER TO CHANGE>
}
*/

app.post('/changeScore', function(req, res) {
  res.set('Content-Type', 'application/json'); //sets the content to json

  sequelize
    .query(
      "SELECT [score] FROM [restaurants] WHERE [id] = '" + req.body.id + "';"
    )
    .then(initialNumber => {
      if (initialNumber.score === undefined) {
        return sequelize
          .transaction(function(t) {
            // chain all your queries here. make sure you return them.
            return restaurants.create(
              {
                id: req.body.id, //initializes restaurant id
                score: req.body.scoreChange //initializes score
              },
              { transaction: t }
            );
          })
          .then(function(result) {
            console.log(result);
            // Transaction has been committed
            // result is whatever the result of the promise chain returned to the transaction callback
          })
          .catch(function(err) {
            console.log(err);
            // Transaction has been rolled back
            // err is whatever rejected the promise chain returned to the transaction callback
          });

        res.send(result); //posts the results
        res.send({ status: 200, error: null, response: results }); //sends status
      } else {
        console.log(initialNumber[0][0].score + req.body.scoreChange),
          restaurants
            .update(
              {
                score: initialNumber[0][0].score + req.body.scoreChange //adds new points to initial score
              },
              {
                where: {
                  id: req.body.id
                }
              }
            )
            .then(() => {});
      }
    });

  return;
});
app.post('/createRestaurant', function(req, res) {
  res.set('Content-Type', 'application/json'); //sets the content to json
  return sequelize
    .transaction(function(t) {
      // chain all your queries here. make sure you return them.
      return restaurants.create(
        {
          id: req.body.id, //initializes restaurant id
          score: req.body.score //initializes score
        },
        { transaction: t }
      );
    })
    .then(function(result) {
      console.log(result);
      // Transaction has been committed
      // result is whatever the result of the promise chain returned to the transaction callback
    })
    .catch(function(err) {
      console.log(err);
      // Transaction has been rolled back
      // err is whatever rejected the promise chain returned to the transaction callback
    });

  //   sql =
  //     "INSERT INTO user  (user_id, first_name, last_name, email) VALUES ('" + //sql insert statement
  //     uuidv4() + //generates unique ID
  //     "', '" +
  //     req.body.first_name +
  //     "','" +
  //     req.body.last_name +
  //     "','" +
  //     req.body.email +
  //     "');";
  //   console.log(sql);
  //   connection.query(sql, function(error, results, fields) {
  //     if (error) {
  //       console.log(error);
  //     }

  res.send(result); //posts the results
  res.send({ status: 200, error: null, response: results }); //sends status
});

app.get('/getRestaurants', function(req, res) {
  res.set('Content-Type', 'application/json'); //sets the content to json
  restaurants.findAll().then(restaurant => {
    res.send(restaurant);
  });
});

app.post('/clearRestaurants', function(req, res) {
  return sequelize
    .transaction(function(t) {
      // chain all your queries here. make sure you return them.
      restaurants.truncate();
      return 'Successfully cleared';
    })
    .then(function(result) {
      console.log(result);
      // Transaction has been committed
      // result is whatever the result of the promise chain returned to the transaction callback
    })
    .catch(function(err) {
      console.log(err);
      // Transaction has been rolled back
      // err is whatever rejected the promise chain returned to the transaction callback
    });
});

// var connection = mysql.createConnection('./config.json');

// Tell our app to listen on port 3000
app.listen(3000, function(err) {
  if (err) {
    throw err;
  }
  console.log('Server started on port 3000');
});
