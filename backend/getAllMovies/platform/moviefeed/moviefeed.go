package moviefeed

//property injection - abstract the db - it's a good practice
import (
	"database/sql"
	"fmt"
	"log"
	"strconv"
)

type Feed struct {
	DB       *sql.DB
	DBMStats *sql.DB
}

func (feed *Feed) GetAllMovies() []Movie {
	movies := []Movie{}
	rows, _ := feed.DB.Query(`
		SELECT * FROM movies
	`)
	var id int
	var name string
	var rating string
	var desc string
	var review string
	var genre string
	for rows.Next() {
		rows.Scan(&id, &name, &desc, &review, &rating, &genre)
		movie := Movie{
			ID:     id,
			Name:   name,
			Desc:   desc,
			Review: review,
			Genre:  genre,
			Rating: rating,
		}
		movies = append(movies, movie)
	}

	return movies
}
func (feed *Feed) GetAllDiscussions() []Discussion {
	discussions := []Discussion{}
	rows, _ := feed.DB.Query(`
		SELECT * FROM discussions
	`)
	var ID int
	var TopicName string
	var Description string

	for rows.Next() {
		rows.Scan(&ID, &TopicName, &Description)
		discs := Discussion{
			ID:          ID,
			TopicName:   TopicName,
			Description: Description,
		}
		discussions = append(discussions, discs)
	}

	return discussions
}
func (feed *Feed) GetSignup(username1 string, password1 string) send {
	//s := []Signup{}
	//flags := []send{}
	query := `SELECT * FROM signup WHERE username like "%` + username1 + `%" AND password like"%` + password1 + `%"`
	rows, _ := feed.DB.Query(query)
	var ID int
	var email string
	var username string
	var password string
	var security string
	var answer string
	var birthday string
	for rows.Next() {
		rows.Scan(&ID, &email, &username, &password, &security, &answer, &birthday)
		s1 := Signup{
			ID:       ID,
			Email:    email,
			Username: username,
			Password: password,
			Security: security,
			Answer:   answer,
			Birthday: birthday,
		}
		if s1.Username == "" {
			flag1 := send{Flag: "false"}
			fmt.Printf("%+v\n", flag1)

			//flags = append(flags, flag)
			return flag1
		} else {
			flag1 := send{Flag: "true"}
			fmt.Printf("%+v\n", flag1)

			//flags = append(flags, flag)
			return flag1
			//fmt.Printf("%s", s1.ID)
			//s = append(s, s1)
		}
	}
	flag1 := send{Flag: "false"}
	fmt.Printf("%+v\n", flag1)

	//flags = append(flags, flag)
	return flag1
	//return "false"
	//return s
}
func (feed *Feed) GetBestDiscussions() []Discussion {
	discussions := []Discussion{}
	rows, _ := feed.DB.Query(`
		SELECT * FROM discussions ORDER BY random() LIMIT 5
	`)
	var ID int
	var TopicName string
	var Description string

	for rows.Next() {
		rows.Scan(&ID, &TopicName, &Description)
		discs := Discussion{
			ID:          ID,
			TopicName:   TopicName,
			Description: Description,
		}
		discussions = append(discussions, discs)
	}

	return discussions
}

func (feed *Feed) GetMovieByGenre(findThis string) []Movie {

	movies := []Movie{}
	query := `SELECT * FROM movies WHERE genre like "%` + findThis + `%"`

	rows, _ := feed.DB.Query(query)

	var id int
	var name string
	var rating string
	var desc string
	var review string
	var genre string
	for rows.Next() {
		rows.Scan(&id, &name, &desc, &review, &rating, &genre)
		movie := Movie{
			ID:     id,
			Name:   name,
			Desc:   desc,
			Review: review,
			Genre:  genre,
			Rating: rating,
		}
		movies = append(movies, movie)
	}

	return movies
}

