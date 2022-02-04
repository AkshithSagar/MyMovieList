package main

import (
	"fmt"
	"net/http"
	"net/url"

	"encoding/json"

	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

type Movie struct {
	ID          uint `gorm:"AUTO_INCREMENT"`
	Name        string
	Description string
	Genre       string
	Review      string
}
type App struct {
	DB *gorm.DB
}

func (a *App) Initialize(dbDriver string, dbURI string) {
	db, err := gorm.Open(dbDriver, dbURI)
	if err != nil {
		panic("failed to connect database")
	}
	a.DB = db
	a.DB.AutoMigrate(&Movie{})
}

func (a *App) ListHandler(w http.ResponseWriter, r *http.Request) {
	var movies []Movie

	a.DB.Find(&movies)
	moviesJSON, _ := json.Marshal(movies)

	w.WriteHeader(200)
	w.Write([]byte(moviesJSON))
}

func (a *App) CreateHandler(w http.ResponseWriter, r *http.Request) {

	if err := r.ParseForm(); err != nil {
		panic("failed in ParseForm() call")
	}

	movies := &Movie{
		Name:        r.PostFormValue("Xmen"),
		Description: r.PostFormValue("Scifi"),
		Review:      r.PostFormValue("Excellent"),
	}
	a.DB.Create(movies)

	u, err := url.Parse(fmt.Sprintf("/movies/%s", movies.Name))
	if err != nil {
		panic("failed to form new Movie URL")
	}
	base, err := url.Parse(r.URL.String())
	if err != nil {
		panic("failed to parse request URL")
	}

	w.Header().Set("Location", base.ResolveReference(u).String())
	w.WriteHeader(201)
}

func (a *App) ViewHandler(w http.ResponseWriter, r *http.Request) {
	var movies Movie
	vars := mux.Vars(r)

	a.DB.First(&movies, "name = ?", vars["name"])
	movieJSON, _ := json.Marshal(movies)

	w.WriteHeader(200)
	w.Write([]byte(movieJSON))
}

func main() {
	a := &App{}
	a.Initialize("sqlite3", "test.db")
	r := mux.NewRouter()
	r.HandleFunc("/movies", a.ListHandler).Methods("GET")
	http.Handle("/", r)
	r.HandleFunc("/movies", a.CreateHandler).Methods("POST")
	r.HandleFunc("/movies/{Name:.+}", a.ViewHandler).Methods("GET")

	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
	defer a.DB.Close()
}
