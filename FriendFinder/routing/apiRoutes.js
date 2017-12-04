// Display all friends 
app.get("/api/friends", function(req, res){
    var chosen = req.params.characters; 

    if(chosen){
        console.log(chosen);

        friends.forEach(element => {
            if(chosen === element.friend){
                return res.json(element);
            }
        });
        return res.json(false);
    }
    return res.json(friends);
});


