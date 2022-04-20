# Accomplishments

## Front End
* Installed NVM 0.39.1, Node 10.13.0, Angular CLI 10.2.1
* Created two services in Angular which connect to Backend
  * Home page to receive suggsetions on movies, discussions and news.
  * Page to add new movies and discussions into the database.
 
 ## Output for Service 1- Home Page
 
https://user-images.githubusercontent.com/38401094/152626946-f15fab20-2439-455c-a628-7e81f1092122.mp4


## Output for service 2- Add new movies and discussions

https://user-images.githubusercontent.com/38401094/152626951-9666a38b-e4bf-44e6-b8e9-5f14e682c237.mp4


## Back End
* Installed golang for programming (on Mac and Windows)
* Installed sqlite3 for databse
* Created two services in Go which connect to SQLite
  * Ingestion of Movie
  * Retrieval of all Movies

###### Services Performed

* Service 1- [Ingestion of movies into the database](https://github.com/AkshithSagar/MyMovieList/tree/main/backend/IngestiontoDatabase)
* Create Handler - IngestAllMovies
* This function is used to create new columns for movies and ingest them to the database.
* Service 2- [Retrieval of movies from the database](https://github.com/AkshithSagar/MyMovieList/tree/main/backend/getAllMovies)

###### Testing
* The testing of the API is done through the command line itself using the following commands-
* curl http://localhost:8080
* This command shows if the API is running correctly or not
* curl http://localhost:8080/movies 
* The command displays all the records of the particular table



## POST - addMovie
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

## Output for Service 1- Ingestion of Movies to the Database (sqlite3)


https://user-images.githubusercontent.com/48876044/152602087-7ff765aa-5048-4de1-9c97-d0b919785509.mp4



## Output for Service 2- retrieval of Movies from the Database (sqlite3)

https://user-images.githubusercontent.com/46960754/152602225-41179121-670a-4b34-904d-820fcb48ad86.mp4

