

var json = require('C:/Users/padawan/Documents/CareerFair/sort/data.json');

var data = Object.values(json["Items"]);

data.sort(function(a, b) {
    return a.name > b.name;
});

//console.log(data);

var x = 0;
for(let i in json["Items"]){
    console.log(data[x].name)
    //json["Items"].i=data[x];
    x=x+1;
}