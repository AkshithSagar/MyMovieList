package main

import (
	"database/sql"
	moviefeed "mymovielist/platform/moviefeed"
	"net/http"
	"strconv"
	"testing"

	"github.com/go-chi/chi"
	_ "github.com/mattn/go-sqlite3"
	"github.com/qkgo/yin"
	"github.com/stretchr/testify/assert"
)

type Feed struct {
	DB *sql.DB
}

func setupTestDb(dbName string) *Feed {
	// Connection to the database with default configuration

	db, err := sql.Open("sqlite3", dbName)
	if err != nil {
		panic("Failed to connect database!")
	}

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

	return &Feed{

		DB: db,
	}

}

func TestGetAllMovies(t *testing.T) {

	db, _ := sql.Open("sqlite3", "./moviedatabaseV3.db")
	feed := moviefeed.NewFeed(db)

	r := chi.NewRouter()
	r.Use(yin.SimpleLogger)

	r.Get("/getAllMovies", func(w http.ResponseWriter, r *http.Request) {
		res, _ := yin.Event(w, r)
		movies := feed.GetAllMovies()
		res.SendJSON(movies)
		assert.Equal(t, 200, r.Response.StatusCode)
	})

}

func TestAddMovies(t *testing.T) {

	db, _ := sql.Open("sqlite3", "./moviedatabaseV3.db")
	feed := moviefeed.NewFeed(db)

	r := chi.NewRouter()
	r.Use(yin.SimpleLogger)

	r.Post("/addMovie", func(w http.ResponseWriter, r *http.Request) {
		res, req := yin.Event(w, r)
		body := map[string]string{}
		req.BindBody(&body)
		movie := moviefeed.Movie{
			Name:   body["name"],
			Desc:   body["description"],
			Review: body["review"],
			Rating: body["rating"],
			Genre:  body["genre"],
		}
		feed.Add(movie)
		res.SendStatus(204)
		assert.Equal(t, 204, r.Response.StatusCode)
	})

}

func TestDeleteMovie(t *testing.T) {

	db, _ := sql.Open("sqlite3", "./moviedatabaseV3.db")
	feed := moviefeed.NewFeed(db)

	r := chi.NewRouter()
	r.Use(yin.SimpleLogger)

	r.Post("/deleteMovieByID", func(w http.ResponseWriter, r *http.Request) {
		res, req := yin.Event(w, r)
		body := map[string]string{}
		req.BindBody(&body)
		id, _ := strconv.Atoi(body["movieid"])
		movie := moviefeed.Movie{
			ID: id,
		}
		feed.DeleteMovieByID(movie)
		res.SendStatus(204)
	})

}

func TestUpdateMovies(t *testing.T) {

	db, _ := sql.Open("sqlite3", "./moviedatabaseV3.db")
	feed := moviefeed.NewFeed(db)

	r := chi.NewRouter()
	r.Use(yin.SimpleLogger)

	r.Put("/updateMovieByID", func(w http.ResponseWriter, r *http.Request) {
		res, req := yin.Event(w, r)
		body := map[string]string{}
		req.BindBody(&body)
		id, _ := strconv.Atoi(body["movieid"])
		movie := moviefeed.Movie{
			ID:     id,
			Rating: body["rating"],
		}
		feed.UpdateMovieByID(movie)
		res.SendStatus(204)
	})

}
