const {AllAuthors,CreateAuthor,CreateQuote,EditAuthor,GetAuthor,DeleteAuthor} = require("./controller.js")


function router(app){
    app.get("/AllAuthors", AllAuthors),
    app.post("/Author/new/",CreateAuthor),
    app.patch("/Author/quote/new/:id",CreateQuote ),
    app.put("/Author/edit/:id",EditAuthor),
    app.get("/Author/:id",GetAuthor),
    app.delete("/Author/destroy/:id",DeleteAuthor)
}

module.exports = router;