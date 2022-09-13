const app = require("./app");
const mongoose = require('mongoose');

require("dotenv").config();


/* Database Connections  */
mongoose.connect(process.env.DATABASE_STRING).then(() =>{
    console.log("Connected to database");
});


/* Import all the routes here */
const productRouter = require("./routes/product.route");


/* Init Endpoints */
app.use("/api/v1", productRouter)




/* Server */
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

/* validations for Routes  */
app.use("*", (req, res, next) => {
    res.send({success: false, message: "Routes not found"});
})
