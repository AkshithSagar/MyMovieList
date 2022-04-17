package database

import (
	models "userService/models"

	"gorm.io/driver/sqlite" // Sqlite driver based on GGO
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {

	connection, err := gorm.Open(sqlite.Open("../sprint4_v2_ip.db"), &gorm.Config{})
	if err != nil {
		panic("could not connect to db")
	}

	DB = connection
	//connection.Create(&models.User{})
	connection.AutoMigrate(&models.User{})

}
