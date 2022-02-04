# MyMovieList <br />

## Project for SE 2022 <br />

**Project Members-** <br />

* **Aarshee Bhattacharya** <br />
* **Akshith Sagar Ambati** <br />
* **Dhanush Pakanti** <br />
* **Ipshita Aggarwal** <br />

### Tech stack <br />
Platform | Technology
-------- | ---------
Front End|Angular
Back End |Golang
Server   |
Database |

**Note-The server and the databse needs to be decided as the project proceeds.**

#### Description <br />

* MyMovieList web application is a movie and show cataloging web application where the users can use a list-like system to track and score movies and shows.<br />
* It can also be used as a discussion forum and a movie/show search database. <br />
* Below are some of the features that we plan to implement (they have not been prioritized yet)-<br />
  * Users can add movies/shows to their list and mark them as completed/currently watching/plan to watch.<br />
  * Users can add scores to the movies/shows and add a small review.<br />
  * Users can search for movies and shows based on genre and score.<br />
  * Users can see all reviews of the movies and shows that they search for new user profiles can be created.<br />
  * Users can search for other users based on their username and share their lists, discussions, reviews and comments.<br />
  * The application will provide average scores to movies and shows based on scores.<br />

##### Backend Setup

###### Steps for connecting to the database on mac

* Database-SQLite
* Backend Programming Language
* Install xcode using xcode-select --install
* Install homebrew using /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* Then we need to check if we have the newest version of homebrew by using the command brew update
* The next step is to install go using homebrew using the command brew install golang
* Then we need to setup the database and we have chosen sqlite3 so we install it by using the command brew install golang

###### Setting up the environment

* The IDE we used is Visual Studio Code and we just install the extension of go language on the IDE.

###### Services Performed

* Service 1- [Ingestion of movies into the database](https://github.com/AkshithSagar/MyMovieList/tree/main/backend/IngestiontoDatabase)
* Service 2- Retrieval of movies from the database

###### Testing

* The testing of the API is done through the command line itself using the following commands-
* curl http://localhost:8080
* This command shows if the API is running correctly or not
* curl http://localhost:8080/movies 
* The command displays all the records of the particular table

## Steps for backend setup on Windows <br />
  * [Download and Install Go]( https://go.dev/doc/install)
  * Install the SQLite browser of your choice, eg - ( "DB Browser for SQLite")
  * Clone the github repository 
  * Install a Windows gcc toolchain, eg - [TDM-GCC]( https://jmeubank.github.io/tdm-gcc/ )
  * Install any packages for go using this gcc toolchain 
  * The go program that you are willing to run must also be done through the gcc toolchain
  * You can either use a text editor to see the source code or an IDE (we used VScode to develop the package)

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

  
