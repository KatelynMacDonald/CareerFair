import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAneiYMGEzQslJ9stxikkG-WDIp4vFBIdE",
    authDomain: "sictc-career-fair.firebaseapp.com",
    projectId: "sictc-career-fair",
    storageBucket: "sictc-career-fair.appspot.com",
    messagingSenderId: "513234627322",
    appId: "1:513234627322:web:bb29fecd5ceeea674b3743",
    measurementId: "G-1GKEYRGJXZ",
    databaseURL: "https://sictc-career-fair-default-rtdb.firebaseio.com/"
  };

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

var database = firebase.database();
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
var listy = new Array();
var objList = new Array();

function getVals(database){
    database.ref("Items").on('value', (snapshot) => {
        const data = snapshot.val();
        var items = Object.values(data);
        console.log(items);
        listy.push(Object.keys(items).map((key) => [items[key]]));
        for(let k in listy){
            for (let j in listy[k]){
                for (let l in listy[k][j]){
                    objList.push(Object.values(listy[k][j][l]));
                }
            }
        }
        //setUpTable(objList)
    });
}

getVals(database);

function setUpTable(l){
    var table = "<table> <tr><th>ID #</th><th>Description</th><th>Location</th><th>Qty</th><th>Tag</th></tr>";
    for (var rowIndex=0; rowIndex < l.length; rowIndex++) {
        var row = "<tr><td>#" + rowIndex + "</td>";
        for(var colIndex = 0; colIndex < 4; colIndex++) {
            var x = l[rowIndex][colIndex];
            row += "<td>" + x + "</td>";
        }
        table += row + "</tr>";
    }
    //console.log(table);
    document.getElementById("output").innerHTML = table + "</table>"; 
}