package moviefeed

//property injection - abstract the db - it's a good practice
import (
	"database/sql"
	"fmt"
)

type Feed struct {
	DB *sql.DB
}

func (feed *Feed) Get() []Movie {
	movies := []Movie{}
	rows, _ := feed.DB.Query(`
		SELECT * FROM movies
	`)
	var id int
	var name string
	var rating string
	for rows.Next() {
		rows.Scan(&id, &name, &rating)
		movie := Movie{
			ID:     id,
			Name:   name,
			Rating: rating,
		}
		movies = append(movies, movie)
	}

	return movies
}

func (feed *Feed) Add(movie Movie) {

	stmt, _ := feed.DB.Prepare(`
	INSERT INTO movies (name,rating) values (?,?) 
	`)

	stmt.Exec(movie.Name, movie.Rating)

}

func NewFeed(db *sql.DB) *Feed {
	stmt, _ := db.Prepare(`
	CREATE TABLE IF NOT EXISTS "movies" (
		"ID"	INTEGER NOT NULL UNIQUE,
		"name"	TEXT NOT NULL,
		"rating"	TEXT,
		PRIMARY KEY("ID" AUTOINCREMENT)
	);

	`)

	stmt.Exec()
	fmt.Println("new db created!")

	return &Feed{

		DB: db,
	}

}
