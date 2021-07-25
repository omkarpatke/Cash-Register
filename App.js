var inputMain = document.querySelector('#get-in')
var btnNext = document.querySelector('#next')
var billInput = document.querySelector('.inputbox')
var input2 = document.querySelector(".user-cash")
var btnCheak = document.querySelector(".cheak");
var Table = document.querySelector(".table");
var ResultText = document.querySelector(".resultText");
var Returntable = document.querySelector(".returnDiv");
var returnchange = document.querySelector("#output");
const notes = [2000, 500, 100, 50, 20, 10, 5, 1];

var noOfnotes = document.querySelectorAll(".noOfNotes");

btnNext.addEventListener("click",clickHandler);


function clickHandler () {
    
    if(inputMain.value >= 1) {
        return billInput.classList.remove('hidden')
    }else{
     alert('Amount of bill cannot be less than 0');
    }
}

btnCheak.addEventListener("click" , clickhandler2)

function clickhandler2 (){
    if(input2.value >= inputMain.value){
        if(inputMain.value && input2.value){
            var balance = input2.value - inputMain.value;
            if(balance === 0){
                alert('Thanku !! You Have Paid Right Amount !');
            }else if(balance > 0){
                let remainingAmount = balance;
                console.log(remainingAmount);
                for( var i=0;i<=notes.length;i++){
                    while(remainingAmount >= notes[i]){
                        var change = Math.floor(remainingAmount / notes[i])
                        console.log(`${change} note of ${notes[i]}`)
                        Table.classList.remove('hidden');
                          noOfnotes[i].innerHTML= `${change}`
                        remainingAmount = remainingAmount % notes[i];
                    }
                }
            }else{
                alert('Bill Amount is greater than given Cash');
            }
        }
    }
    
    

}