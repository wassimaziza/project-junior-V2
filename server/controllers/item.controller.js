
const db = require("../database-mysql");



const selectAll = function (req, res) {
  db.query("SELECT * FROM cars", (err, cars, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(cars);
    }
  });
};
 const selectOne=function(req,res){
    db.query("SELECT * FROM cars WHERE id=?",[req.params.body], (err, cars, fields) => {
        if(err) {
            res.status(500).send(err) 
        }else {
            res.status(200).send(cars)
        }
 })
}
const createOne = function(req, res){
   db.query("INSERT INTO cars (name,year,company,status,image) VALUES (?,?,?,?,?)",[req.body.name,req.body.year,req.body.company,req.body.status,req.body.image],(err,cars,fields)=>{
    if(err){
        res.status(500).send(err)
    }else{
  res.status(200).send(cars)
    }
   })
};
 const deleteOne = function(req,res){
    db.query("DELETE FROM cars WHERE id=?",[req.params.id],(err,cars,fields)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(cars)
        }
    })
 }
 const updateOne = function(req, res){
    db.query(`UPDATE cars SET status="${req.body.status} WHERE id="${req.params.id}"`,(err, cars,fields) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(cars)
        }
    })
 }


module.exports = { selectAll,selectOne,updateOne,deleteOne,createOne };
