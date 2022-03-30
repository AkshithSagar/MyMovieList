package main

import (
	"database/sql"
	moviefeed "mymovielist/platform/moviefeed"
	"net/http"
	"strconv"

	"github.com/go-chi/chi"
	_ "github.com/mattn/go-sqlite3"
	"github.com/qkgo/yin"
)
//added code here by dhanush
func enableCors(w *http.ResponseWriter){
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}
//till here

func main() {

	db, _ := sql.Open("sqlite3", "./moviedatabaseV3.db")
	//fmt.Println("opened new db!", db)
	feed := moviefeed.NewFeed(db)
	//fmt.Println("new db created!")

	r := chi.NewRouter()
	r.Use(yin.SimpleLogger)
	//fmt.Println("at get movie!")
	r.Get("/getAllMovies", func(w http.ResponseWriter, r *http.Request) {
		res, _ := yin.Event(w, r)
		movies := feed.GetAllMovies()
		res.SendJSON(movies)
	})

	//for testing of get service
	r.Post("/addMovie", func(w http.ResponseWriter, r *http.Request) {
		//Added by dhanush: starts here
		// enableCors(&w)
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		//ends here
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
	})

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

	http.ListenAndServe(":3000", r)

}