func NewFeed(db *sql.DB) *Feed {
	stmt, _ := db.Prepare(`
	CREATE TABLE IF NOT EXISTS "movies" (
		"ID"	INTEGER NOT NULL UNIQUE,
		"name"	TEXT NOT NULL,
		"description" TEXT,
		"review" TEXT,
		"rating"	TEXT,
		"genre" TEXT,
		PRIMARY KEY("ID" AUTOINCREMENT)
	);

	`)

	stmt.Exec()
	//fmt.Println("new db created!")
	stmt1, _ := db.Prepare(`CREATE TABLE IF NOT EXISTS "discussions" ( "ID"	INTEGER NOT NULL UNIQUE, 
"TopicName" TEXT NOT NULL,
"Description" TEXT NOT NULL,
PRIMARY KEY("ID" AUTOINCREMENT)
 );`)
	stmt1.Exec()
	stmt2, _ := db.Prepare(`CREATE TABLE IF NOT EXISTS "signup" ( "ID"	INTEGER NOT NULL UNIQUE, 
	"email" TEXT NOT NULL,
	"username" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"security" TEXT NOT NULL,
	"answer" TEXT NOT NULL,
	"birthday" TEXT NOT NULL,
	PRIMARY KEY("ID" AUTOINCREMENT)
	 );`)
	stmt2.Exec()
	return &Feed{

		DB: db,
	}

}
func NewDiscussionFeed(db *sql.DB) *Feed {
	stmt, _ := db.Prepare(`
	CREATE TABLE IF NOT EXISTS "discussions" (
		"ID"	INTEGER NOT NULL UNIQUE,
		"name"	TEXT NOT NULL,
		"description" TEXT,
		"review" TEXT,
		"rating"	TEXT,
		"genre" TEXT,
		PRIMARY KEY("ID" AUTOINCREMENT)
	);

	`)

	stmt.Exec()
	//fmt.Println("new db created!")

	return &Feed{

		DB: db,
	}

}

//for testing of get services
func (feed *Feed) Add(movie Movie) {

	stmt, _ := feed.DB.Prepare(`
	INSERT INTO movies (name,description,review,rating,genre) values (?,?,?,?,?)
	`)

	stmt.Exec(movie.Name, movie.Desc, movie.Review, movie.Rating, movie.Genre)

}
func (feed *Feed) AddD(discussion Discussion) {
	stmt, _ := feed.DB.Prepare(`
	INSERT INTO discussions (TopicName,Description) values (?,?)
	`)
	stmt.Exec(discussion.TopicName, discussion.Description)
}
func (feed *Feed) AddS(s Signup) {
	stmt, _ := feed.DB.Prepare(`
	INSERT INTO signup (email,username,password,security,answer,birthday) values (?,?,?,?,?,?)
	`)
	stmt.Exec(s.Email, s.Username, s.Password, s.Security, s.Answer, s.Birthday)
}

//update a movie by id
func (feed *Feed) UpdateMovieByID(movie Movie) {

	stmtt, err := feed.DB.Prepare("UPDATE movies SET name = ?, description = ?, review = ?, rating = ?, genre = ? WHERE ID = ?")
	checkAndLog(err)
	stmtt.Exec(movie.Name, movie.Desc, movie.Review, movie.Rating, movie.Genre, movie.ID)
	//res, _ := stmtt.Exec("100", 1)
	//affect, _ := res.RowsAffected()
	//fmt.Println(affect)
	//fmt.Println("updated!")

}

//to support update service
func (feed *Feed) GetMovieByID(movieID string) Movie {

	query := `SELECT * FROM movies WHERE ID =` + movieID

	rows, _ := feed.DB.Query(query)

	movies := []Movie{}

	var id int
	var name string
	var rating string
	var desc string
	var review string
	var genre string
	for rows.Next() {
		rows.Scan(&id, &name, &desc, &review, &rating, &genre)
		movie := Movie{
			ID:     id,
			Name:   name,
			Desc:   desc,
			Review: review,
			Genre:  genre,
			Rating: rating,
		}
		movies = append(movies, movie)
	}

	return movies[0]
}

func (feed *Feed) DeleteMovieByID(movie Movie) {

	stmtt, err := feed.DB.Prepare("DELETE from movies WHERE ID = ?")
	checkAndLog(err)
	stmtt.Exec(movie.ID)

}

