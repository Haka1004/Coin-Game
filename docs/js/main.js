let balance = document.getElementById("balance");
let sum = document.getElementById("sum");

let score = 0;
let arr = [0];
let boostCounter  = 0;
let boostMultiplier = 2;


function xamyakClick(){
    score++;
    balance.innerHTML = score + "$";
}

function clickBoost(){
    boostCounter++;
    if (boostCounter  % 10 === 0) {
        boostMultiplier *= 2; 
    }
    score += boostMultiplier; 
    balance.innerHTML = score + "$";

    let boostButton = document.getElementById("boost");
    boostButton.innerHTML = "BOOST x" + boostMultiplier;
    // score += 4;
    // balance.innerHTML = score;
}


function clickWallet(){
    if(score > 0){
        let total = 0; 
        arr.push(score);
        score = 0;
        balance.innerHTML = score;

        let sumContent = "Added sum: ";
        for (let i = 0; i < arr.length; i++) {
            sumContent += arr[i];
            if (i < arr.length - 1) {
                sumContent += ", " + "$";
            }
        }
        sumContent += "<br><br>Total: " + "$";

        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }

        sumContent += total;
        sum.innerHTML = sumContent;
        sum.style.display = "block";
        // balance.innerHTML = currentBalance + "$";
    }
    else{
        sum.innerHTML = /*"Current score is: " + score + */ "Add More Balance!";
    }
}

