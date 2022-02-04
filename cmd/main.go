package main

import (
	"database/sql"
	"fmt"
	moviefeed "mymovielist/platform/moviefeed"
	"net/http"

	"github.com/go-chi/chi"
	_ "github.com/mattn/go-sqlite3"
	"github.com/qkgo/yin"
)

func main() {

	db, _ := sql.Open("sqlite3", "./moviedatabaseV2.db")
	fmt.Println("opened new db!", db)
	feed := moviefeed.NewFeed(db)
	fmt.Println("new db created!")

	r := chi.NewRouter()
	r.Use(yin.SimpleLogger)
	fmt.Println("at get movie!")
	r.Get("/getAllMovies", func(w http.ResponseWriter, r *http.Request) {
		res, _ := yin.Event(w, r)
		movies := feed.GetAllMovies()
		res.SendJSON(movies)
	})

	//for testing of get service
	/*r.Post("/addMovie", func(w http.ResponseWriter, r *http.Request) {
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
	})*/

	http.ListenAndServe(":3000", r)

}
