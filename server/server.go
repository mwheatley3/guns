package server

import (
	"log"
	"net/http"
)

// Start starts the server
func Start() {
	h := http.StripPrefix("/build/", http.FileServer(http.Dir("client/build")))
	http.Handle("/build/", h)
	http.HandleFunc("/", loadIndex)
	http.HandleFunc("/api/todo/", todoHandler)

	log.Fatal(http.ListenAndServe(":8081", nil))
}

func loadIndex(w http.ResponseWriter, r *http.Request) {
	println("serving index")
	http.ServeFile(w, r, "./client/index.html")
}

func todoHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		println("creat to do")
	}
}
