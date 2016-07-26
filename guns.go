package main

import (
	"github.com/mwheatley3/guns/server"
)

func main() {
	println("hello")
	server.Start()
}

// func hello(w http.ResponseWriter, r *http.Request) {
// 	w.Write([]byte("hello!"))
// }
//
// func query(city string) (weatherData, error) {
// 	resp, err := http.Get("http://api.openweathermap.org/data/2.5/weather?APPID=b2372adb5a65605653a31cc68eb666a5&q=" + city)
// 	if err != nil {
// 		return weatherData{}, err
// 	}
//
// 	defer resp.Body.Close()
//
// 	var d weatherData
//
// 	if err := json.NewDecoder(resp.Body).Decode(&d); err != nil {
// 		return weatherData{}, err
// 	}
//
// 	return d, nil
// }
//
// type weatherData struct {
// 	Name string `json:"name"`
// 	Main struct {
// 		Kelvin float64 `json:"temp"`
// 	} `json:"main"`
// }
