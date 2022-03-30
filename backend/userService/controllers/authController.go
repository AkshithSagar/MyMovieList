package controllers

import (
	database "userService/database"
	models "userService/models"

	"strconv"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	fiber "github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

const SecretKey = "secret"

func Login(c *fiber.Ctx) error {
	var data map[string]string
	if err := c.BodyParser(&data); err != nil {
		return err
	}
	var user models.User
	database.DB.Where("email = ?", data["email"]).First(&user)
	if user.Id == 0 {

		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{

			"message": "user not found!",
		})
	}

	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {

		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{

			"message": "password incorrect!",
		})
	}

	expirationTime := time.Now().Add(time.Hour * 24) // *24 referes to 1 day

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer: strconv.Itoa(int(user.Id)),

		//ExpiresAt: time.Now().Add(time.Hour * 24).Unix(), // *24 referes to 1 day
		//fixed using - https://github.com/dgrijalva/jwt-go/issues/487

		ExpiresAt: expirationTime.Unix(),
	})

	token, err := claims.SignedString([]byte(SecretKey))
	if err != nil {

		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{

			"message": "could not login!",
		})

	}

	return c.JSON(token)
}

//generation of test data for login service
func Register(c *fiber.Ctx) error {
	var data map[string]string
	if err := c.BodyParser(&data); err != nil {
		return err
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)

	user := models.User{
		Name:     data["name"],
		Email:    data["email"],
		Password: password,
	}

	database.DB.Create(&user)

	return c.JSON(user)
}
