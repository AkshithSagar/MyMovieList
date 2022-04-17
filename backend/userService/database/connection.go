package database

import (
	models "userService/models"

	"gorm.io/driver/sqlite" // Sqlite driver based on GGO
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {

	connection, err := gorm.Open(sqlite.Open("../sprint4.db"), &gorm.Config{})
	if err != nil {
		panic("could not connect to db")
	}

	DB = connection
	connection.AutoMigrate(&models.User{})

}