func checkAndLog(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func NewMovieStatus(db *sql.DB) *Feed {

	execs := []struct {
		stmt       string
		shouldFail bool
	}{
		{stmt: "PRAGMA foreign_keys = ON"},
		{stmt: "CREATE TABLE movies_status (userid INTEGER NOT NULL, movieid INTEGER NOT NULL, status TEXT NOT NULL, FOREIGN KEY (userid) REFERENCES users (id), FOREIGN KEY (movieid) REFERENCES movies (ID))"},
	}
	for _, exec := range execs {
		db.Exec(exec.stmt)
		/*hasFailed := err != nil
		if exec.shouldFail != hasFailed {
			expected := "succeed"
			if exec.shouldFail {
				expected = "fail"
			}
			log.Printf("'%s' should have %sed but did not: %s", exec.stmt, expected, err)
		} else if exec.shouldFail {
			log.Printf("'%s' failed as expected: %s", exec.stmt, err)
		}*/
	}
	//log.Println("finis")

	return &Feed{

		DBMStats: db,
	}

}

//updating movie status
func (feed *Feed) SetMovieStatus(movie MovieStatus) {

	stmt, _ := feed.DBMStats.Prepare(`INSERT INTO movies_status (userid,movieid,status) values (?,?,?)`)
	stmt.Exec(movie.Userid, movie.Movieid, movie.Status)

}

//getting list of movies for a user
func (feed *Feed) GetMovieStatus(findThisUser string) []Movie {
	query := `SELECT * FROM movies_status WHERE userid =` + findThisUser
	rows, _ := feed.DBMStats.Query(query)

	//moviesStatus := []MovieStatus{}
	movies := []Movie{}
	var userid int
	var movieid int
	var status string
	for rows.Next() {

		rows.Scan(&userid, &movieid, &status)
		validmovie := MovieStatus{
			Userid:  userid,
			Movieid: movieid,
			Status:  status,
		}
		//moviesStatus = append(moviesStatus, validmovie)
		mid := strconv.Itoa(validmovie.Movieid)
		//fmt.Println(mid)
		queryMovies := `SELECT * FROM movies WHERE ID =` + mid
		//fmt.Println(queryMovies)
		rows, _ := feed.DBMStats.Query(queryMovies)
		//fmt.Println(rows)
		var id int
		var name string
		var rating string
		var desc string
		var review string
		var genre string
		for rows.Next() {
			rows.Scan(&id, &name, &desc, &review, &rating, &genre)
			movie := Movie{
				ID:     id,
				Name:   name,
				Desc:   desc,
				Review: review,
				Genre:  genre,
				Rating: rating,
			}
			movies = append(movies, movie)
		}

	}

	return movies

}

func (feed *Feed) MoviesbyGenre() []Movie {
	movies := []Movie{}
	rows, _ := feed.DB.Query(`
		SELECT * FROM movies WHERE genre='Action'
	`)
	var id int
	var name string
	var rating string
	var desc string
	var review string
	var genre string
	for rows.Next() {
		rows.Scan(&id, &name, &desc, &review, &rating, &genre)
		movie := Movie{
			ID:     id,
			Name:   name,
			Desc:   desc,
			Review: review,
			Genre:  genre,
			Rating: rating,
		}
		movies = append(movies, movie)
	}

	return movies

}
func (feed *Feed) BestFiveMovies() []Movie {
	movies := []Movie{}
	rows, _ := feed.DB.Query(`
	SELECT *
	FROM movies ORDER BY rating DESC
	LIMIT 5
	`)
	var id int
	var name string
	var rating string
	var desc string
	var review string
	var genre string
	for rows.Next() {
		rows.Scan(&id, &name, &desc, &review, &rating, &genre)
		movie := Movie{
			ID:     id,
			Name:   name,
			Desc:   desc,
			Review: review,
			Genre:  genre,
			Rating: rating,
		}
		movies = append(movies, movie)
	}

	return movies
}
func (feed *Feed) GetMovieByName(findThis string) []Movie {

	movies := []Movie{}
	query := `SELECT * FROM movies WHERE name like "%` + findThis + `%"`

	rows, _ := feed.DB.Query(query)

	var id int
	var name string
	var rating string
	var desc string
	var review string
	var genre string
	for rows.Next() {
		rows.Scan(&id, &name, &desc, &review, &rating, &genre)
		movie := Movie{
			ID:     id,
			Name:   name,
			Desc:   desc,
			Review: review,
			Genre:  genre,
			Rating: rating,
		}
		movies = append(movies, movie)
	}

	return movies
}
