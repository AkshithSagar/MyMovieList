# Accomplishments in Sprint 4

## Backend

## Discussions Table 
* Added a new table named discussions and linked it with the other tables, users and movies
* Functionalities added for the discussions table- add discussions to the table and get all discussions

### User Logout
* In the last sprint, we logged in a user and generated a cookie for it. In this sprint, we implemented the logout functionality. 
* A user will automatically log out after 24 hours, but a logout can also be manually triggered. 
* There is no request body for this endpoint as it automatically finds the cookie from the system and deletes it. 
* The endpoint is http://localhost:3000/logout
* Video - 



https://user-images.githubusercontent.com/46960754/163886638-224c881b-a871-4a14-86de-4fe3478fa450.mp4

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
#### Combined video for setting and getting the movie status for a user


https://user-images.githubusercontent.com/46960754/163886554-59af3d55-1fb7-453d-a9d4-ead41c8af5dd.mp4



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
* Video - 

https://user-images.githubusercontent.com/46960754/163888046-599314a9-2918-4706-a50e-fe66146a6da0.mp4

### Backend Testing screenshot - 

![image](https://user-images.githubusercontent.com/46960754/163888182-289fefe3-36b4-4f6a-94ba-303ad36538f5.png)



## Front End

### Home page updated with Movies and Images. 
### Integrated "Add Discussions" and Display the disussions in "Find discussions".
### Search movie bar updated to work with all the movies and Search discussions updated to work with all discussions. 
### Navigation with Dynamic Data passing through various components. 
### Added Signup and Login Functionaility for Users.
### A movie page with all the details for that movie added, will work for all movies added.
### Cypress test for frontend. 


