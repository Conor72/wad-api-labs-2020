# Assignment 2 - Web API.
## Name: Conor Brett
## Features.
### Feature 1 - Display a list of Movies, Upcoming and TopRated
### Feature 2 - Login ability linked to mongoDB cluster
### Feature 3 - Sign up ability linked to mongoDB cluster
### Feature 4 - Upcoming + Top Rated integrated onto the API and mutable from Postman

## Installation Requirements


-git clone http:\myrepo.git

followed by installation

-git install

-npm install


## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an .env and what variables to put in it. Give an example of how this might be structured/done. REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

NODE_ENV=development
PORT=8080
HOST=YourTMBDKey
mongoDB=YourMongoDBURL
seedDb=true
secret=YourJWTSecret

## API Design
Give an overview of your web API design, perhaps similar to the following:


|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies |
| /api/upcoming | Get a list of upcoming movies |
| /api/topRated | Get a list of Top Rated Movies|
| /api/users | Get a list of users from MongoDB server| Posts to users faourites on api/users/username/favourites |



## Security and Authentication
Movies and Upcoming Movies pages are protected routes, you’ll need to sign up or login with a valid account to view the pages.



## Integrating with React App
Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example:
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};


#AGILE

# Assignment 2 - Agile Software Practice.

Name: Conor Brett

## Target Web API.

+ Get /api/movies - returns an array of movie objects.
+ Get /api/movies/:id - returns detailed information on a specific movie.
+ Put /api/movies/:id - update a specific movie. 

## Testing

+Cypress test for signup testing
+Cypress test for logging in testing 

+Mocha testing for users and movies - tests\functional\api

## Continuous Delivery/Deployment.

https://gitlab.com/conorbrett72/wad2-assignment2
https://dashboard.heroku.com/apps/conors-movies-api-staging

Integration of Heroku and Gitlab set up but page is not displaying.

Video Demonstration - https://www.youtube.com/watch?v=d-xt1EAC0wc&feature=youtu.be


