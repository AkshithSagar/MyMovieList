package moviefeed

//property injection - abstract the db - it's a good practice
import (
	"database/sql"
	"fmt"
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
	fmt.Println("new db created!")

	return &Feed{

		DB: db,
	}

}

//for testing of get services
/*func (feed *Feed) Add(movie Movie) {

	stmt, _ := feed.DB.Prepare(`
	INSERT INTO movies (name,description,review,rating,genre) values (?,?,?,?,?)
	`)

	stmt.Exec(movie.Name, movie.Desc, movie.Review, movie.Rating, movie.Genre)

}*/
