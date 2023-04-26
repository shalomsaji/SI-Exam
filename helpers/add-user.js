var db = require('../config/connection')

module.exports={

    addInfo:(user,callback)=>{
        console.log(user)
        db.get().collection("user").insertOne(user).then((data)=>{
            callback(true)
        })
    }
}