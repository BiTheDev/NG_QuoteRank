const {AllAuthors,CreateAuthor,CreateQuote,EditAuthor,GetAuthor,DeleteAuthor,DeleteQuote,UpdateQuote,ASCSortAuthor,DESCSortAuthor} = require("./controller.js")


function router(app){
    app.get("/AllAuthors", AllAuthors),
    app.post("/Author/new/",CreateAuthor),
    app.patch("/Author/quote/new/:id",CreateQuote ),
    app.put("/Author/edit/:id",EditAuthor),
    app.get("/Author/:id",GetAuthor),
    app.delete("/Author/destroy/:id",DeleteAuthor),
    app.delete("/Quote/destory/:quote_id",DeleteQuote),
    app.patch("/Quote/vote/:quote_id",UpdateQuote),
    app.get("/AllAuthor/Sort/asc",ASCSortAuthor),
    app.get("/AllAuthor/Sort/desc",DESCSortAuthor)
    return app;
}

module.exports = router;