package main

import (
	database "userService/database"
	routes "userService/routes"

	cors "github.com/gofiber/fiber/v2/middleware/cors"

	fiber "github.com/gofiber/fiber/v2"
)

func main() {

	database.Connect()
	app := fiber.New()

	app.Use(cors.New(cors.Config{

		AllowCredentials: true, //allows front end to get the cookie and also send it back

	}))

	routes.Setup(app)

	app.Listen(":3000")
}
