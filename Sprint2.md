# Accomplishments

## Backend
* Created the following services in Go which connect to SQLite
  * Fetching a movie based a filter attribute
  * Deletion of a movie based on movie ID
  * Updating a movie based on movie ID (a bug is raied for this to update multiple attribute at once)
  
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
  
### Output

https://user-images.githubusercontent.com/46960754/156820285-fe7dc26d-a721-4ce5-bd3e-cf7cc4ecfcd8.mp4


 ## /updateMovieByID
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
 
 ### Output
 
 https://user-images.githubusercontent.com/46960754/156820296-e85ab393-1977-4a40-809e-c69771b11f94.mp4

