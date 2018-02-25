API url: 52.170.251.39:3000/(method)

## POST: /changeScore

Syntax to change score:
scoreChange is added to the existing score of the restaurant in the DB or initializes the score of a new restaurant

```JSON
{
"id":"<ID OF RESTAURANT>",
"scoreChange": <number>
}
```

## GET: /getRestaurants

Returns all restaurants and scores as JSON

## POST: /createRestaurant

<b>USE /changeScore INSTEAD!!</b>

Run when user swipes for the first time
Include the score of the

```JSON
{
"id":"<ID OF RESTAURANT>",
"score": <(initial swipe score) (int)>
}
```
