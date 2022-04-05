# Accomplishments

## Backend
### Filter Based Search from our Database
* We are searching based on the Genre of the movie in this sprint
* The video below shows how the filter works. We have assumed the genre as action but in the web api the frontend will be sending the particular genre to the backend for details



https://user-images.githubusercontent.com/48876044/161323470-fd2c2bcd-9fd1-4527-8812-c4cb64d0c0d6.mp4




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


## FrontEnd
### How to run the code
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


* Integration With BackEnd: Add Movies 
 * User is able to Add movies from the webpage into the database from the WebPage.
 * User is able to Add Discussions from the Webpage.
 

https://user-images.githubusercontent.com/26251061/161354995-9dfa9958-64f0-4b92-bb81-f6a73053904c.mp4


 * Fetching data by Genre Filter and Search through the list.


https://user-images.githubusercontent.com/26251061/161355131-b4c2c7a8-82f3-4451-9ddf-1c29366bace1.mov



* Creation of new Login page and Sign up page created with form validation. 


https://user-images.githubusercontent.com/26251061/161355193-4c9a154d-05f9-466a-a921-afbdaa9bf628.mov



https://user-images.githubusercontent.com/26251061/161355227-900de884-d8d1-47f3-91f8-f4328dad6353.mov



* Added Find page to find new discussions or add movies.
* Routing user to their respective genre pages after selction from Find, from backend.

### Testing
* Unit testing for the login page and signup page done.
* Run tests using npm test.

<img width="1203" alt="Screen Shot 2022-04-01 at 4 47 03 PM" src="https://user-images.githubusercontent.com/26251061/161355250-eaea1d57-e386-42aa-91c8-d045ee04aabf.png">

* Cypress Tests for all the pages.
* run tests using npx cypress run or nps cypress open


https://user-images.githubusercontent.com/38401094/161861798-9e54b9c4-cbb9-4045-929b-e9a785034fd7.mp4



https://user-images.githubusercontent.com/38401094/161861801-d7ed2b5a-91e6-4158-88af-1132cbb778a6.mp4



https://user-images.githubusercontent.com/38401094/161861802-fb003e4f-bcd3-49e7-a2ba-54a59fbb00dc.mp4



https://user-images.githubusercontent.com/38401094/161861803-2f4e68a9-7f52-4b40-8ae8-8ebc3f337083.mp4



