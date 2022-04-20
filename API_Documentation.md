# MyMovieList API Documentation <br />

The document covers the technical aspects of the backend APIs. All services developed have been covered in this document -

## GET - getAllMovies
  * This endpoint returns all the movies stored in the database and their respective attributes
  * Run the go program in the directory backend/getAllMovies/ using the command - go run .\cmd\main.go
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
   
  ### Get movie by genre (updated)
* In the last sprint, the get-movie-by-genre endpoint was a POST request, this sprint we changed it to a GET request with a header to comply with coding standards. 
* The header key is "genre" and the value is the genre with respect to which you want to fetch the movies
* The GET endpoint is http://localhost:3000/getMovieByGenre
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
   
    ## /deleteMovieByID
  * This endpoint deletes a movie from the database based on the movie ID
  * The sample input is shown below - 
  ```json
   {
    "movieid" : "1"
   }
   ```
  * Run the go program in the directory backend/getAllMovies/ using the command - go run .\cmd\main.go
  * It can be tested using http://localhost:3000/deleteMovieByID on postman or any browser. 


## POST - login
* User login (authentication) with email id and password - this also generates a session cookie for 24 hours
* It can be accessed directily using the POST service - http://localhost:3000/login
* The request body for this endpoint is as follows - 

```
{

    "email" : "luffy@one-piece.com",
    "password" : "killKaido"

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

## GET - user
* Get user - this is for retrieving the currently logged in user based on the session cookie
There is no request body for this as this service looks for the current session cookie and provides a response. The response looks as follows - 

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

It can be accessed directily using the GET service - http://localhost:3000/user

## User Logout
* In the last sprint, we logged in a user and generated a cookie for it. In this sprint, we implemented the logout functionality. 
* A user will automatically log out after 24 hours, but a logout can also be manually triggered. 
* There is no request body for this endpoint as it automatically finds the cookie from the system and deletes it. 
* The endpoint is http://localhost:3000/logout

## User and Movie mapping
Until the last sprint we were maintaining the user and movie data, there was no link between the two tables. In this sprint, we created a movies_status table that maintains the unique user ID, the corresponding unique movie ID and the status of that movie for the user (completed, watching, plan to watch, etc). The two IDs act as foreign keys and link the movies_status table to the user table as well as the movie table. Based on this, the following services have developed this sprint - 

### Set Movie Status (for the user)
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
### Get Movie Status
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
