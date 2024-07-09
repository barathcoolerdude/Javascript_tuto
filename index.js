const myCheckbox=document.getElementById("myCheckbox");
const visaBtn=document.getElementById("visaBtn");
const masterCardBtn=document.getElementById("masterCardBtn");
const paypalBtn=document.getElementById("paypalBtn");
const mySubmit=document.getElementById("mySubmit");
const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");

mySubmit.onclick=function(){
    if(myCheckbox.checked){
        subResult.textContent="you are subcribed";
    }
    else{
        subResult.textContent="you are not subcribed";
    }
    if(visaBtn.checked){
        paymentResult.textContent="you are paying with visa";
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent="you are paying with mastercard";
    }
    else if(paypalBtn.checked){
        paymentResult.textContent="you are paying with paypal";
    }
    else{
        paymentResult.textContent="you must select one";

    }
}
