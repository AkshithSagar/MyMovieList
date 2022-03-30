package database

import (
	"gorm.io/driver/sqlite" // Sqlite driver based on GGO
	"gorm.io/gorm"
)

func Connect() {

	_, err := gorm.Open(sqlite.Open("moviedatabase_sprint3.db"), &gorm.Config{})
	if err != nil {
		panic("could not connect to db")
	}

}
