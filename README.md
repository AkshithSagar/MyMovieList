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

## Summary <br />
* MyMovieList web application is a movie and show cataloguing web application where the users can use a list-like system to track and score movies and shows.
* It can also be used as a discussion forum and a movie/show search database.
* Below are some of the features that we have implemented-
* Users can add new movie data or new discussions to the database.
* Users can search for movies and shows based on id,name and genre-
    * If the users are not aware of the complete id,name or genre they just need to enter a letter and all the related suggestions will appear. 
* Users can see reviews of the movies and shows that they search-
    * This will help them to filter out the best rated movies. 
    * Additionally, we have implemented the code for listing out the top five movies from the database based on the ratings.
* The application allows for user signup, login and authentication-
    * In the signup section we ask users to enter their credentials and save it in our database. 
    * The login section is simple and it is helpful in removing the hassle of duplicate user signups. 
    * The authentication is to validate the users by checking their username and password.
* The discussion board is open to all users where they can share their thoughts. We have an additional feature here as well where a new user can filter out the top five discussions

### Project Board -

https://github.com/AkshithSagar/MyMovieList/projects/1

### API Documentation -

https://github.com/AkshithSagar/MyMovieList/blob/main/API_Documentation.md#mymovielist-api-documentation-


### Sprint 4 Deliverables -

https://github.com/AkshithSagar/MyMovieList/blob/main/Sprint4.md#accomplishments-in-sprint-4


## Backend Setup

###### Setting up the environment

* The IDE we used is Visual Studio Code and we just install the extension of go language on the IDE.

###### Steps for backend setup on mac

* Database-SQLite
* Backend Programming Language
* Install xcode using xcode-select --install
* Install homebrew using /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* Then we need to check if we have the newest version of homebrew by using the command brew update
* The next step is to install go using homebrew using the command brew install golang
* Then we need to setup the database and we have chosen sqlite3 so we install it by using the command brew install golang


## Steps for backend setup on Windows <br />
  * [Download and Install Go]( https://go.dev/doc/install)
  * Install the SQLite browser of your choice, eg - ( "DB Browser for SQLite")
  * Clone the github repository 
  * Install a Windows gcc toolchain, eg - [TDM-GCC]( https://jmeubank.github.io/tdm-gcc/ )
  * Install any packages for go using this gcc toolchain 
  * The go program that you are willing to run must also be done through the gcc toolchain
  * You can either use a text editor to see the source code or an IDE (we used VScode to develop the package)
  * You can use DB Browser(sqlite3) for viewing your data in sqlite3


## FrontEnd Setup
   * Install NVM 0.39.1, Node 10.13.0 and Angular CLI 10.2.1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Demo Video Functionality
https://user-images.githubusercontent.com/38401094/164327023-dc818875-c51d-43c6-aed8-2178fdde2a8c.mp4

## Cypress test videos

https://user-images.githubusercontent.com/26251061/164312331-ce202801-cd3d-4c20-96a3-7608270ba008.mp4

https://user-images.githubusercontent.com/26251061/164312346-740b0fbb-e33a-4a8b-a400-a3e373150b55.mp4

https://user-images.githubusercontent.com/26251061/164312365-6808ed96-7460-4ab5-9be6-5ad0899405c2.mp4

https://user-images.githubusercontent.com/26251061/164312370-37405c87-6578-48f9-b91f-29fbc9a982d9.mp4

https://user-images.githubusercontent.com/26251061/164312381-37153996-de21-4c12-b9d1-11b19a4bb984.mp4

https://user-images.githubusercontent.com/26251061/164312383-6e94e0ba-1a35-4413-84a4-b0112fc24078.mp4

https://user-images.githubusercontent.com/26251061/164312386-75e7416e-86d8-4dbe-8960-5620c974edf8.mp4


## Backend test video

https://user-images.githubusercontent.com/46960754/164321885-a6d7aecb-6fda-4183-9a2d-c232139558e2.mp4

## Frontend Deployment

URL: https://curious-douhua-70ede4.netlify.app/
Note: Start backend before opening the URL.

https://user-images.githubusercontent.com/38401094/164345812-b7cded67-d00a-44e9-85a2-412451903757.mp4


