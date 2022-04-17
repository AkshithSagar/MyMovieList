package moviefeed

//property injection - abstract the db - it's a good practice
import (
	"database/sql"
	"log"
)

type Feed struct {
	DB *sql.DB
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
