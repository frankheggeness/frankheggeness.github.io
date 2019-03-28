// var x = '0';

function calculatorModule(){
    var memory = 0
   

    var totalC = '0';

    function findOperator(str){
        for(i=0;i<str.length;i++){
            if(str[i]=== '+'){
                add(str)
            }else if(str[i] === '/'){
                divide(str)
            }else if(str[i] === '*'){
                multiply(str);
            }else if(str[i] === '-'){
                subtract(str);
            }
        }
    }
    
    var add = function(str){
        // if(typeof x === 'number'){
        //     // total += x;
        //     // return total
        console.log(str)
        var splitStr =str.split('+')
            str.split('+');
            console.log(splitStr)
            var parse0 = parseFloat(splitStr[0])
            var parse1 = parseFloat(splitStr[1])
            console.log(typeof parse0)
            var sum = parse0 + parse1;
            sum.toString();
            total=sum;
            return total
    
    }
    
    var multiply = function(str){
        var splitStr =str.split('*')
            str.split('*');
            console.log(splitStr)
            var parse0 = parseFloat(splitStr[0])
            var parse1 = parseFloat(splitStr[1])
            var sum = parse0 * parse1;
            sum.toString();
            total=sum;
            return total
    }
    
    var divide = function(str){
        var splitStr =str.split('/')
            str.split('/');
            console.log(splitStr)
            var parse0 = parseFloat(splitStr[0])
            var parse1 = parseFloat(splitStr[1])
            console.log(typeof parse0)
            var sum = parse0 / parse1;
            sum.toString();
            total=sum;
            return total
    }
    
    var subtract = function(str){
        var splitStr =str.split('-')
            str.split('-');
            console.log(splitStr)
            var parse0 = parseFloat(splitStr[0])
            var parse1 = parseFloat(splitStr[1])
            console.log(typeof parse0)
            var sum = parse0 - parse1;
            sum.toString();
            total=sum;
            return total
    }





    

    return{
        findOperator:findOperator,
        
        
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        
        totalC: totalC,
        
    }
}


