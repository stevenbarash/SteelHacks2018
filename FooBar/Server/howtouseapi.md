API url: 52.170.251.39:3000/(method)

## POST: /createRestaurant

Run when user swipes for the first time
Include the score of the

```JSON
{
"id":"<ID OF RESTAURANT>",
"score": <(initial swipe score) (int)>
}
```

## POST: /changeScore

Syntax to change score:
scoreChange is added to the existing score of the restaurant in the DB

```JSON
{
"id":"<ID OF RESTAURANT>",
"scoreChange": <NUMBER TO CHANGE (int)>
}
```

## GET: /getRestaurants

Returns all restaurants and scores as JSON
