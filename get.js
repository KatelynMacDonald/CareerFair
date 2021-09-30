  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDAZQf5-Sq6wnd2nmGud9xfB_Coi5uybVY",
    authDomain: "itvendingmachine-28a8b.firebaseapp.com",
    projectId: "itvendingmachine-28a8b",
    storageBucket: "itvendingmachine-28a8b.appspot.com",
    messagingSenderId: "651890505111",
    databaseURL: "https://itvendingmachine-28a8b-default-rtdb.firebaseio.com/",
    appId: "1:651890505111:web:b062d7d1cf700a0fd100d2",
    measurementId: "G-N7KHFSJEXQ"
  };

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var database = firebase.database();

var listy = new Array();

var objList = new Array();

function getVals(database){
    database.ref("Items").on('value', (snapshot) => {
        const data = snapshot.val();
        var items = Object.values(data);
        listy.push(Object.keys(items).map((key) => [items[key]]));
        for(let k in listy){
            for (let j in listy[k]){
                for (let l in listy[k][j]){
                    objList.push(Object.values(listy[k][j][l]));
                }
            }
        }
        setUpTable(objList)
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