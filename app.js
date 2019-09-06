var express = require("express");
var app = express();
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/",(req,res) => {
    res.render("GSTR1_Invoices.ejs");
})

app.listen(process.env.PORT || 5000);

//process.env.PORT || 5000