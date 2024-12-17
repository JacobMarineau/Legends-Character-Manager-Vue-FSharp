open Saturn
open Giraffe

let api = application {
    use_router (router {
        get "/" (text "Welcome to Legends Character Manager!")
    })
    url "http://localhost:5000"
}

run api


