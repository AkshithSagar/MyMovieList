# MyMovieList API Documentation <br />

The document covers the technical aspects of the backend APIs. All services developed have been covered in this document. 
There are 4 groups of services developed - 
  1) Movie related services
  2) User Related services
  3) Discussions 
  4) User and Movie Status

*Prerequisite - backend setup completed from the README*

## Movie Related Services 
This group contains endpoints that support adding, deleting and viewing of movie(s).

### POST - addMovie
 * This service adds a movie to the "movies" database
  * It can be tested using http://localhost:3000/addMovie on postman or any browser. 
  * Sample Input -
  
 ```json
   {
        "name": "One Piece",
        "description": "The world's greatest exposition of the pirates, by the pirates, for the pirates—the Pirates Festival.",
        "review": "movie review",
        "rating": "10",
        "genre": "Action, Shonen"
    }
   ```   

### GET - getAllMovies
  * This endpoint returns all the movies stored in the database and their respective attributes
  * It can be tested using http://localhost:3000/getAllMovies on postman or any browser. 
  * Sample Result - 
  ```json
   {
        "ID": 1,
        "Name": "movie1",
        "Desc": "description1",
        "Review": "review1",
        "Rating": "rating1",
        "Genre": "genre1"
    },
    {
        "ID": 2,
        "Name": "movie2",
        "Desc": "description2",
        "Review": "review2",
        "Rating": "rating2",
        "Genre": "genre2"
    }
   ```
   
### Get - getMovieByGenre
* This endpoint is for getting all movies as per the genre  
* The header key is "genre" and the value is the genre with respect to which you want to fetch the movies
* It can be tested using http://localhost:3000/getMovieByGenre on postman or any browser
* The response is a list of movies as follows - 

```
[
    {
        "ID": 5, //movie id
        "Name": "movie name",
        "Desc": "Description of the movie",
        "Review": "Movie Review",
        "Rating": "Movie Rating",
        "Genre": "Movie genres"
    },
    
    
    {
        "ID": 6, //movie id
        "Name": "movie name",
        "Desc": "Description of the movie",
        "Review": "Movie Review",
        "Rating": "Movie Rating",
        "Genre": "Movie genres"
    },
]

```
   
 ### POST- deleteMovieByID
  * This endpoint deletes a movie from the database based on the movie ID
  * The sample input is shown below - 
  ```json
   {
    "movieid" : "1"
   }
   ```
  * Run the go program in the directory backend/getAllMovies/ using the command - go run .\cmd\main.go
  * It can be tested using http://localhost:3000/deleteMovieByID on postman or any browser. 

## User Related Services 
The group of endpoints contain services that support the user and their account.

### POST - login
* This endpoint is for user login (authentication) with email id and password - this also generates a session cookie for 24 hours
* It can be accessed directily using the POST service - http://localhost:3000/login
* The request body for this endpoint is as follows - 

```
{

    "email" : "luffy@one-piece.com",
    "password" : "pirateKing"

}
```

And the response is a message whether the login was successfull or not 

```
{
    "message": "success"
}
```
The cookie returned is as follows - 

<img width="892" alt="loginCookie" src="https://user-images.githubusercontent.com/46960754/161305218-f1572235-dadb-4e3e-ab42-1ad05a53fea4.png">

### GET - user
* Get user - this is for retrieving the currently logged in user based on the session cookie
* It can be accessed directily using the GET endpoint - http://localhost:3000/user
* There is no request body for this as this service looks for the current session cookie and provides a response. The response looks as follows - 

```
{
    "Id": 2,
    "Name": "Luffy",
    "Email": "luffy@one-piece.com",
    "Password": "JDJhJDE0JGJpWUZpWjJiaHM5MWpaLzhocFRqUE92eGI4YjNQMUIwTng4UUR2VUM0SnQuYTdyM1FPVG82"
}
```

The cookie returned is as follows - 

<img width="935" alt="getUserCookie" src="https://user-images.githubusercontent.com/46960754/161306194-9903382e-a94b-4d63-82c5-cef5baf99a49.png">


### POST - Logout
* This endpoint is for logging out a user.
* A user will automatically log out after 24 hours, but a logout can also be manually triggered. 
* There is no request body for this endpoint as it automatically retrieves the cookie from the system and deletes it. 
* The endpoint is http://localhost:3000/logout

## User and Movie Mapping
After creating the users and movies, the next step is to map the user to their respective movie. We created a movies_status table that maintains the unique user ID, the corresponding unique movie ID and the status of that movie for the user (completed, watching, plan to watch, etc). The two IDs act as foreign keys and link the movies_status table to the user table as well as the movie table. 

### POST - setMovieStatus
* This service adds the user id and movie id as well as the current status of the movie for the user to the database. 
* The POST endpoint is http://localhost:3000/setMovieStatus
* The request body for this endpoint is as follows - 
```
{
        "userid": "2",
        "movieid": "5",
        "status": "Completed"
}
```
### Get - getMovieStatus
* This service retrieves all the movies and the status for the user that is provided as a part of the request.
* The header key is "userid" and the value is the ID of the user for which the movies have to be fetched
* The GET endpoint is http://localhost:3000/getMovieStatus
* The response is as follows - 

```
[
    {
        "ID": 5, //movie id
        "Name": "movie name",
        "Desc": "Description of the movie",
        "Review": "Movie Review",
        "Rating": "Movie Rating",
        "Genre": "Movie genres"
    }
]

```
