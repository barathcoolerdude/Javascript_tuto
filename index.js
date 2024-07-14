const minNum =1;
const maxNum = 100;
const answer= Math.floor(Math.random()*(maxNum-minNum))+minNum

let attempt=0;
let guess;
let running = true;

while(running==true){
    guess=window.prompt(`guess number between ${minNum} - ${maxNum}`);
    guess=Number(guess);
    console.log(typeof guess,guess);
    if(isNaN(guess)){
        window.alert("enter a valid number");
    }
    else if(guess>maxNum || guess<minNum){
        window.alert("enter betwwen the limits");
    }
    else{
        attempt++;
        if(guess>answer){
            window.alert("the number is too high");
        }
        else if(guess<answer){
            window.alert("the number is too low");
        }
        else{
            if(guess==answer){
                window.alert(`the guess is right ${guess} you got it right in ${attempt+1} attempts`)
                running=false;
            }
            else{
                window.alert(`the guess is wrong try again`);
                
            }
        }
    }
}
