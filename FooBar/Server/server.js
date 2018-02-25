const Sequelize = require('sequelize');

const sequelize = new Sequelize('FooBar', 'FooBar', 'ClubHub123', {
  host: 'foobar-cluster.cluster-ct6cirtwqihh.us-east-1.rds.amazonaws.com',
  dialect: 'mysql'
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
  ID: {
    type: Sequelize.STRING
  },
  score: {
    type: Sequelize.INTEGER
  }
});

return sequelize
  .transaction(function(t) {
    // chain all your queries here. make sure you return them.
    return restaurants
      .create(
        {
          id: 'Abraham',
          lastName: 'Lincoln'
        },
        { transaction: t }
      )
      .then(function(user) {
        return user.setShooter(
          {
            firstName: 'John',
            lastName: 'Boothe'
          },
          { transaction: t }
        );
      });
  })
  .then(function(result) {
    // Transaction has been committed
    // result is whatever the result of the promise chain returned to the transaction callback
  })
  .catch(function(err) {
    // Transaction has been rolled back
    // err is whatever rejected the promise chain returned to the transaction callback
  });

restaurants.findOne().then(restaurants => {
  console.log(restaurants.get('score'));
});
