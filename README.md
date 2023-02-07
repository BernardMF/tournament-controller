# tournament-control

This API is designed to be used by a tournament host to control a Magic The Gathering tournament and for the players to register for it.
It is built using AWS Lambda and API Gateway and is written in Typescript.

## APIs

### /tournaments
  #### POST
    API to create new tournaments.
    On success returns 200 with the tournament id.

### /tournaments/{id}
  #### GET
      Returns information about the tournament with the given id.
      If it does not exist, it returns a 404.
