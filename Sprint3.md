# Accomplishments

## Backend
### Storing and Retrieving Images from Database
* There is a continuation from Sprint 2. We are storing and retrieving images to and from our sqlite database
* The first step here is to store or upload our image files onto a server using golang
* Then the second step is to store the path of the file in our database
* We are utilising the TempFile API that has been introduced in Go version 1.11

### Filter Based Search from our Database
* We are searching based on two parameters in this sprint
* The first paramater is the MovieName
* The second parameter is the MovieID
* We are also checking the condition if the movie name or id is not present and displaying messages respectively


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


