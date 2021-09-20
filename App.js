var inputMain = document.querySelector('#get-in')
var btnNext = document.querySelector('#next')
var billInput = document.querySelector('.inputbox')
var input2 = document.querySelector(".user-cash")
var btnCheck = document.querySelector(".check");
var Table = document.querySelector(".table");
var ResultText = document.querySelector(".resultText");
var Returntable = document.querySelector(".returnDiv");
var returnchange = document.querySelector("#output");
var errorMessage = document.querySelector(".error-message");
var message = document.querySelector(".message");
const notes = [2000, 500, 100, 50, 20, 10, 5, 1];

var noOfnotes = document.querySelectorAll(".noOfNotes");

btnNext.addEventListener("click",clickHandler);


function clickHandler () {
    if(inputMain.value >= 1) {
        return billInput.classList.remove('hidden'),
        btnNext.classList.add('hidden'),
        errorMessage.classList.add('hidden')
    }
    else{
     errorMessage.innerText = 'Please Enter the Bill-Amount First';
    }
    
}

btnCheck.addEventListener("click" , clickhandler2)

function clickhandler2 (){
    if(input2.value >= inputMain.value){
        
        if(inputMain.value && input2.value){
            var balance = input2.value - inputMain.value;
            if(balance === 0){
                
                message.innerText = 'Thanku !! You Have Paid Right Amount !';
            }else if(balance > 0){
                message.classList.add('hidden')
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
            }
        }else{
            message.innerText = 'Bill Amount is greater than given Cash';
        }
    }
    
    

}