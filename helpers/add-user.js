var db = require('../config/connection')
var quizSelector= require("../helpers/quiz-selector")

module.exports={

    addInfo:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            
            let loginStatus=false;
            let response={}
            let user=await db.get().collection("user").findOne({phone:userData.phone, class:userData.class, completed:userData.completed})
            console.log(user)
            if (!user){
                console.log(userData)
            
                db.get().collection("user").insertOne(userData).then((status)=>{
                    //  db.get().collection("user").update({phone:userData.phone, class:userData.class},{$set:{completed:"false"}})
                    loginStatus=true
                    console.log('User Added')
                    response.user=user
                    response.status=true
                    resolve(response)
                })
            }else {
                if(user.completed==false){
                    response.user=user
                    response.status=true
                    
                    resolve(response)
                }else if(user.completed==true){
                    console.log('User Exists')
                resolve({status:false})
                }else{
                    response.user=user
                    response.status=true
                    response.class=user.class
                    quizSelector.selectClass(user.class)
                    resolve(response)
                }
                
            }
            
        })
        
    }
}