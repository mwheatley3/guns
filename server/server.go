package server

import (
	// "fmt"
	"log"
	"net/http"
)

// Start starts the server
func Start() {
	// fs := http.FileServer(http.Dir("./client"))
	// fmt.Printf("%#v", fs)
	// http.Handle("/", fs)

	// http.HandleFunc("/weather/", func(w http.ResponseWriter, r *http.Request) {
	// 	city := strings.SplitN(r.URL.Path, "/", 3)[2]
	//
	// 	data, err := query(city)
	// 	if err != nil {
	// 		http.Error(w, err.Error(), http.StatusInternalServerError)
	// 		return
	// 	}
	//
	// 	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	// 	json.NewEncoder(w).Encode(data)
	// })
	h := http.StripPrefix("/build/", http.FileServer(http.Dir("client/build")))
	http.Handle("/build/", h)
	http.HandleFunc("/", loadIndex)

	log.Fatal(http.ListenAndServe(":8081", nil))
}

func loadIndex(w http.ResponseWriter, r *http.Request) {
	println("serving index")
	http.ServeFile(w, r, "./client/index.html")
}

func loadBundle(w http.ResponseWriter, r *http.Request) {
	println("hi")
	http.ServeFile(w, r, "./client/build/bundle.js")
}
