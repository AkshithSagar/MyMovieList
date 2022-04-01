# Accomplishments

## Backend
### Filter Based Search from our Database
* We are searching based on the Genre of the movie in this sprint



### User Activities
The functionalities that we implemented in this sprint for the user are as follows -
* User login (authentication) with email id and password - this also generates a session cookie for 24 hours
The request body for this endpoint is as follows - 

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

It can be accessed directily using the POST service - http://localhost:3000/login

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

* User Registration with a unique email id and encrypted password

Below you can see a video for these services


https://user-images.githubusercontent.com/46960754/161304400-9b1a2255-66a4-48ab-9fd3-5b9b3151a595.mp4


##FrontEnd
###How to run the code
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


* Integration With BackEnd: Add Movies 
 * User is able to Add movies from the webpage into the database from the WebPage
 * User is able to Add Discussions from the webpage
 * Fetching data by Genre Filter

* Creation of new Login page and Sign up page created with form validation 
* Added Find page to find new discussions or add movies
* Routing user to their respective genre pages after selction from Find, from backend

### Testing
* Unit testing for the login page and signup page done
* Run tests using npm test

