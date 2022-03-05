# Accomplishments

## Backend
* Created the following services in Go which connect to SQLite
  * Fetching a movie based a filter attribute
  * Deletion of a movie based on movie ID
  * Updating a movie based on movie ID (a bug is raied for this to update multiple attribute at once)
  * Done unit testing at the backend
  
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

### Unit Testing

* The code which was submitted previously under the file Connection to Databse and the unit test should be under the same folder
* The file name for unit testing should be followed by the extension _test.go
* There are two main functions used in unit testing-
* The setup function is used for initializing an in memeory sqlite database
* This is used to return the App pointer that we had declared in the main program
* The teardown function is used to accept the same pointer and close the database

#### The Commands Used to Run the Unit Tests

* go test-go test compiles test files that have been declared in a package with the suffix _test.go and then treats it as a separste package and then links them with the main test and then runs them.
* go test -v
  
##### Output

https://user-images.githubusercontent.com/46960754/156820285-fe7dc26d-a721-4ce5-bd3e-cf7cc4ecfcd8.mp4


 ###### /updateMovieByID
 * This endpoint updates a movie and the respective attribute in the database based on the movie ID
  * The sample input is shown below - 
  ```json
   {
   "movieid" : "1",
   "rating" : "100"
  }
   ```
  * It can be tested using http://localhost:3000//updateMovieByID on postman or any browser. 
  * a bug is raied for this to update multiple attribute at once 
 
 ####### Output
 
 https://user-images.githubusercontent.com/46960754/156820296-e85ab393-1977-4a40-809e-c69771b11f94.mp4

## FrontEnd
* Made the following updates to the front end:
  * Toolbar now switched to side-nav bar using event liseterners when  the size of the window is reduced
  * Added routing to the buttons on tool bar.
  * Tabs added to the home page to accomdate seperate pages for suggested movies and discussion/forums using mat-tab
  * Allignment of cards displaying movie suggestions.
  * Added button for user to like and share the suggested movie.
  * Overall UI of the Add Data/Routing page is updated - used tabs to seperate the movies and discussions.
  * Added validation to both the forms : Made a few field as required - see in video (turns red) and added pattern validation to URL field.
  * On clicking submit for movies tab, validates the form and sends data as object to the back end and logs into the console.
 
* Unit and Cypress Testing
