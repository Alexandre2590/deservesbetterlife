console.log("i'm converter")

const json = require('./../models/countrieslife.json')

const o = JSON.parse(JSON.stringify(json))

console.log(o)

o.forEach(function(e) {

// if (o.LOCATION = "FRA") x = {emplacement: "le monde"};

  
});
