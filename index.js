const myText=document.getElementById("myText");
const mySubmit=document.getElementById("mySubmit");
const resultElement=document.getElementById("resultElement");
let age;

mySubmit.onclick=function(){
    age=myText.value;
    age=Number(age)
    if(age>=100){
        resultElement.textContent=`you are too old for this`;
    }
    else if(age<18){
        resultElement.textContent=`go home child`;
    }
    else{
        resultElement.textContent=`lets go`;
    }
}