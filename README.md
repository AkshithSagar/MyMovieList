# MyMovieList <br />

## Project for SE 2022 <br />

**Project Members-** <br />

* **Akshith Sagar Ambati** - Frontend <br />
* **Dhanush Pakanti** - Frontend <br />
* **Aarshee Bhattacharya** - Backend <br />
* **Ipshita Aggarwal** - Backend <br />

### Tech stack <br />
Platform | Technology
-------- | ---------
Front End|Angular
Back End |Golang
Database |SQLite

**Note-The server and the databse needs to be decided as the project proceeds.**

#### Description <br />

* MyMovieList web application is a movie and show cataloging web application where the users can use a list-like system to track and score movies and shows.<br />
* It can also be used as a discussion forum and a movie/show search database. <br />
* Below are some of the features that we plan to implement (they have not been prioritized yet)-<br />
  * Users can see suggested movies and discussions based on ratings.<br/>
  * Users can add new movie data or a new discussions to the database.
  * Users can search for movies and shows based on name, genre.<br />
  * Users can see reviews of the movies and shows that they search.<br />
  * The application allows for user signup, login and authentication.

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
* Create Handler - IngestAllMovies
* This function is used to create new columns for movies and ingest them to the database.
* Service 2- [Retrieval of movies from the database](https://github.com/AkshithSagar/MyMovieList/tree/main/backend/getAllMovies)

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


### FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Demo Video Functionality

## Cypress test video



  
   
