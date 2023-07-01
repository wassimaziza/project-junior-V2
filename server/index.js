const express = require("express");
const itemRoutes = require('./routes/item.routes')
const cors = require('cors')

const db = require('./database-mysql');


const app = express();
const PORT =  3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors());

app.use("/api/cars", itemRoutes);

app.listen(PORT, function () {
  console.log("hana on port 3000!");
});
