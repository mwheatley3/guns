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

	http.HandleFunc("/", loadIndex)

	log.Fatal(http.ListenAndServe(":8081", nil))
}

func loadIndex(w http.ResponseWriter, r *http.Request) {
	http.ServeHTML(w, r, "./client/index.html")
}
