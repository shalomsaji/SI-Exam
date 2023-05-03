let selectedClass
module.exports={
    
    selectClass:(userClass)=>{
        selectedClass=userClass
        console.log("Selected Class:"+selectedClass)
    },
    returnClass:()=>{
        console.log(selectedClass);
        return selectedClass
    }
    
}