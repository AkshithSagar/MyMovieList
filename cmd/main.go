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

	db, _ := sql.Open("sqlite3", "./moviedatabase.db")
	fmt.Println("opened new db!", db)
	feed := moviefeed.NewFeed(db)
	fmt.Println("new db created!")

	r := chi.NewRouter()
	r.Use(yin.SimpleLogger)
	fmt.Println("at get movie!")
	r.Get("/getMovie", func(w http.ResponseWriter, r *http.Request) {
		res, _ := yin.Event(w, r)
		movies := feed.Get()
		res.SendJSON(movies)
	})

	http.ListenAndServe(":3000", r)

}
