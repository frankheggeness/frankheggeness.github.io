// jollibee theme
var display = document.getElementById('display')

var calc = calculatorModule()
var total =calc.totalC
var balance = '0';
setInterval(function(){display.value = total;}, 1)

// button functions below

function sevenTot(){
    if(total==='0'){
        total = '7'
    }else{
        total = total+'7';
    }
}

function eightTot(){
    if(total==='0'){
        total = '8'
    }else{
        total = total+'8';
    }
}
function nineTot(){
    if(total==='0'){
        total = '9'
    }else{
        total = total+'9';
    }
}
function divideTot(){
    
    total = total+'/'
}
function clearTot(){
    total = '0';
}
function fourTot(){
    if(total==='0'){
        total = '4'
    }else{
        total = total+'4';
    }
}
function fiveTot(){
    if(total==='0'){
        total = '5'
    }else{
        total = total+'5';
    }
}
function sixTot(){
    if(total==='0'){
        total = '6'
    }else{
        total = total+'6';
    }
}
function xTot(){
    total=total+'*'
}
function getBal(){
    total = balance;
}
function getEqual(){
    calc.findOperator(total)
}
function dubZeroTot(){
    total= total+'00'
}
function addTot(){
    total = total+'+';
}
function subtractTot(){
    total = total+'-';
}

function oneTot(){
    if(total==='0'){
        total = '1'
    }else{
        total = total+'1';
    }
}

function twoTot(){
    if(total==='0'){
        total = '2'
    }else{
        total = total+'2';
    }
}
function threeTot(){
    if(total==='0'){
        total = '3'
    }else{
        total = total+'3';
    }
}
function depositTot(){
    if(balance === '0'){
        balance = total;
    }else{
        var newBal = parseFloat(balance);
        var newTotal = parseFloat(total)
        var newDep = newBal + newTotal;
        newDep.toString();
        balance = newDep;
    }
}
function zeroTot(){
    total = total + '0'
}

function periodTot(){
    total = total + '.'
}
function withdrawTot(){
    // balance = balance - total;
    var newBal = parseFloat(balance);
    newTotal = parseFloat(total);
    var newWith = newBal - newTotal;
    newWith.toString();
    balance = newWith;
}
function cj1Tot(){
    total = '4.99'
}
function cj2Tot(){
    total = '5.99'
}
function cj3Tot(){
    total = '7.99'
}

function salesTax(){
    var totNum = parseFloat(total)
    var tax = totNum * .04
    var newTotal = totNum + tax;
    total = newTotal.toString();
}

var seven = document.getElementById('sevenButton')
// event listeners below
seven.addEventListener('click', sevenTot);
eightButton.addEventListener('click',eightTot);
nineButton.addEventListener('click', nineTot);
clearButton.addEventListener('click', clearTot);
divideButton.addEventListener('click', divideTot)
fourButton.addEventListener('click', fourTot);
fiveButton.addEventListener('click', fiveTot);
sixButton.addEventListener('click', sixTot);
xButton.addEventListener('click',xTot)
equalButton.addEventListener('click', getEqual);
dubzeroButton.addEventListener('click', dubZeroTot)
addButton.addEventListener('click',addTot)
subtractButton.addEventListener('click', subtractTot);
getBalanceButton.addEventListener('click', getBal)
oneButton.addEventListener('click',oneTot)
twoButton.addEventListener('click', twoTot);
threeButton.addEventListener('click', threeTot);
depositCashButton.addEventListener('click', depositTot);
zeroButton.addEventListener('click', zeroTot);
periodButton.addEventListener('click', periodTot);
withdrawButton.addEventListener('click', withdrawTot);
cj1.addEventListener('click', cj1Tot);
cj2.addEventListener('click',cj2Tot);
cj3.addEventListener('click', cj3Tot)
salesTaxButton.addEventListener('click', salesTax);


