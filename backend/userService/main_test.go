package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
	database "userService/database"
	models "userService/models"

	"strconv"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	fiber "github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

const SecretKey = "secret"

func TestLogin(t *testing.T) {
	app := fiber.New()
	app.Post("/login", func(c *fiber.Ctx) error {

		var data map[string]string

		var user models.User
		database.DB.Where("email = ?", data["email"]).First(&user)
		if user.Id == 0 {

			c.Status(fiber.StatusNotFound)

		}

		if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {

			c.Status(fiber.StatusBadRequest)
			assert.Equal(t, 200, 200)
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
			assert.Equal(t, 200, 200)

		}
		cookie := fiber.Cookie{

			Name:     "jwt",
			Value:    token,
			Expires:  expirationTime,
			HTTPOnly: true,
		}

		c.Cookie(&cookie)

		return err
	})

}

func TestLogout(t *testing.T) {
	app := fiber.New()
	app.Post("/logout", func(c *fiber.Ctx) error {

		cookie := fiber.Cookie{
			Name:     "jwt",
			Value:    "",
			Expires:  time.Now().Add(-time.Hour), //setting cookie to a time in the past
			HTTPOnly: true,
		}

		c.Cookie(&cookie)

		return nil
	})

}

func TestReg(t *testing.T) {
	app := fiber.New()
	app.Post("/register", func(c *fiber.Ctx) error {

		var data map[string]string
		if err := c.BodyParser(&data); err != nil {
			return err
		}

		password, err := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)

		user := models.User{
			Name:     data["name"],
			Email:    data["email"],
			Password: password,
		}

		database.DB.Create(&user)
		return err
	})

}

func TestGetUser(t *testing.T) {
	app := fiber.New()
	app.Post("/user", func(c *fiber.Ctx) error {

		cookie := c.Cookies("jwt")

		token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(*jwt.Token) (interface{}, error) {

			return []byte(SecretKey), nil

		})

		if err != nil {
			c.Status(fiber.StatusUnauthorized)
			return c.JSON(fiber.Map{
				"message": "unauthenticated",
			})

		}
		claims := token.Claims.(*jwt.StandardClaims)
		var user models.User
		database.DB.Where("id = ?", claims.Issuer).First(&user)
		return err
	})

}
