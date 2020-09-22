const dbConfig = require("../data/db-config");

const db=require("../data/db-config")

function findPostsByUserID(userID){
    return db("posts as p")
    //maybe add a user name from the user_id since it'll be more helpful
    .innerJoin("users as u", "u.id", "p.user_id")
    .where("p.user_id", userID)
    // .where({"user_id": req.params.id}) //if you have multiple properties 
    
    //? if we don't want the user_id added in there 
    .select("p.id", "p.contents", "u.username")
}

module.exports ={
    findPostsByUserID,
}