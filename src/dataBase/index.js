const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/bikes", async(req,res) =>{
   try {
       
    const bikeObj  = req.body;
    const newTodo = await pool.query(
        "INSERT INTO bikes (name, type, price, rentFlag) VALUES($1,$2,$3,$4) RETURNING *",
         [bikeObj.name,bikeObj.type,bikeObj.price,bikeObj.flag]
    )

    res.json(newTodo.rows[0]);
   } catch (err) {
       console.error(err.message);
   }
});

app.get("/bikes", async(req,res) =>{
    try {
     const allBikes = await pool.query("SELECT * FROM bikes");
     res.json(allBikes.rows);
    } catch (err) {
        console.error(err.message);
    }
 });


 app.get("/bikes/:id", async(req,res) =>{
    try {
     const {id} =req.params;
     const bike = await pool.query("SELECT * FROM bikes WHERE b_id = $1", [id]);

     res.json(bike.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
 });

 // update a bike

 app.put("/bikes/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const bikeObj  = req.body;
        const updateBike = await pool.query("UPDATE bikes SET rentflag = $1 WHERE b_id = $2",
        [!bikeObj.rentflag, id]);
        
        res.json("bike was updated");
       } catch (err) {
           console.error(err.message);
       }
 })

 app.delete("/bikes/:id", async(req,res) => {
    try {
        const {id} =req.params;
        const bike = await pool.query("DELETE FROM bikes WHERE b_id = $1", [id]);
   
        res.json("Bike was deleted!");
       } catch (err) {
           console.error(err.message);
       }
 })

app.listen(5000, () =>{
    console.log("server has been started on port 5000")
})
