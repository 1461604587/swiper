let listData=require("./public/data.json")
module.exports={
  lintOnSave:false,
  devServer:{
    before(app){
      app.get("/list",(req,res)=>{
        res.send(listData)
      })
    }
  }
}