/*let age=25;
let price=10
let gpa=3.5
console.log(`my age is ${age} years`);
console.log(`prce of aplle is ${price} `);*/
//console.log(`your gps is ${gpa}`);
let username;

document.getElementById("mysubmit").onclick=function(){
    username=document.getElementById("mytext").value;
    document.getElementById("myh1").textContent=`hello ${username}`;
}