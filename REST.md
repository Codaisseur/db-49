# REST

REpresentational State Transfer.

1. Operations as HTTP methods
2. Respond with appropriate status codes
3. Clean and meaningful URLs.

### Operations as HTTP methods

CRUD:

- Create: POST
- Read: GET
- Update: PUT, PATCH
- Delete: DELETE

### Respond with appropriate status codes

- 404 (not found)
- 401 (unauthorized)
- 200 (success, all good)
- 500 (internal server error)
- 300 (redirect)
- 505 (HTML version not supported by browser)
- 408 (request timeout)

- 200... => Different flavours of success => (all good!)
- 300... => Redirects => Not here
- 400... => User/Client error => You screwed up
- 500... => Server error => I screwed up

## Clean and meaningful urls:

POST - /users
GET - /users

// Predictable
GET - /lists
POST - /lists
GET - /lists/:id
PATCH - /lists/:id

// Unpredictable!
/createNewUser
/getAllUsers
/getLists
...

Endpoint is made up of:

1. 'url'
2. method
