package main

import (
	"database/sql"
	"fmt"
	moviefeed "mymovielist/platform/moviefeed"
	"net/http"
	"reflect"
	"strconv"

	"github.com/go-chi/chi"
	_ "github.com/mattn/go-sqlite3"
	"github.com/qkgo/yin"
)

//added code here by dhanush
func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Content-Type", "text/html; charset=utf-8")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
	(*w).Header().Set("Access-Control-Allow-Methods", "OPTIONS, POST, GET")

}

//till here

func main() {

	db, _ := sql.Open("sqlite3", "../../sprint4_v2_ip.db")
	//fmt.Println("opened new db!", db)
	feed := moviefeed.NewFeed(db)
	//fmt.Println("new db created!")

	//fmt.Println("opened new db!", db)
	movieStatusdb := moviefeed.NewMovieStatus(db)
	//fmt.Println("new db created!")

	r := chi.NewRouter()
	r.Use(yin.SimpleLogger)
	//fmt.Println("at get movie!")
	r.Get("/getAllMovies", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		res, _ := yin.Event(w, r)
		movies := feed.GetAllMovies()
		res.SendJSON(movies)
	})

	r.Get("/getAllDiscussions", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		res, _ := yin.Event(w, r)
		disc := feed.GetAllDiscussions()
		res.SendJSON(disc)
	})
	r.Get("/getBestDiscussions", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		res, _ := yin.Event(w, r)
		disc := feed.GetBestDiscussions()
		res.SendJSON(disc)
	})
	//get by genre
	r.Get("/getMovieByGenre", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		res, _ := yin.Event(w, r)
		keys, _ := r.URL.Query()["genre"]

		//genre1 :=r.URL.Query()["genre"]
		//genre := r.Header.Get("genre")
		genre := keys[0]
		//fmt.Println("*******%s", keys[0], "******%s", ok)
		movies := feed.GetMovieByGenre(genre)
		res.SendJSON(movies)
	})
	r.Get("/getMovieByName", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		res, _ := yin.Event(w, r)
		keys, _ := r.URL.Query()["name"]
		name := keys[0]
		//name := r.Header.Get("name")
		//fmt.Println("*******%s", genre)
		movies := feed.GetMovieByName(name)
		res.SendJSON(movies)
	})
	r.Get("/getSignupByUsername", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)

		res, _ := yin.Event(w, r)
		keys, _ := r.URL.Query()["username"]
		keys2, _ := r.URL.Query()["password"]
		username := keys[0]
		password := keys2[0]
		//name := r.Header.Get("name")
		//fmt.Println("*******%s", genre)
		//signups := feed.GetSignup(username, password)
		signups := feed.GetSignup(username, password)
		fmt.Printf("%+v\n", signups)
		fmt.Printf("%+v\n", reflect.TypeOf(signups))
		type Message struct {
			Body string
		}
		m := Message{signups.Flag}
		res.SendJSON(m)
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
	r.Post("/addD", func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		res, req := yin.Event(w, r)
		body := map[string]string{}
		req.BindBody(&body)
		discussion := moviefeed.Discussion{
			TopicName:   body["TopicName"],
			Description: body["Description"],
		}
		feed.AddD(discussion)
		res.SendStatus(204)
	})
	r.Post("/addS", func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		res, req := yin.Event(w, r)
		body := map[string]string{}
		req.BindBody(&body)
		s := moviefeed.Signup{
			Email:    body["email"],
			Username: body["username"],
			Password: body["password"],
			Security: body["security"],
			Answer:   body["answer"],
			Birthday: body["birthday"],
		}

		feed.AddS(s)
		res.SendStatus(204)
	})

	r.Put("/updateMovieByID", func(w http.ResponseWriter, r *http.Request) {
		res, req := yin.Event(w, r)
		body := map[string]string{}
		req.BindBody(&body)
		id, _ := strconv.Atoi(body["movieid"])

		oldMovieDetails := feed.GetMovieByID(body["movieid"])

		movie := moviefeed.Movie{
			ID: id,
		}
		//name
		if body["name"] == "" {

			movie.Name = oldMovieDetails.Name

		} else {

			movie.Name = body["name"]
		}

		//description
		if body["description"] == "" {

			movie.Desc = oldMovieDetails.Desc

		} else {

			movie.Name = body["description"]
		}

		//Review
		if body["review"] == "" {

			movie.Review = oldMovieDetails.Review

		} else {

			movie.Review = body["review"]
		}

		if body["genre"] == "" {

			movie.Genre = oldMovieDetails.Genre

		} else {

			movie.Genre = body["genre"]
		}

		//Rating
		if body["rating"] == "" {

			movie.Rating = oldMovieDetails.Rating

		} else {

			movie.Rating = body["rating"]
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

	//for testing of get service
	r.Post("/setMovieStatus", func(w http.ResponseWriter, r *http.Request) {
		res, req := yin.Event(w, r)
		body := map[string]string{}
		req.BindBody(&body)
		uid, _ := strconv.Atoi(body["userid"])
		mid, _ := strconv.Atoi(body["movieid"])
		movieStatus := moviefeed.MovieStatus{
			Userid:  uid,
			Movieid: mid,
			Status:  body["status"],
		}
		movieStatusdb.SetMovieStatus(movieStatus)
		res.SendStatus(204)
	})

	//get movie status based on user ID
	r.Get("/getMovieStatus", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		res, _ := yin.Event(w, r)
		userid := r.Header.Get("userid")
		//fmt.Println("*******%s", userid)
		movies := movieStatusdb.GetMovieStatus(userid)
		res.SendJSON(movies)
	})

	r.Get("/MoviesbyGenre", func(w http.ResponseWriter, r *http.Request) {
		// w.Header().Set("Access-Control-Allow-Origin", "*")
		enableCors(&w)
		res, _ := yin.Event(w, r)
		movies := feed.MoviesbyGenre()
		res.SendJSON(movies)
	})
	r.Get("/BestFiveMovies", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		res, _ := yin.Event(w, r)
		movies := feed.BestFiveMovies()
		res.SendJSON(movies)
	})
	http.ListenAndServe(":3000", r)

}
